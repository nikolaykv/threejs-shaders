import params from '../params.json';
import * as THREE from "three";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";

let
    // 0
    zeroPoint = new THREE.TextGeometry("0", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointZeroCoordinates = new THREE.Mesh(
        zeroPoint,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.2
    pointOne = new THREE.TextGeometry("0.2", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointOneCoordinates = new THREE.Mesh(
        pointOne,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.4
    pointTwo = new THREE.TextGeometry("0.4", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointTwoCoordinates = new THREE.Mesh(
        pointTwo,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.6
    pointThree = new THREE.TextGeometry("0.6", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointThreeCoordinates = new THREE.Mesh(
        pointThree,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.8
    pointFour = new THREE.TextGeometry("0.8", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointFourCoordinates = new THREE.Mesh(
        pointFour,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 1
    pointFive = new THREE.TextGeometry("1", {
        size: params.axesHelper.textSize,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointFiveCoordinates = new THREE.Mesh(
        pointFive,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.1
    pointSix = new THREE.TextGeometry("0.1", {
        size: params.axesCoordinates.size,
        height: params.axesHelper.textHeight,
        curveSegments: params.axesHelper.curveSegments,
        font: HELVETIKER_REGULAR_FONT,
        style: "normal"
    }),

    pointSixCoordinates = new THREE.Mesh(
        pointSix,
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    );


export {
    pointOneCoordinates,
    pointZeroCoordinates,
    pointTwoCoordinates,
    pointThreeCoordinates,
    pointFourCoordinates,
    pointFiveCoordinates,
    pointSixCoordinates
};