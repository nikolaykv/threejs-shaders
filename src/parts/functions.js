import {ORBIT_CONTROLS, RENDER} from "../script";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
import * as THREE from 'three';

/**
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
    });
}


/**
 * Анимация сцены
 */
function animateScene() {

    new THREE.Clock().getElapsedTime();
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);

    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene,
};
