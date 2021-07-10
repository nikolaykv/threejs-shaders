import params from '../params.json';
import * as THREE from "three";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";


// 0
const ZERO_POINT = new THREE.Mesh(
    new THREE.TextGeometry("0", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

/**
 * Ocь X
 * @type {Mesh}
 */
// 0.1
const POINT_ONE_X = new THREE.Mesh(
    new THREE.TextGeometry("0.1", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.2
const POINT_TWO_X = new THREE.Mesh(
    new THREE.TextGeometry("0.2", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.3
const POINT_THREE_X = new THREE.Mesh(
    new THREE.TextGeometry("0.3", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.4
const POINT_FOUR_X = new THREE.Mesh(
    new THREE.TextGeometry("0.4", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.5
const POINT_FIVE_X = new THREE.Mesh(
    new THREE.TextGeometry("0.5", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

/**
 * Ocь Y
 * @type {Mesh}
 */
    // 0.1
const POINT_ONE_Y = new THREE.Mesh(
    new THREE.TextGeometry("0.1", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
    );

// 0.2
const POINT_TWO_Y = new THREE.Mesh(
    new THREE.TextGeometry("0.2", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.3
const POINT_THREE_Y = new THREE.Mesh(
    new THREE.TextGeometry("0.3", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.4
const POINT_FOUR_Y = new THREE.Mesh(
    new THREE.TextGeometry("0.4", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.5
const POINT_FIVE_Y = new THREE.Mesh(
    new THREE.TextGeometry("0.5", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

/**
 * Ocь Z
 * @type {Mesh}
 */
// 0.1
const POINT_ONE_Z = new THREE.Mesh(
    new THREE.TextGeometry("0.1", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.2
const POINT_TWO_Z = new THREE.Mesh(
    new THREE.TextGeometry("0.2", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.3
const POINT_THREE_Z = new THREE.Mesh(
    new THREE.TextGeometry("0.3", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.4
const POINT_FOUR_Z = new THREE.Mesh(
    new THREE.TextGeometry("0.4", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

// 0.5
const POINT_FIVE_Z = new THREE.Mesh(
    new THREE.TextGeometry("0.5", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: params.otherSettings.fontStyle
    }),
    new THREE.MeshBasicMaterial({color: params.axesCoordinates.color})
);

ZERO_POINT.name = params.axesCoordinateNames.textGeometryZeroCoordinates;

POINT_ONE_X.name = params.axesCoordinateNames.textGeometryPointOneAxisX;
POINT_TWO_X.name = params.axesCoordinateNames.textGeometryPointTwoAxisX;
POINT_THREE_X.name = params.axesCoordinateNames.textGeometryPointThreeAxisX;
POINT_FOUR_X.name = params.axesCoordinateNames.textGeometryPointFourAxisX;
POINT_FIVE_X.name = params.axesCoordinateNames.textGeometryPointFiveAxisX;

POINT_ONE_Y.name = params.axesCoordinateNames.textGeometryPointOneAxisY;
POINT_TWO_Y.name = params.axesCoordinateNames.textGeometryPointTwoAxisY;
POINT_THREE_Y.name = params.axesCoordinateNames.textGeometryPointThreeAxisY;
POINT_FOUR_Y.name = params.axesCoordinateNames.textGeometryPointFourAxisY;
POINT_FIVE_Y.name = params.axesCoordinateNames.textGeometryPointFiveAxisY;

POINT_ONE_Z.name = params.axesCoordinateNames.textGeometryPointOneAxisZ;
POINT_TWO_Z.name = params.axesCoordinateNames.textGeometryPointTwoAxisZ;
POINT_THREE_Z.name = params.axesCoordinateNames.textGeometryPointThreeAxisZ;
POINT_FOUR_Z.name = params.axesCoordinateNames.textGeometryPointFourAxisZ;
POINT_FIVE_Y.name = params.axesCoordinateNames.textGeometryPointFiveAxisZ;

export {
    ZERO_POINT,

    POINT_ONE_X,
    POINT_TWO_X,
    POINT_THREE_X,
    POINT_FOUR_X,
    POINT_FIVE_X,

    POINT_ONE_Y,
    POINT_TWO_Y,
    POINT_THREE_Y,
    POINT_FOUR_Y,
    POINT_FIVE_Y,

    POINT_ONE_Z,
    POINT_TWO_Z,
    POINT_THREE_Z,
    POINT_FOUR_Z,
    POINT_FIVE_Z,
};