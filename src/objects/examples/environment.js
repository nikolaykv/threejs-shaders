import * as THREE from "three";

const CUBE_TEXTURE_LOADER = new THREE.CubeTextureLoader()

const ENVIRONMENT_MAP_TEXTURE = CUBE_TEXTURE_LOADER.load([
    '/textures/environmentMaps/0/px.jpg',
    '/textures/environmentMaps/0/nx.jpg',
    '/textures/environmentMaps/0/py.jpg',
    '/textures/environmentMaps/0/ny.jpg',
    '/textures/environmentMaps/0/pz.jpg',
    '/textures/environmentMaps/0/nz.jpg'
]);

export {ENVIRONMENT_MAP_TEXTURE};