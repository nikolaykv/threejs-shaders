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

let groundPlane, light, light2, light3, light4, light5;

init();

function init() {

    const container = document.getElementById( 'canvas' );

    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

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

    scene.background =  new THREE.Color( '#0a001f' )
    scene.fog = new THREE.FogExp2(0x0a001f, 0.004);

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

    const defaultMat = new THREE.MeshStandardMaterial( {
        color: new THREE.Color( '#280094' ),
        roughness: 1,
        envMap: cubeRenderTarget.texture,
        roughnessMap: rMap
    } );

    const boxProjectedMat = new THREE.MeshStandardMaterial( {
        color: new THREE.Color( '#280094' ),
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



    // const amb = new THREE.AmbientLight(0xFFFFFF, 1);
    // scene.add(amb);

    // const bulbGeometry = new THREE.SphereGeometry( 0.02, 16, 8 );
    // const bulbLight = new THREE.PointLight( 0xffee88, .5, 100, 1 );
    //
    // const geometry = new THREE.BoxGeometry( 30, 30, 30 );
    //
    // const bulbMat = new THREE.MeshStandardMaterial( {
    //     emissive: 0xffffee,
    //     emissiveIntensity: 1,
    //     color: 0x000000
    // } );
    // bulbLight.add( new THREE.Mesh( geometry, bulbMat ) );
    // bulbLight.position.set( 0, 2, 0 );
    // bulbLight.castShadow = true;
    // scene.add( bulbLight );



    const geometry = new THREE.BoxGeometry( 30, 30, 30 );
    // const material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF} );
    const rMapCube = loader.load( 'textures/lavatile.jpg' );
    rMapCube.wrapS = THREE.RepeatWrapping;
    rMapCube.wrapT = THREE.RepeatWrapping;
    rMapCube.repeat.set( 1, 1 );

    const material = new THREE.MeshStandardMaterial( {
        color: new THREE.Color( '#0d4d67' ),
        roughness: 1,
        envMap: cubeRenderTarget.texture,
        roughnessMap: rMapCube
    } );

    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 0
    cube.position.y = -35
    cube.position.z = 0

    cube.castShadow = true; //default is false
    cube.receiveShadow = false; //default

    scene.add( cube );



    light = new THREE.PointLight( 0xFFFFFF, 1.5, 300 );
    // light.position.set( 100, 20, 100 );
    light.castShadow = true; // default false

    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default

    scene.add( light );
    let helper = new THREE.PointLightHelper( light, 5 );
    scene.add( helper );






    light2 = new THREE.PointLight( 0xFF55FF, 1.5, 300 );
    light2.castShadow = true; // default false
    scene.add( light2 );
    let helper2 = new THREE.PointLightHelper( light2, 5 );
    scene.add( helper2 );


    light3 = new THREE.PointLight( 0x1155FF, 1.5, 300 );
    light3.castShadow = true; // default false
    scene.add( light3 );
    let helper3 = new THREE.PointLightHelper( light3, 5 );
    scene.add( helper3 );




    groundPlane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 10 ), boxProjectedMat );
    groundPlane.rotateX( - Math.PI / 2 );
    groundPlane.receiveShadow = true;
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

    animate();

}




function animate() {

    requestAnimationFrame( animate );
    render();

}



function render() {

    const time = Date.now() * 0.0002;

    if (light) {
        light.position.x = Math.sin( time * 6.7 ) * 50;
        light.position.y = Math.cos( time * 4.1 ) * 20 - 20;
        light.position.z = Math.cos( time * 6.3 ) * 50;
    }

    if (light2) {
        light2.position.x = Math.sin( time * 10.7 ) * 50 - 300;
        light2.position.y = Math.cos( time * 14.1 ) * 20 - 20;
        light2.position.z = Math.cos( time * 4.3 ) * 50;
    }

    if (light3) {
        light3.position.x = Math.sin( time * 4.7 ) * 30;
        light3.position.y = Math.cos( time * 5.1 ) * 20 - 20;
        light3.position.z = Math.cos( time * 3.3 ) * 40;
    }




    renderer.render( scene, camera );

}