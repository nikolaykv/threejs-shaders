import * as THREE from "three";
import params from "../params.json";

let lightOne = new THREE.PointLight(
    params.lightColor.value,
    params.lightIntensity.value
),
    lightTwo = new THREE.PointLight(
    params.lightColor.value,
    params.lightIntensity.value
);

lightOne.position.set(
    params.lightOne.x,
    params.lightOne.y,
    params.lightOne.z
);

lightTwo.position.set(
    params.lightTwo.x,
    params.lightTwo.y,
    params.lightTwo.z
);

lightOne.name = 'pointLightOne';
lightTwo.name = 'pointLightTwo';

export {lightOne, lightTwo};