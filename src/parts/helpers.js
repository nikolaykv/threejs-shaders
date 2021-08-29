import * as THREE from 'three';

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
const AXES_HELPER = new THREE.AxesHelper(200);


const GRID_HELPER = new THREE.GridHelper(
    20,
    10,
    '0x000000',
);
GRID_HELPER.material.opacity = 0.5;
GRID_HELPER.material.transparent = true;

export {
    AXES_HELPER,
    GRID_HELPER,
};