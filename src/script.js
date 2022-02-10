import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {DIRECTIONAL_LIGHT} from "./parts/light_settings";
import {screenResize, animateScene} from "./parts/functions";
import {AXES_HELPER, GRID_HELPER, DIRECTIONAL_LIGHT_CAMERA_HELPER} from "./parts/helpers";
import {sizes, CANVAS} from "./parts/other_settings";
import {updateAllMaterials} from "./parts/functions";
import {CAMERA} from "./parts/camera_settings";
import {DEBUG_OBJECT, GUI} from "./parts/dat_gui_settings";
import {SCENE} from "./parts/scene_settings";
import {GLTF_LOADER} from "./objects/models";
import * as THREE from 'three';
import './style.css';

// Добавляем в сцену элементы
SCENE.add(
    // AXES_HELPER,
    // GRID_HELPER,

    DIRECTIONAL_LIGHT,
    DIRECTIONAL_LIGHT_CAMERA_HELPER
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
ORBIT_CONTROLS.target.set(0, 0.75, 0);
ORBIT_CONTROLS.enableDamping = true;

/**
 * =====================================================================
 * Renderer
 * @type {WebGLRenderer}
 */
const RENDER = new THREE.WebGLRenderer(
    {
        canvas: CANVAS,
        antialias: true
    }
);
RENDER.setSize(sizes.width, sizes.height);
RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
RENDER.physicallyCorrectLights = true;
RENDER.outputEncoding = THREE.sRGBEncoding;
RENDER.toneMapping = THREE.ReinhardToneMapping;
RENDER.toneMappingExposure = 1.4;
RENDER.shadowMap.enabled = true;
RENDER.shadowMap.type = THREE.PCFShadowMap;

/**
 * =====================================================================
 * Тональное отображение
 */
GUI.addFolder(
    'Настройка тонального отображения при рендере',
).add(
    RENDER, 'toneMapping',
    {
        No: THREE.NoToneMapping,
        Linear: THREE.LinearToneMapping,
        Reinhard: THREE.ReinhardToneMapping,
        Cineon: THREE.CineonToneMapping,
        ACESFilmic: THREE.ACESFilmicToneMapping
    }
).name('Настройки тонального отображения').onFinishChange(function () {
    RENDER.toneMapping = Number(RENDER.toneMapping);
    updateAllMaterials();
});

/**
 * =====================================================================
 * Настройка экспозиции тонального отображения
 */
GUI.addFolder(
    'Настройка экспозиции тонального отображения'
).add(
    RENDER, 'toneMappingExposure',
    0, 10, 0.001
).name('Экспозиция тонального отображения');

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
    ORBIT_CONTROLS
};
