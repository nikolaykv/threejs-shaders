import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AMBIENT_LIGHT, DIRECTIONAL_LIGHT} from "./parts/light_settings";
import {screenResize, animateScene} from "./parts/functions";
import {AXES_HELPER, GRID_HELPER} from "./parts/helpers";
import {sizes, CANVAS} from "./parts/other_settings";
import {CREATE_SPHERE} from "./parts/functions";
import {CAMERA} from "./parts/camera_settings";
import {GUI} from "./parts/dat_gui_settings";
import {SCENE} from "./parts/scene_settings";
import {FLOOR} from "./objects/meshes";
import * as THREE from 'three';
import './style.css';

// Добавляем в сцену элементы
SCENE.add(
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,

    //AXES_HELPER,
    //GRID_HELPER,

    FLOOR
);

/**
 * =====================================================================
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
screenResize();

/**
 * =====================================================================
 * Использование возможностей OrbitControls
 * @type {OrbitControls}
 */
const ORBIT_CONTROLS = new OrbitControls(
    CAMERA,
    CANVAS
);
ORBIT_CONTROLS.enableDamping = true;

/**
 * =====================================================================
 * Renderer
 * @type {WebGLRenderer}
 */
const RENDER = new THREE.WebGLRenderer(
    {
        antialias: true,
        canvas: CANVAS
    }
);
RENDER.shadowMap.enabled = true;
RENDER.shadowMap.type = THREE.PCFSoftShadowMap;
RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
RENDER.setSize(sizes.width, sizes.height);

/**
 * =====================================================================
 * Общая функция создания сетки и физического тела сферы,
 * обёрнутая в пустой объект, для последующей работы с ним dat.gui
 */
const DEBUG_OBJECTS = {
    createSphere: function () {
        {
            CREATE_SPHERE(
                Math.random() * 0.5,
                {
                    x: (Math.random() - 0.5) * 3,
                    y: 3,
                    z: (Math.random() - 0.5) * 3
                }
            )
        }
    }
};

GUI.add(DEBUG_OBJECTS, 'createSphere')
    .name('Добавить в сцену сферу');

/**
 * =====================================================================
 * Анимация сцены
 */
animateScene();

/**
 * =====================================================================
 * Отладка через экспериментальное расширение Google Chrome
 */
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: SCENE}));
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: RENDER}));
}

export {
    RENDER,
    ORBIT_CONTROLS,
    DEBUG_OBJECTS
};
