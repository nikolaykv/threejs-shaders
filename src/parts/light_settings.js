import * as THREE from "three";
import params from "../params.json";

export const LIGHT_ONE = new THREE.PointLight(
    params.lightColor,
    params.lightIntensity
);

export const LIGHT_TWO = new THREE.PointLight(
    params.lightColor,
    params.lightIntensity
);

LIGHT_ONE.position.set(
    params.lightOne.x,
    params.lightOne.y,
    params.lightOne.z
);

LIGHT_TWO.position.set(
    params.lightTwo.x,
    params.lightTwo.y,
    params.lightTwo.z
);