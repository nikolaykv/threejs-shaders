import {screenResize, animateScene, OBJECTS_TO_UPDATE, PLAY_HIT_SOUND} from "./parts/functions";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AMBIENT_LIGHT, DIRECTIONAL_LIGHT} from "./parts/light_settings";
import {CREATE_SPHERE, CREATE_BOX} from "./parts/functions";
import {AXES_HELPER, GRID_HELPER} from "./parts/helpers";
import {sizes, CANVAS} from "./parts/other_settings";
import {CAMERA} from "./parts/camera_settings";
import {GUI} from "./parts/dat_gui_settings";
import {SCENE} from "./parts/scene_settings";
import {FLOOR} from "./objects/meshes";
import * as THREE from 'three';
import './style.css';
import {WORLD} from "./parts/physics";

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
const DEBUG_OBJECTS_SPHERE = {
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

GUI.add(DEBUG_OBJECTS_SPHERE, 'createSphere')
    .name('Добавить сферу в сцену');

/**
 * =====================================================================
 * Общая функция создания сетки и физического тела куба,
 * обёрнутая в пустой объект, для последующей работы с ним dat.gui
 */
const DEBUG_OBJECTS_BOX = {
    createBox: function () {
        {
            CREATE_BOX(
                Math.random(),
                Math.random(),
                Math.random(),
                {
                    x: (Math.random() - 0.5) * 3,
                    y: 3,
                    z: (Math.random() - 0.5) * 3
                }
            )
        }
    }
};

GUI.add(DEBUG_OBJECTS_BOX, 'createBox')
    .name('Добавить куб в сцену');

CREATE_BOX(
    1, 1.5, 2,
    { x: 0, y: 3, z: 0 }
);

/**
 * =====================================================================
 * Удаление three.js и cannon.js объектов из сцены
 * при помощи dat.gui
 */
let OBJECTS = OBJECTS_TO_UPDATE;
DEBUG_OBJECTS_SPHERE.reset = function () {
    {
        // берём любую походящую константу, так как по итогу всё равно проходимся по всем объектам в цикле
        for (const OBJECT of OBJECTS) {
            // Удалить обработчик на звук
            OBJECT.body.removeEventListener('collide', PLAY_HIT_SOUND);
            // Удаление физического тела объекта
            WORLD.removeBody(OBJECT.body);
            // Удаление mesh three.js объекта из сцены
            SCENE.remove(OBJECT.mesh);
        }
    }
}

GUI.add(DEBUG_OBJECTS_SPHERE, 'reset')
    .name('Удалить все объекты из сцены');

/**
 * =====================================================================
 * Анимация сцены
 */
animateScene();

/**
 * =====================================================================
 * Отладка через экспериментальное расширение Google Chrome
 */
/*
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: SCENE}));
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {detail: RENDER}));
}
*/

export {
    RENDER,
    ORBIT_CONTROLS
};
