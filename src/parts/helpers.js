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
 * Сетка или "земля", на которой лежат объекты
 *
 * @type {GridHelper}
 */
const GRID_HELPER = new THREE.GridHelper(
    params.gridHelper.size,
    params.gridHelper.divisions,
    '',
    params.gridHelper.colors.two
);

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
}),
    axisLabelToY = new THREE.TextGeometry(params.axesHelper.y.label, {
    size: params.axesHelper.textSize,
    height: params.axesHelper.textHeight,
    curveSegments: params.axesHelper.curveSegments,
    font: HELVETIKER_REGULAR_FONT,
    style: "normal"
}),
    axisLabelToZ = new THREE.TextGeometry(params.axesHelper.z.label, {
    size: params.axesHelper.textSize,
    height: params.axesHelper.textHeight,
    curveSegments: params.axesHelper.curveSegments,
    font: HELVETIKER_REGULAR_FONT,
    style: "normal"
});

let x = new THREE.Mesh(axisLabelToX, new THREE.MeshBasicMaterial(
    {color: params.axesHelper.x.color}
)),
    y = new THREE.Mesh(axisLabelToY, new THREE.MeshBasicMaterial(
    {color: params.axesHelper.y.color}
)),
    z = new THREE.Mesh(axisLabelToZ, new THREE.MeshBasicMaterial(
    {color: params.axesHelper.z.color}
));

export {AXES_HELPER, CAMERA_HELPER, GRID_HELPER, x, y, z};