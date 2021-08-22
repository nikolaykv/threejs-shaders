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
 * Направленный "Лунный свет"
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

/**
 * Точечный свет на дверью
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

export {
    AMBIENT_LIGHT,
    MOON_LIGHT,
    DOOR_LIGHT,
};