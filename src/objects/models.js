import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {SCENE} from "../parts/scene_settings";
import * as THREE from 'three';

const GLTF_LOADER = new GLTFLoader();

let mixer = null;

GLTF_LOADER.load(
    '/models/Fox/glTF/Fox.gltf',
    function (gltf) {
        gltf.scene.scale.set(0.025, 0.025, 0.025);
        SCENE.add(gltf.scene);

        mixer = new THREE.AnimationMixer(gltf.scene);
        const ACTION = mixer.clipAction(gltf.animations[2]);
        ACTION.play();
    }
);

export {
    GLTF_LOADER,
    mixer
}