/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {screenResize, donutGltfLoader, animateScene} from "./parts/functions";
import {AXES_HELPER, CAMERA_HELPER} from "./parts/helpers";
import {LIGHT_ONE, LIGHT_TWO} from "./parts/light_settings";
import {SIZES, CANVAS} from "./parts/other_settings";
import {CAMERA} from "./parts/camera_settings";

/**
 * Пользовательские файлы и параметры
 */
import './style.css';

export const SCENE = new THREE.Scene();

SCENE.add(AXES_HELPER);
SCENE.add(LIGHT_ONE);
SCENE.add(LIGHT_TWO);
SCENE.add(CAMERA_HELPER);

/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
screenResize();

/**
 * Использование возможностей OrbitControls
 */
export const CONTROLS = new OrbitControls(CAMERA, CANVAS)
CONTROLS.enableDamping = true;

/**
 *  Загрузка 3D объекта и установка его позиции
 */
donutGltfLoader();

/**
 * Renderer
 */
export const RENDER = new THREE.WebGLRenderer({
    canvas: CANVAS
});

RENDER.setSize(SIZES.width, SIZES.height)
RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();
