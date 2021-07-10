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

import {
    AXES_HELPER,
    CAMERA_HELPER,
    GRID_HELPER,
    x, y, z,
    DIRECTION_LIGHT_HELPER,
    HEMISPHERE_LIGHT_HELPER
} from "./parts/helpers";

import {screenResize, donutGltfLoader, animateScene} from "./parts/functions";
import {sizes, CANVAS} from "./parts/other_settings";
import {camera} from "./parts/camera_settings";
import {hemiLight, directionalLight} from "./parts/light_settings";
import {SCENE} from "./parts/scene_settings";
import {CUBE} from "./objects/cube";

/**
 * Пользовательские файлы и параметры
 */
import './style.css';


// Сгруппировать элементы сцены
const GROUP = new THREE.Group();
GROUP.name = 'commonGroup';

// Добавить все вспомогательные оси и сетку
GROUP.add(
    AXES_HELPER,
    GRID_HELPER,
    // Измени чтобы задействовать хелперы
    // CAMERA_HELPER, камера
    // HEMISPHERE_LIGHT_HELPER,// сферический свет
    // DIRECTION_LIGHT_HELPER // Направленный свет
);

// Добавить метки осей в группу и задать им расположение
x.position.set(0.55, 0, 0);
y.position.set(-0.01, 0.55, 0);
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
    hemiLight,
    directionalLight
);

// Добавим ещё объект в группу
GROUP.add(CUBE);

const GROUND = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.MeshPhongMaterial(
        {color: '#f3f4f7', depthWrite: false}
    ));
GROUND.rotation.x = -Math.PI / 2;
GROUND.receiveShadow = true;

GROUND.name = 'ground';

GROUP.add(GROUND)


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
    antialias: true,
    canvas: CANVAS
});

render.shadowMap.enabled = true;

render.setSize(sizes.width, sizes.height)
render.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();

export {render, controls, GROUP};

// Отладка через экспериментальное расширение Google Chrome
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: SCENE}));
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: render}));
}