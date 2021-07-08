/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {
    pointOneCoordinates,
    pointZeroCoordinates,
    pointTwoCoordinates,
    pointThreeCoordinates,
    pointFourCoordinates,
    pointFiveCoordinates,
    pointSixCoordinates
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
GROUP.add(AXES_HELPER);
GROUP.add(CAMERA_HELPER);
GROUP.add(GRID_HELPER);

// Добавить метки осей в группу и задать им расположение
x.position.x = params.axesHelper.x.position;
y.position.y = params.axesHelper.y.position;
z.position.z = params.axesHelper.z.position;
GROUP.add(x);
GROUP.add(y);
GROUP.add(z);

// Координаты на осях
pointZeroCoordinates.position.x = 0;
pointOneCoordinates.position.x = 0.2;
pointTwoCoordinates.position.x = 0.4;
pointThreeCoordinates.position.x = 0.6;
pointFourCoordinates.position.x = 0.8;
pointFiveCoordinates.position.x = 1;
pointSixCoordinates.position.x = 0.1;


GROUP.add(pointOneCoordinates);
GROUP.add(pointZeroCoordinates);
GROUP.add(pointTwoCoordinates);
GROUP.add(pointThreeCoordinates);
GROUP.add(pointFourCoordinates);
GROUP.add(pointFiveCoordinates);
GROUP.add(pointSixCoordinates);

// Добавить в группу свет
GROUP.add(lightOne);
GROUP.add(lightTwo);

// Добавим ещё объект в группу
//GROUP.add(CUBE);

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