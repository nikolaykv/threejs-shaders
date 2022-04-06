import lessonFragmentShader from '../shaders/lesson/fragment.glsl';
import lessonVertexShader from '../shaders/lesson/vertex.glsl';
import {FLAG_TEXTURE} from "../parts/other_settings";
import * as THREE from 'three';

const MATERIAL = new THREE.ShaderMaterial(
    {
        vertexShader: lessonVertexShader,
        fragmentShader: lessonFragmentShader,
        wireframe: false,
        uniforms: {
            uFrequency: {value: new THREE.Vector2(10, 5)},
            uTime: {value: 0},
            uTexture: {value: FLAG_TEXTURE}
        },
    }
);

const MESH = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        1,
        1,
        32,
        32
    ),
    MATERIAL,
);

MESH.scale.y = 2 / 3;

export {MESH, MATERIAL};
