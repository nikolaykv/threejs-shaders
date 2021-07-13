import * as THREE from 'three';
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
 * Шрифт из папки с примерами в node_modules/three
 *
 * @type {Font}
 */
const HELVETIKER_REGULAR_FONT = new THREE.Font(
    require(
        'three/examples/fonts/helvetiker_regular.typeface.json'
    )
);

/**
 * Загрузчик текстур и текстура
 */
const TEXTURE =  new THREE.TextureLoader().load('/textures/minecraft.png');

// Фильтр для текстуры
TEXTURE.magFilter = THREE.NearestFilter;


export {sizes, CANVAS, HELVETIKER_REGULAR_FONT, TEXTURE};