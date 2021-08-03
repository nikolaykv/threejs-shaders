import * as THREE from "three";

const AMBIENT_LIGHT = new THREE.AmbientLight(
    0xffffff,
    0.5
);

const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(
    0x00fffc,
    0.3
);

const HEMISPHERE_LIGHT = new THREE.HemisphereLight(
    0xff0000,
    0x0000ff,
    0.3
);

const POINT_LIGHT = new THREE.PointLight(
    0xff9000,
    0.5,
    10,
    2
);
POINT_LIGHT.position.set(
    0.8,
    0.3,
    0.4
);

// TODO https://coursehunters.online/t/threejs-journey-part-3/4411
// TODO RectAreaLight
export {AMBIENT_LIGHT, DIRECTIONAL_LIGHT, HEMISPHERE_LIGHT, POINT_LIGHT};