import * as THREE from 'three';
import params from '../params.json';
import {CAMERA} from "./camera_settings";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";
import {DIRECTION_LIGHT, HEMISPHERE_LIGHT} from "./light_settings";
import {BUFFER_GEOMETRY_RECTANGLE} from '../objects/rectangle/rectangle';
import {VertexNormalsHelper} from "three/examples/jsm/helpers/VertexNormalsHelper";

/**
 * Визуализировать оси x, y, z
 *
 * @type {AxesHelper}
 */
const AXES_HELPER = new THREE.AxesHelper(params.axesHelper.size);
AXES_HELPER.name = params.axesHelper.name;

/**
 * Визуализировать оси камеры
 *
 * @type {CameraHelper}
 */
const CAMERA_HELPER = new THREE.CameraHelper(CAMERA);
CAMERA_HELPER.name = params.otherNames.cameraHelper;

/**
 * Сетка или "земля", на которой лежат объекты
 *
 * @type {GridHelper}
 */
const GRID_HELPER = new THREE.GridHelper(
    params.gridHelper.size,
    params.gridHelper.divisions,
    parseInt(params.gridHelper.colors, params.otherSettings.parseIntRadixValueToColor),
    parseInt(params.gridHelper.colors, params.otherSettings.parseIntRadixValueToColor)
);

GRID_HELPER.material.opacity = params.gridHelper.material.opacity;
GRID_HELPER.material.transparent = params.gridHelper.material.transparent;
GRID_HELPER.name = params.gridHelper.name;

/**
 * Метки направляющих x,y,z осей, реализованные
 * через TextGeometry
 */
const X = new THREE.Mesh(
    new THREE.TextGeometry(params.axesHelper.x.label, {
        size: params.axesHelper.textSize,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesHelper.color}));

const Y = new THREE.Mesh(
    new THREE.TextGeometry(params.axesHelper.y.label, {
        size: params.axesHelper.textSize,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesHelper.color}));

const Z = new THREE.Mesh(
    new THREE.TextGeometry(params.axesHelper.z.label, {
        size: params.axesHelper.textSize,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesHelper.color}));

/**
 * Хелпер DirectionalLight источника света
 *
 * @type {DirectionalLightHelper}
 */
const DIRECTION_LIGHT_HELPER = new THREE.DirectionalLightHelper(
    DIRECTION_LIGHT,
    params.axesHelper.size
);

const HEMISPHERE_LIGHT_HELPER = new THREE.HemisphereLightHelper(
    HEMISPHERE_LIGHT
);

DIRECTION_LIGHT_HELPER.name = 'directionLightHelper';

X.name = params.axesHelper.x.name;
Y.name = params.axesHelper.y.name;
Z.name = params.axesHelper.z.name;

/**
 * Хелпер направляющих для вершин треугольников BufferGeometry
 * из которых и строятся объекты данного класса
 *
 * @type {VertexNormalsHelper}
 */
const BUFFER_GEOMETRY_RECTANGLE_VERTEX_NORMALS_HELPER = new VertexNormalsHelper(
    BUFFER_GEOMETRY_RECTANGLE,
    params.vertexNormalsHelper.size,
    params.vertexNormalsHelper.color,
);

BUFFER_GEOMETRY_RECTANGLE_VERTEX_NORMALS_HELPER.name = params.vertexNormalsHelper.name;


export {
    AXES_HELPER,
    CAMERA_HELPER,
    GRID_HELPER,
    X, Y, Z,
    DIRECTION_LIGHT_HELPER,
    HEMISPHERE_LIGHT_HELPER,
    BUFFER_GEOMETRY_RECTANGLE_VERTEX_NORMALS_HELPER
};