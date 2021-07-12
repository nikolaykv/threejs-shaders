/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {
    ZERO_POINT,

    POINT_ONE_X,
    POINT_TWO_X,
    POINT_THREE_X,
    POINT_FOUR_X,
    POINT_FIVE_X,

    POINT_ONE_Y,
    POINT_TWO_Y,
    POINT_THREE_Y,
    POINT_FOUR_Y,
    POINT_FIVE_Y,

    POINT_ONE_Z,
    POINT_TWO_Z,
    POINT_THREE_Z,
    POINT_FOUR_Z,
    POINT_FIVE_Z,
} from "./parts/axes_coordinates";

import {
    AXES_HELPER,
    GRID_HELPER,
    X, Y, Z,
    CAMERA_HELPER,
    DIRECTION_LIGHT_HELPER,
    HEMISPHERE_LIGHT_HELPER,
    BUFFER_GEOMETRY_RECTANGLE_VERTEX_NORMALS_HELPER
} from "./parts/helpers";

import {screenResize, donutGltfLoader, animateScene} from "./parts/functions";
import {HEMISPHERE_LIGHT, DIRECTION_LIGHT} from "./parts/light_settings";
import {BUFFER_GEOMETRY_RECTANGLE} from "./objects/rectangle/rectangle";
import {sizes, CANVAS} from "./parts/other_settings";
import {SCENE, GROUND} from "./parts/scene_settings";
import {CAMERA} from "./parts/camera_settings";
import {CUBE} from "./objects/cube";
import params from './params.json';

/**
 * Пользовательские файлы и параметры
 */
import './style.css';


// Сгруппировать элементы сцены
const GROUP = new THREE.Group();
GROUP.name = params.otherNames.groupName

// Добавить все вспомогательные оси и сетку
GROUP.add(
    AXES_HELPER,
    GRID_HELPER,
    // Измени чтобы задействовать хелперы
    // CAMERA_HELPER, камера
    // HEMISPHERE_LIGHT_HELPER,// сферический свет
    // DIRECTION_LIGHT_HELPER, // Направленный свет
    // BUFFER_GEOMETRY_RECTANGLE_VERTEX_NORMALS_HELPER // Отображает направление нормалей вершин BufferGeometry
);

// Добавить метки осей в группу и задать им расположение
X.position.set(0.55, 0, 0);
Y.position.set(-0.01, 0.55, 0);
Z.position.set(-0.01, 0, 0.55);

GROUP.add(X, Y, Z);

// Координаты на осях
ZERO_POINT.position.set(-0.004, 0, 0);

POINT_ONE_X.position.set(0.1, 0, 0);
POINT_TWO_X.position.set(0.2, 0, 0);
POINT_THREE_X.position.set(0.3, 0, 0);
POINT_FOUR_X.position.set(0.4, 0, 0);
POINT_FIVE_X.position.set(0.5, 0, 0);

POINT_ONE_Y.position.set(-0.01, 0.1, 0);
POINT_TWO_Y.position.set(-0.01, 0.2, 0);
POINT_THREE_Y.position.set(-0.01, 0.3, 0);
POINT_FOUR_Y.position.set(-0.01, 0.4, 0);
POINT_FIVE_Y.position.set(-0.01, 0.5, 0);

POINT_ONE_Z.position.set(-0.01, 0, 0.1);
POINT_TWO_Z.position.set(-0.01, 0, 0.2);
POINT_THREE_Z.position.set(-0.01, 0, 0.3);
POINT_FOUR_Z.position.set(-0.01, 0, 0.4);
POINT_FIVE_Z.position.set(-0.01, 0, 0.5);


GROUP.add(
    ZERO_POINT,

    POINT_ONE_X,
    POINT_TWO_X,
    POINT_THREE_X,
    POINT_FOUR_X,
    POINT_FIVE_X,

    POINT_ONE_Y,
    POINT_TWO_Y,
    POINT_THREE_Y,
    POINT_FOUR_Y,
    POINT_FIVE_Y,

    POINT_ONE_Z,
    POINT_TWO_Z,
    POINT_THREE_Z,
    POINT_FOUR_Z,
    POINT_FIVE_Z
);

// Добавить в группу свет
GROUP.add(
    HEMISPHERE_LIGHT,
    DIRECTION_LIGHT
);

// Добавим ещё объекты в группу
GROUP.add(CUBE, BUFFER_GEOMETRY_RECTANGLE);

// Добавить "землю" в сцену
GROUP.add(GROUND);

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
ORBIT_CONTROLS.enableDamping = params.otherSettings.true;

/**
 *  Загрузка 3D объекта и установка его позиции
 */
donutGltfLoader();

/**
 * Renderer
 */
const RENDER = new THREE.WebGLRenderer({
    antialias: params.otherSettings.true,
    canvas: CANVAS
});

RENDER.shadowMap.enabled = params.otherSettings.true;

RENDER.setSize(sizes.width, sizes.height)
RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();

export {RENDER, ORBIT_CONTROLS, GROUP};

// Отладка через экспериментальное расширение Google Chrome
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: SCENE}));
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: RENDER}));
}