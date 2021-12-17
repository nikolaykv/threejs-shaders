import * as THREE from "three";

const AMBIENT_LIGHT = new THREE.AmbientLight(
    0xffffff,
    0.5
);
const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(
    0xffffff,
    0.46
);

export {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT
}