import {SCENE, ENVIRONMENT_MAP} from "./scene_settings";
import {DEBUG_OBJECT} from "./dat_gui_settings";
import {ORBIT_CONTROLS, RENDER} from "../script";
import {CAMERA} from "./camera_settings";
import {sizes} from "./other_settings";
import * as THREE from 'three';

/**
 * =====================================================================
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
function screenResize() {
    window.addEventListener('resize', function () {

        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        CAMERA.aspect = sizes.width / sizes.height;
        CAMERA.updateProjectionMatrix();

        RENDER.setSize(sizes.width, sizes.height);
        RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });
}

/**
 * =====================================================================
 * Анимация сцены
 */
function animateScene() {

    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);
    window.requestAnimationFrame(animateScene);
}

/**
 * =====================================================================
 * Обновить все материалы модели
 */
function updateAllMaterials() {
    SCENE.traverse(function (child) {

        // проверить, является ли child объектом экземпляра THREE.Mesh
        // и является ли его материал экземпляром THREE.MeshStandardMaterial:
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
            child.material.envMap = ENVIRONMENT_MAP;
            child.material.envMapIntensity = DEBUG_OBJECT.envMapIntensity; // из dat_gui_settings.js

            child.castShadow = true;
            child.receiveShadow = true;
        }

    });
}


export {
    screenResize,
    animateScene,
    updateAllMaterials
};
