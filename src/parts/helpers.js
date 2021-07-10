import * as THREE from 'three';
import params from '../params.json';
import {camera} from "./camera_settings";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";
import {directionalLight, hemiLight} from "./light_settings";

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
const AXES_HELPER = new THREE.AxesHelper(params.axesHelper.size);
AXES_HELPER.name = 'axesHelper';

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
    0x000000,
    0x000000
);

GRID_HELPER.material.opacity = 0.2;
GRID_HELPER.material.transparent = true;
GRID_HELPER.name = 'gridHelper';

/**
 * Метки направляющих x,y,z осей, реализованные
 * через TextGeometry
 */

let
    x = new THREE.Mesh(
        new THREE.TextGeometry(params.axesHelper.x.label, {
            size: params.axesHelper.textSize,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial({color: params.axesHelper.color})),

    y = new THREE.Mesh(
        new THREE.TextGeometry(params.axesHelper.y.label, {
            size: params.axesHelper.textSize,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial({color: params.axesHelper.color})),

    z = new THREE.Mesh(
        new THREE.TextGeometry(params.axesHelper.z.label, {
            size: params.axesHelper.textSize,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial({color: params.axesHelper.color}));

x.castShadow = true;
/**
 * Хелпер DirectionalLight источника света
 *
 * @type {DirectionalLightHelper}
 */
const DIRECTION_LIGHT_HELPER = new THREE.DirectionalLightHelper(
    directionalLight,
    params.axesHelper.size
);


const HEMISPHERE_LIGHT_HELPER = new THREE.HemisphereLightHelper(
    hemiLight
);

DIRECTION_LIGHT_HELPER.name = 'directionLightHelper';

x.name = 'axesLabelX';
y.name = 'axesLabelY';
z.name = 'axesLabelZ';

export {AXES_HELPER, CAMERA_HELPER, GRID_HELPER, x, y, z, DIRECTION_LIGHT_HELPER, HEMISPHERE_LIGHT_HELPER};