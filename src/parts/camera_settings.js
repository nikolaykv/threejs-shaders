import * as THREE from "three";
import params from "../params.json";
import {sizes} from "./other_settings";


/**
 * Настройка камеры
 *
 * @type {PerspectiveCamera}
 */
let camera = new THREE.PerspectiveCamera(
    params.perspectiveCamera.fov,
    sizes.width / sizes.height,
    params.perspectiveCamera.near,
    params.perspectiveCamera.far
);

camera.position.set(
    params.perspectiveCamera.x,
    params.perspectiveCamera.y,
    params.perspectiveCamera.z
);

export {camera};