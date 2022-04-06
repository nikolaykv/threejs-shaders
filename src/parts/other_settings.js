import * as THREE from "three";
/**
 * Размеры холста
 *
 * @type {{width: number, height: number}}
 */
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * @type {Element}
 */
const CANVAS = document.querySelector('canvas.webgl');

/**
 * @type {Clock}
 */
const CLOCK = new THREE.Clock();

/**
 * @type {TextureLoader}
 */
const TEXTURE_LOADER = new THREE.TextureLoader();

/**
 * @type {Texture}
 */
const FLAG_TEXTURE = TEXTURE_LOADER.load('/textures/flag.jpg');

export {
    sizes,
    CANVAS,
    CLOCK,
    FLAG_TEXTURE
};