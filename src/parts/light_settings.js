import * as THREE from "three";

/**
 * Cвет окружения
 * @type {AmbientLight}
 */
const AMBIENT_LIGHT = new THREE.AmbientLight(
    0xffffff,
    0.7
);

const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(0xffffff, 0.2);
DIRECTIONAL_LIGHT.castShadow = true;
DIRECTIONAL_LIGHT.shadow.mapSize.set(1024, 1024);
DIRECTIONAL_LIGHT.shadow.camera.far = 15;
DIRECTIONAL_LIGHT.shadow.camera.left = - 7;
DIRECTIONAL_LIGHT.shadow.camera.top = 7;
DIRECTIONAL_LIGHT.shadow.camera.right = 7;
DIRECTIONAL_LIGHT.shadow.camera.bottom = - 7;
DIRECTIONAL_LIGHT.position.set(5, 5, 5);

export {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT
};