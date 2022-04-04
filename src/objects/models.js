import lessonFragmentShader from '../shaders/lesson/fragment.glsl';
import lessonVertexShader from '../shaders/lesson/vertex.glsl';
import {meshGeometrySettings} from "../parts/functions";
import * as THREE from 'three';


const GEOMETRY = new THREE.PlaneBufferGeometry(
    1,
    1,
    32,
    32
);

// Функция настройки геометрии MESH
meshGeometrySettings(GEOMETRY);

const MESH = new THREE.Mesh(
    GEOMETRY,
    new THREE.RawShaderMaterial({
        vertexShader: lessonVertexShader,
        fragmentShader: lessonFragmentShader,

        //wireframe: true,

        transparent: true,
    })
);

export {MESH};
