import * as THREE from "three";
import params from '../params.json';

const HEMISPHERE_LIGHT = new THREE.HemisphereLight(
    parseInt(params.hemisphereLight.params.skyColor, params.otherSettings.parseIntRadixValueToColor),
    parseInt(params.hemisphereLight.params.groundColor, params.otherSettings.parseIntRadixValueToColor),
    params.hemisphereLight.params.intensity
);

const DIRECTION_LIGHT = new THREE.DirectionalLight(
    parseInt(params.directionalLight.params.color, params.otherSettings.parseIntRadixValueToColor),
    params.directionalLight.params.intensity
);

HEMISPHERE_LIGHT.position.set(
    params.hemisphereLight.position.x,
    params.hemisphereLight.position.y,
    params.hemisphereLight.position.z
);

DIRECTION_LIGHT.position.set(
    params.directionalLight.position.x,
    params.directionalLight.position.y,
    params.directionalLight.position.z,
);

DIRECTION_LIGHT.castShadow = params.otherSettings.castShadow;
DIRECTION_LIGHT.shadow.camera.top = params.directionalLight.shadowCamera.top;
DIRECTION_LIGHT.shadow.camera.bottom = params.directionalLight.shadowCamera.bottom;
DIRECTION_LIGHT.shadow.camera.left = params.directionalLight.shadowCamera.left;
DIRECTION_LIGHT.shadow.camera.right = params.directionalLight.shadowCamera.right;


DIRECTION_LIGHT.name = params.directionalLight.name;
HEMISPHERE_LIGHT.name = params.hemisphereLight.name;

export {HEMISPHERE_LIGHT, DIRECTION_LIGHT};