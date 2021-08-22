import * as THREE from 'three';

/**
 * Далее и ниже точечный свет,
 * тени и настройка теней "Призраков"
 *
 * @type {PointLight}
 */
const GHOST_ONE = new THREE.PointLight(
    '#ff00ff', 2, 3
);
GHOST_ONE.castShadow = true;
GHOST_ONE.shadow.mapSize.width = 256;
GHOST_ONE.shadow.mapSize.height = 256;
GHOST_ONE.shadow.camera.far = 7;

const GHOST_TWO = new THREE.PointLight(
    '#ff00ff', 2, 3
);
GHOST_TWO.castShadow = true;
GHOST_TWO.shadow.mapSize.width = 256;
GHOST_TWO.shadow.mapSize.height = 256;
GHOST_TWO.shadow.camera.far = 7;

const GHOST_THREE = new THREE.PointLight(
    '#ff00ff', 2, 3
);
GHOST_THREE.castShadow = true;
GHOST_THREE.shadow.mapSize.width = 256;
GHOST_THREE.shadow.mapSize.height = 256;
GHOST_THREE.shadow.camera.far = 7;

export {
    GHOST_ONE,
    GHOST_TWO,
    GHOST_THREE
};