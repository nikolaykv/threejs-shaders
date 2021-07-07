import * as THREE from 'three';
import params from '../params.json';
import {camera} from "./camera_settings";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
const AXES_HELPER = new THREE.AxesHelper(params.axesHelper.size);

/**
 * Визуализировать оси камеры
 *
 * @type {CameraHelper}
 */
const CAMERA_HELPER = new THREE.CameraHelper(camera);

/**
 * Метки направляющих x,y,z осей, реализованные
 * через TextGeometry
 */
let axisLabelToX = new THREE.TextGeometry(params.axesHelper.x.label, {
    size: params.axesHelper.textSize,
    height: params.axesHelper.textHeight,
    curveSegments: params.axesHelper.curveSegments,
    font: HELVETIKER_REGULAR_FONT,
    style: "normal"
});

let axisLabelToY = new THREE.TextGeometry(params.axesHelper.y.label, {
    size: params.axesHelper.textSize,
    height: params.axesHelper.textHeight,
    curveSegments: params.axesHelper.curveSegments,
    font: HELVETIKER_REGULAR_FONT,
    style: "normal"
});

let axisLabelToZ = new THREE.TextGeometry(params.axesHelper.z.label, {
    size: params.axesHelper.textSize,
    height: params.axesHelper.textHeight,
    curveSegments: params.axesHelper.curveSegments,
    font: HELVETIKER_REGULAR_FONT,
    style: "normal"
});

let x = new THREE.Mesh(axisLabelToX, new THREE.MeshBasicMaterial({color: params.axesHelper.x.color}));
let y = new THREE.Mesh(axisLabelToY, new THREE.MeshBasicMaterial({color: params.axesHelper.y.color}));
let z = new THREE.Mesh(axisLabelToZ, new THREE.MeshBasicMaterial({color: params.axesHelper.z.color}));

export {AXES_HELPER, CAMERA_HELPER, x, y, z};