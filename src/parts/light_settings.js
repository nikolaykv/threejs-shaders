import * as THREE from "three";

const AMBIENT_LIGHT = new THREE.AmbientLight(
    '#b9d5ff',
    0.12
);

const MOON_LIGHT = new THREE.DirectionalLight(
    '#b9d5ff',
    0.12
);
MOON_LIGHT.position.set(
    4,
    5,
    -2
);

const DOOR_LIGHT = new THREE.PointLight(
    '#ff7d46',
    1,
    7
);
DOOR_LIGHT.position.set(
    0,
    2.2,
    2.7
);

export {
    AMBIENT_LIGHT,
    MOON_LIGHT,
    DOOR_LIGHT,
};