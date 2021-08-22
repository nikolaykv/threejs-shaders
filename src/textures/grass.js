import * as THREE from 'three';

const GRASS_COLOR_TEXTURE = new THREE.TextureLoader().load(
    '/textures/grass/color.jpg'
);

const GRASS_AMBIENT_OCCLUSION_TEXTURE = new THREE.TextureLoader().load(
    '/textures/grass/ambientOcclusion.jpg'
);

const GRASS_NORMAL_TEXTURE = new THREE.TextureLoader().load(
    '/textures/grass/normal.jpg'
);

const GRASS_ROUGHNESS_TEXTURE = new THREE.TextureLoader().load(
    '/textures/grass/roughness.jpg'
);

GRASS_COLOR_TEXTURE.repeat.set(8, 8);
GRASS_AMBIENT_OCCLUSION_TEXTURE.repeat.set(8, 8);
GRASS_NORMAL_TEXTURE.repeat.set(8, 8);
GRASS_ROUGHNESS_TEXTURE.repeat.set(8, 8);

GRASS_COLOR_TEXTURE.wrapS = THREE.RepeatWrapping;
GRASS_AMBIENT_OCCLUSION_TEXTURE.wrapS = THREE.RepeatWrapping;
GRASS_NORMAL_TEXTURE.wrapS = THREE.RepeatWrapping;
GRASS_ROUGHNESS_TEXTURE.wrapS = THREE.RepeatWrapping;

GRASS_COLOR_TEXTURE.wrapT = THREE.RepeatWrapping;
GRASS_AMBIENT_OCCLUSION_TEXTURE.wrapT = THREE.RepeatWrapping;
GRASS_NORMAL_TEXTURE.wrapT = THREE.RepeatWrapping;
GRASS_ROUGHNESS_TEXTURE.wrapT = THREE.RepeatWrapping;

export {
    GRASS_COLOR_TEXTURE,
    GRASS_AMBIENT_OCCLUSION_TEXTURE,
    GRASS_NORMAL_TEXTURE,
    GRASS_ROUGHNESS_TEXTURE
};