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

const RECT_AREA_LIGHT = new THREE.RectAreaLight(
    0x4e00ff,
    2,
    1,
    1
);

const SPOT_LIGHT = new THREE.SpotLight(
    0x78ff00,
    0.5,
    10,
    Math.PI * 0.1,
    0.25,
    1
);

export {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,
    HEMISPHERE_LIGHT,
    POINT_LIGHT,
    RECT_AREA_LIGHT,
    SPOT_LIGHT
};