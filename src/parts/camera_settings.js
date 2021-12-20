import * as THREE from "three";
import {sizes} from "./other_settings";

/**
 * Настройка камеры
 *
 * @type {PerspectiveCamera}
 */
const CAMERA = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100,
);

CAMERA.position.set(4, 1, -4);

export {CAMERA};