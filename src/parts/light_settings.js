import * as THREE from "three";

/**
 * Cвет окружения
 * @type {AmbientLight}
 */
const AMBIENT_LIGHT = new THREE.AmbientLight(
    '#b9d5ff',
    0.12
);

/**
 * Направленный "Лунный свет",
 * а также тени их минимальная оптимизация
 *
 * @type {DirectionalLight}
 */
const MOON_LIGHT = new THREE.DirectionalLight(
    '#b9d5ff',
    0.12
);
MOON_LIGHT.position.set(
    4,
    5,
    -2
);
MOON_LIGHT.castShadow = true;
MOON_LIGHT.shadow.mapSize.width = 256;
MOON_LIGHT.shadow.mapSize.height = 256;
MOON_LIGHT.shadow.camera.far = 15;

/**
 * Точечный свет на дверью,
 * а также тени их минимальная оптимизация
 * @type {PointLight}
 */
const DOOR_LIGHT = new THREE.PointLight(
    '#ff7d46',
    1,
    7
);
DOOR_LIGHT.position.set(
    0,
    2.2,
    2.7
);
DOOR_LIGHT.castShadow = true;
DOOR_LIGHT.shadow.mapSize.width = 256;
DOOR_LIGHT.shadow.mapSize.height = 256;
DOOR_LIGHT.shadow.camera.far = 7;

export {
    AMBIENT_LIGHT,
    MOON_LIGHT,
    DOOR_LIGHT,
};