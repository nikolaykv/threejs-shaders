/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {
    zeroCoordinates,
    pointOneX,
    pointTwoX,
    pointThreeX,
    pointFourX,
    pointFiveX,

    pointOneY,
    pointTwoY,
    pointThreeY,
    pointFourY,
    pointFiveY,

    pointOneZ,
    pointTwoZ,
    pointThreeZ,
    pointFourZ,
    pointFiveZ
} from "./parts/axes_coordinates";

import {AXES_HELPER, CAMERA_HELPER, GRID_HELPER, x, y, z} from "./parts/helpers";
import {screenResize, donutGltfLoader, animateScene} from "./parts/functions";
import {lightOne, lightTwo} from "./parts/light_settings";
import {sizes, CANVAS} from "./parts/other_settings";
import {camera} from "./parts/camera_settings";
import {CUBE} from "./objects/cube";
import params from "./params.json";

/**
 * Пользовательские файлы и параметры
 */
import './style.css';

// Создать сцену
let scene = new THREE.Scene();

// Сгруппировать элементы сцены
const GROUP = new THREE.Group();

// Добавить все вспомогательные оси и сетку
GROUP.add(
    AXES_HELPER,
    CAMERA_HELPER,
    GRID_HELPER
);

// Добавить метки осей в группу и задать им расположение
x.position.x = params.axesHelper.position;
y.position.y = params.axesHelper.position;
z.position.z = params.axesHelper.position;
GROUP.add(x, y, z);


// Координаты на осях
zeroCoordinates.position.x = -0.002;
zeroCoordinates.position.y = 0;
zeroCoordinates.position.z = 0;

pointOneX.position.x = 0.1;
pointTwoX.position.x = 0.2;
pointThreeX.position.x = 0.3;
pointFourX.position.x = 0.4;
pointFiveX.position.x = 0.5;

pointOneY.position.y = 0.1;
pointTwoY.position.y = 0.2;
pointThreeY.position.y = 0.3;
pointFourY.position.y = 0.4;
pointFiveY.position.y = 0.5;

pointOneZ.position.z = 0.1;
pointTwoZ.position.z = 0.2;
pointThreeZ.position.z = 0.3;
pointFourZ.position.z = 0.4;
pointFiveZ.position.z = 0.4;


GROUP.add(
    zeroCoordinates,
    pointOneX,
    pointTwoX,
    pointThreeX,
    pointFourX,
    pointFiveX,

    pointOneY,
    pointTwoY,
    pointThreeY,
    pointFourY,
    pointFiveY,

    pointOneZ,
    pointTwoZ,
    pointThreeZ,
    pointFourZ,
    pointFiveZ
);

// Добавить в группу свет
GROUP.add(
    lightOne,
    lightTwo
);

// Добавим ещё объект в группу
GROUP.add(CUBE);

// Добавить всю сцену в группу
scene.add(GROUP);


/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
screenResize();

/**
 * Использование возможностей OrbitControls
 */
let controls = new OrbitControls(camera, CANVAS)
controls.enableDamping = true;

/**
 *  Загрузка 3D объекта и установка его позиции
 */
donutGltfLoader();

/**
 * Renderer
 */
let render = new THREE.WebGLRenderer({
    canvas: CANVAS
});

render.setSize(sizes.width, sizes.height)
render.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();

export {scene, render, controls, GROUP};