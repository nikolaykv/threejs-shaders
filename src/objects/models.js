import lessonFragmentShader from '../shaders/lesson/fragment.glsl';
import lessonVertexShader from '../shaders/lesson/vertex.glsl';
import * as THREE from 'three';


const GEOMETRY = new THREE.PlaneBufferGeometry(
    1,
    1,
    32,
    32
);

const MATERIAL = new THREE.RawShaderMaterial(
    {
        vertexShader: lessonVertexShader,
        fragmentShader: lessonFragmentShader,

        // wireframe: true,
        // transparent: true,

        uniforms: {
            uFrequency: {value: new THREE.Vector2(10, 5)},
            uTime: {value: 0},
            uColor: { value: new THREE.Color('orange') }
        },
    }
);

const MESH = new THREE.Mesh(
    GEOMETRY,
    MATERIAL,
);

MESH.scale.y = 2 / 3;

export {MESH, MATERIAL, GEOMETRY};
