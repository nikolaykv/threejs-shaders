import * as THREE from "three";

const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(
    '#ffffff',
    3
);
DIRECTIONAL_LIGHT.position.set(
    0.25,
    3,
    - 2.25
);

export {DIRECTIONAL_LIGHT}