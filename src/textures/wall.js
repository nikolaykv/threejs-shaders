import * as THREE from 'three';

const BRICKS_COLOR_TEXTURE = new THREE.TextureLoader().load(
    '/textures/bricks/color.jpg'
);

const BRICKS_AMBIENT_OCCLUSION_TEXTURE = new THREE.TextureLoader().load(
    '/textures/bricks/ambientOcclusion.jpg'
);

const BRICKS_NORMAL_TEXTURE = new THREE.TextureLoader().load(
    '/textures/bricks/normal.jpg'
);

const BRICKS_ROUGHNESS_TEXTURE = new THREE.TextureLoader().load(
    '/textures/bricks/roughness.jpg'
);

export {
    BRICKS_COLOR_TEXTURE,
    BRICKS_AMBIENT_OCCLUSION_TEXTURE,
    BRICKS_NORMAL_TEXTURE,
    BRICKS_ROUGHNESS_TEXTURE
};