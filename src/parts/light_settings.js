import * as THREE from "three";

const AMBIENT_LIGHT = new THREE.AmbientLight(
    0xffffff,
    0.5
);

const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(
    0x00fffc,
    0.3
);

export {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,
};