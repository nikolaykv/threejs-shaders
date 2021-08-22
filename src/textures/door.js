import * as THREE from 'three';

const DOOR_COLOR_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/color.jpg'
);

const DOOR_ALPHA_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/alpha.jpg'
);

const DOOR_AMBIENT_OCCLUSION_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/ambientOcclusion.jpg'
);

const DOOR_HEIGHT_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/height.jpg'
);

const DOOR_NORMAL_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/normal.jpg'
);

const DOOR_METALNESS_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/metalness.jpg'
);

const DOOR_ROUGHNESS_TEXTURE = new THREE.TextureLoader().load(
    './textures/door/roughness.jpg'
);

export {
    DOOR_COLOR_TEXTURE,
    DOOR_ALPHA_TEXTURE,
    DOOR_AMBIENT_OCCLUSION_TEXTURE,
    DOOR_HEIGHT_TEXTURE,
    DOOR_NORMAL_TEXTURE,
    DOOR_METALNESS_TEXTURE,
    DOOR_ROUGHNESS_TEXTURE
};
