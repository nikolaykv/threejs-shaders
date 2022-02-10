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
DIRECTIONAL_LIGHT.castShadow = true;
DIRECTIONAL_LIGHT.shadow.camera.far = 15;
DIRECTIONAL_LIGHT.shadow.mapSize.set(1024, 1024);

export {DIRECTIONAL_LIGHT}