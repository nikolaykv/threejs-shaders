/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {
    zeroPoint,
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
    // CAMERA_HELPER, // Измени чтобы задействовать хелпер камеры
    GRID_HELPER
);

console.log(AXES_HELPER.geometry.attributes.position.getX(1))

// Добавить метки осей в группу и задать им расположение
x.position.set(0.55, 0, 0);
y.position.set(-0.01, 0.55,0);
z.position.set(-0.01, 0, 0.55);

GROUP.add(x, y, z);

// Координаты на осях
zeroPoint.position.set(-0.004, 0, 0);

pointOneX.position.set(0.1, 0, 0);
pointTwoX.position.set(0.2, 0, 0);
pointThreeX.position.set(0.3, 0, 0);
pointFourX.position.set(0.4, 0, 0);
pointFiveX.position.set(0.5, 0, 0);

pointOneY.position.set(-0.01, 0.1, 0);
pointTwoY.position.set(-0.01, 0.2, 0);
pointThreeY.position.set(-0.01, 0.3, 0);
pointFourY.position.set(-0.01, 0.4, 0);
pointFiveY.position.set(-0.01, 0.5, 0);

pointOneZ.position.set(-0.01, 0, 0.1);
pointTwoZ.position.set(-0.01, 0, 0.2);
pointThreeZ.position.set(-0.01, 0, 0.3);
pointFourZ.position.set(-0.01, 0, 0.4);
pointFiveZ.position.set(-0.01, 0, 0.5);



GROUP.add(
    zeroPoint,
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