import * as THREE from 'three';

const cubeTextureLoader = new THREE.CubeTextureLoader()

const ENVIRONMENT_MAP_TEXTURE = new THREE.CubeTextureLoader().load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
]);

export {ENVIRONMENT_MAP_TEXTURE}