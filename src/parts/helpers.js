import * as THREE from 'three';

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
const AXES_HELPER = new THREE.AxesHelper(200);

/**
 * Сетка или "земля", на которой лежат объекты
 *
 * @type {GridHelper}
 */
const GRID_HELPER = new THREE.GridHelper(
    2,
    10,
    "",
    "white",
);

GRID_HELPER.material.opacity = 0.2;
GRID_HELPER.material.transparent = true;

export {
    AXES_HELPER,
    GRID_HELPER,
};