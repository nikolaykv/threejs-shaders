import * as THREE from "three";
import params from "../params.json";
import {SIZES} from "./other_settings";

/**
 * Настройка камеры
 *
 * @type {PerspectiveCamera}
 */
export const CAMERA = new THREE.PerspectiveCamera(
    params.perspectiveCamera.fov,
    SIZES.width / SIZES.height,
    params.perspectiveCamera.near,
    params.perspectiveCamera.far
);

CAMERA.position.set(
    params.perspectiveCamera.x,
    params.perspectiveCamera.y,
    params.perspectiveCamera.z
);
