import * as THREE from "three";


const HEMISPHERE_LIGHT = new THREE.HemisphereLight(
    parseInt("0xffffff", 16),
    parseInt("0x444444", 16),
    0.5
);

const DIRECTION_LIGHT = new THREE.DirectionalLight(
    parseInt("0xffffff", 16),
    0.5
);

HEMISPHERE_LIGHT.position.set(0, 0.1, 0);
DIRECTION_LIGHT.position.set(0, 0.5, 0.5);


const AMBIENT_LIGHT = new THREE.AmbientLight(
    0xffffff,
    0.3
);

const POINT_LIGHT = new THREE.PointLight(
    0xffffff,
    0.3
);
POINT_LIGHT.position.set(2, 3, 4);

export {AMBIENT_LIGHT, POINT_LIGHT, HEMISPHERE_LIGHT, DIRECTION_LIGHT}
