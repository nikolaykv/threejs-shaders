/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

import {
    AXES_HELPER,
    GRID_HELPER,
} from "./parts/helpers";

import {screenResize, animateScene} from "./parts/functions";
import {sizes, CANVAS} from "./parts/other_settings";
import {CAMERA} from "./parts/camera_settings";
import {SCENE} from "./parts/scene_settings";
import {CUBE_MESH} from "./objects/meshes";


/**
 * Пользовательские файлы и параметры
 */
import './style.css';
import {PARAMETERS} from "./parts/parameters";
import {GUI} from "./parts/dat_gui_settings";

// Сгруппировать элементы сцены
const GROUP = new THREE.Group();

// Добавить все вспомогательные оси и сетку
GROUP.add(
    AXES_HELPER,
    GRID_HELPER,
    CUBE_MESH,
);

/* GUI панель настройки START */
let
    material_settings = GUI.addFolder('Настройки материала: '),
    other_settings = GUI.addFolder('Другие настройки: '),
    position_settings = GUI.addFolder('Позиция фигуры: '),
    functions = GUI.addFolder('Функции: ');

position_settings.add(CUBE_MESH.position, 'x', 0, 1, 0.01);
position_settings.add(CUBE_MESH.position, 'y', 0, 1, 0.01);
position_settings.add(CUBE_MESH.position, 'z', 0, 1, 0.01);

material_settings
    .add(CUBE_MESH.material, 'wireframe')
    .name('Показать каркас: ');

material_settings
    .addColor(PARAMETERS, 'color')
    .onChange(function () {
        CUBE_MESH.material.color.set(PARAMETERS.color);
    })
    .name('Цвет фигуры: ');


other_settings.add(CUBE_MESH, 'visible').name('Видимость');
functions.add(PARAMETERS, 'spin').name('Вращать фигуру');
/* GUI панель настройки END */

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
