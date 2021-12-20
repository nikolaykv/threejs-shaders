import * as THREE from 'three';

/**
 * @type {Scene}
 */
const SCENE = new THREE.Scene();

/**
 * Помещено здесь, потому что текстуры окружения
 * можно отнести к настройкам сцены
 *
 * @type {CubeTextureLoader}
 */
const ENVIRONMENT_MAP = new THREE.CubeTextureLoader().load([
    '/textures/environmentMaps/0/px.jpg',
    '/textures/environmentMaps/0/nx.jpg',
    '/textures/environmentMaps/0/py.jpg',
    '/textures/environmentMaps/0/ny.jpg',
    '/textures/environmentMaps/0/pz.jpg',
    '/textures/environmentMaps/0/nz.jpg'
]);

SCENE.background = ENVIRONMENT_MAP;
SCENE.environment = ENVIRONMENT_MAP;

export {
    SCENE,
    ENVIRONMENT_MAP
};