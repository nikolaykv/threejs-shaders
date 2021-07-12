import * as THREE from 'three';
import params from '../params.json';

const SCENE = new THREE.Scene();
SCENE.name = params.sceneSettings.name;
SCENE.background = new THREE.Color(
    parseInt(
        params.sceneSettings.background,
        params.otherSettings.parseIntRadixValueToColor
    )
);

// Эффект тумана
SCENE.fog = new THREE.Fog(
    parseInt(
        params.sceneSettings.fog.color,
        params.otherSettings.parseIntRadixValueToColor
    ),
    params.sceneSettings.fog.near,
    params.sceneSettings.fog.far
);


// Земля
const GROUND = new THREE.Mesh(
    new THREE.PlaneGeometry(
        params.sceneSettings.ground.sizes,
        params.sceneSettings.ground.sizes
    ),
    new THREE.MeshPhongMaterial(
        {
            color: params.sceneSettings.ground.color,
            depthWrite: params.otherSettings.false
        }
    ));
GROUND.rotation.x = - Math.PI / 2;
GROUND.receiveShadow = params.otherSettings.true;

GROUND.name = params.sceneSettings.ground.name;

export {SCENE, GROUND};