import * as THREE from './three/three.module.js';

import { GUI } from './three/dat.gui.module.js';
import { OrbitControls } from './three/OrbitControls.js';
import { RectAreaLightHelper } from './three/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from './three/RectAreaLightUniformsLib.js';

// shader injection for box projected cube environment mapping
const worldposReplace = /* glsl */`
			#define BOX_PROJECTED_ENV_MAP

			#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

				vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

				#ifdef BOX_PROJECTED_ENV_MAP

					vWorldPosition = worldPosition.xyz;

				#endif

			#endif
			`;

const envmapPhysicalParsReplace = /* glsl */`
			#if defined( USE_ENVMAP )

				#define BOX_PROJECTED_ENV_MAP

				#ifdef BOX_PROJECTED_ENV_MAP

					uniform vec3 cubeMapSize;
					uniform vec3 cubeMapPos;
					varying vec3 vWorldPosition;

					vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

						vec3 nDir = normalize( v );
						vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
						vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

						vec3 rbminmax;
						rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
						rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
						rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

						float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
						vec3 boxIntersection = vWorldPosition + nDir * correction;

						return boxIntersection - cubePos;
					}

				#endif

				#ifdef ENVMAP_MODE_REFRACTION
					uniform float refractionRatio;
				#endif

				vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

					vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

					#ifdef ENVMAP_TYPE_CUBE

						#ifdef BOX_PROJECTED_ENV_MAP

							worldNormal = parallaxCorrectNormal( worldNormal, cubeMapSize, cubeMapPos );

						#endif

						vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

						// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
						// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

						#ifdef TEXTURE_LOD_EXT

							vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

						#else

							// force the bias high to get the last LOD level as it is the most blurred.
							vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

						#endif

						envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

					#elif defined( ENVMAP_TYPE_CUBE_UV )

						vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

					#else

						vec4 envMapColor = vec4( 0.0 );

					#endif

					return PI * envMapColor.rgb * envMapIntensity;

				}

				// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
				float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

					float maxMIPLevelScalar = float( maxMIPLevel );

					float sigma = PI * roughness * roughness / ( 1.0 + roughness );
					float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

					// clamp to allowable LOD ranges.
					return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

				}

				vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

					#ifdef ENVMAP_MODE_REFLECTION

						vec3 reflectVec = reflect( -viewDir, normal );

						// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
						reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

					#else

						vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

					#endif

					reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

					float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

					#ifdef ENVMAP_TYPE_CUBE

						#ifdef BOX_PROJECTED_ENV_MAP
							reflectVec = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );
						#endif

						vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

						#ifdef TEXTURE_LOD_EXT

							vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

						#else

							vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

						#endif

						envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

					#elif defined( ENVMAP_TYPE_CUBE_UV )

						vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

					#endif

					return envMapColor.rgb * envMapIntensity;
				}
			#endif
			`;

// scene size
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// camera
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 1;
const FAR = 800;

let camera, cubeCamera, scene, renderer;

let cameraControls;

let groundPlane, wallMat;

init();

function init() {

    const container = document.getElementById( 'canvas' );

    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );
    container.appendChild( renderer.domElement );

    // gui controls
    const gui = new GUI();
    const params = {
        'box projected': true
    };
    const bpcemGui = gui.add( params, 'box projected' );

    bpcemGui.onChange( function ( value ) {

        if ( value ) {

            groundPlane.material = boxProjectedMat;

        } else {

            groundPlane.material = defaultMat;

        }

        render();

    } );

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
    camera.position.set( 280, 106, - 5 );

    cameraControls = new OrbitControls( camera, renderer.domElement );
    cameraControls.target.set( 0, - 10, 0 );
    cameraControls.maxDistance = 400;
    cameraControls.minDistance = 10;
    cameraControls.addEventListener( 'change', render );
    cameraControls.update();

    // cube camera for environment map

    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 2048, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter
    } );
    cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );

    cubeCamera.position.set( 0, - 100, 0 );
    scene.add( cubeCamera );

    // ground floor ( with box projected environment mapping )
    const loader = new THREE.TextureLoader();
    const rMap = loader.load( 'textures/lavatile.jpg' );
    rMap.wrapS = THREE.RepeatWrapping;
    rMap.wrapT = THREE.RepeatWrapping;
    rMap.repeat.set( 15, 10 );

    const defaultMat = new THREE.MeshPhysicalMaterial( {
        roughness: 1,
        envMap: cubeRenderTarget.texture,
        roughnessMap: rMap
    } );

    const boxProjectedMat = new THREE.MeshPhysicalMaterial( {
        color: new THREE.Color( '#FFFFFF' ),
        roughness: 1,
        envMap: cubeRenderTarget.texture,
        roughnessMap: rMap
    } );

    boxProjectedMat.onBeforeCompile = function ( shader ) {

        //these parameters are for the cubeCamera texture
        shader.uniforms.cubeMapSize = { value: new THREE.Vector3( 200, 200, 100 ) };
        shader.uniforms.cubeMapPos = { value: new THREE.Vector3( 0, - 50, 0 ) };

        //replace shader chunks with box projection chunks
        shader.vertexShader = 'varying vec3 vWorldPosition;\n' + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            '#include <worldpos_vertex>',
            worldposReplace
        );

        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <envmap_physical_pars_fragment>',
            envmapPhysicalParsReplace
        );

    };

    groundPlane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 10 ), boxProjectedMat );
    groundPlane.rotateX( - Math.PI / 2 );
    groundPlane.position.set( 0, - 49, 0 );
    scene.add( groundPlane );

    //lights
    const width = 100;
    const height = 50;
    const intensity = 5;

    RectAreaLightUniformsLib.init();

    const blueRectLight = new THREE.RectAreaLight( 0x9aaeff, intensity, width, height );
    blueRectLight.position.set( 199, 5, 0 );
    blueRectLight.lookAt( 0, 5, 0 );
    scene.add( blueRectLight );

    const blueRectLightHelper = new RectAreaLightHelper( blueRectLight );
    blueRectLight.add( blueRectLightHelper );

    const redRectLight = new THREE.RectAreaLight( 0xf3aaaa, 20, width, height );
    redRectLight.position.set( - 99, 100, 0 );
    redRectLight.lookAt( 0, 5, 0 );
    scene.add( redRectLight );

    const redRectLightHelper = new RectAreaLightHelper( redRectLight );
    redRectLight.add( redRectLightHelper );

    render();

}



function render() {

    renderer.render( scene, camera );

}