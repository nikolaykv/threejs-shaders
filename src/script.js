/**
 * ============================
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {screenResize, animateScene} from "./parts/functions";
import {sizes, CANVAS} from "./parts/other_settings";
import {CAMERA} from "./parts/camera_settings";
import {SCENE} from "./parts/scene_settings";
import * as THREE from 'three';

import {
    AXES_HELPER,
    GRID_HELPER,
} from "./parts/helpers";

import {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,
} from "./parts/light_settings";

import {
    CUBE_MESH,
} from "./objects/meshes";


/**
 * ============================
 */
import './style.css';

import {GUI} from "./parts/dat_gui_settings";

// Сгруппировать элементы сцены
const GROUP = new THREE.Group();

// Добавить все вспомогательные оси и сетку
GROUP.add(
    AXES_HELPER,
    GRID_HELPER,

    CUBE_MESH,

    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,
);

// Добавить всю сцену в группу
SCENE.add(GROUP);


/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
screenResize();

/**
 * Использование возможностей OrbitControls
 */
const ORBIT_CONTROLS = new OrbitControls(CAMERA, CANVAS)
ORBIT_CONTROLS.enableDamping = true;


/**
 * Renderer
 */
const RENDER = new THREE.WebGLRenderer({
    antialias: true,
    canvas: CANVAS
});


RENDER.setSize(sizes.width, sizes.height)
RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();

// Отладка через экспериментальное расширение Google Chrome
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: SCENE}));
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: RENDER}));
}

export {RENDER, ORBIT_CONTROLS, GROUP};
