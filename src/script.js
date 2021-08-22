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
} from "./parts/helpers";

import {
    AMBIENT_LIGHT,
    MOON_LIGHT,
} from "./parts/light_settings";

import {
    HOUSE_GROUP
} from "./scene_groups/house/house";

import {
    GRAVES_GROUP
} from "./scene_groups/graves/graves";

/**
 * ============================
 */
import './style.css';

// import {GUI} from "./parts/dat_gui_settings";

// Добавить всю сцену в группу
SCENE.add(
    HOUSE_GROUP,

    GRAVES_GROUP,

    AXES_HELPER,

    AMBIENT_LIGHT,
    MOON_LIGHT,
);


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

RENDER.setClearColor('#262837');

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

export {RENDER, ORBIT_CONTROLS};
