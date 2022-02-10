import {DIRECTIONAL_LIGHT} from "./light_settings";
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
    'white',
);

GRID_HELPER.material.opacity = 0.5;
GRID_HELPER.material.transparent = true;

const DIRECTIONAL_LIGHT_CAMERA_HELPER = new THREE.CameraHelper(
    DIRECTIONAL_LIGHT.shadow.camera
);

export {
    AXES_HELPER,
    GRID_HELPER,
    DIRECTIONAL_LIGHT_CAMERA_HELPER
};