import params from '../params.json';
import {CAMERA} from "./camera_settings";
import * as THREE from 'three';

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
export const AXES_HELPER = new THREE.AxesHelper(params.axesHelper.size);

/**
 * Визуализировать оси камеры
 *
 * @type {CameraHelper}
 */
export const CAMERA_HELPER = new THREE.CameraHelper(CAMERA);