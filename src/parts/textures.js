import * as THREE from 'three';

//const cubeTextureLoader = new THREE.CubeTextureLoader();

const ENVIRONMENT_MAP_TEXTURE = new THREE.CubeTextureLoader().load([
    '/textures/environment/px.png',
    '/textures/environment/nx.png',
    '/textures/environment/py.png',
    '/textures/environment/ny.png',
    '/textures/environment/pz.png',
    '/textures/environment/nz.png'
]);

export {ENVIRONMENT_MAP_TEXTURE}