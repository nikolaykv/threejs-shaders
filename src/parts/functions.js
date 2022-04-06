import {ORBIT_CONTROLS, RENDER} from "../script";
import {sizes, CLOCK} from "./other_settings";
import {MATERIAL} from "../objects/models";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";

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

        // Update render
        RENDER.setSize(sizes.width, sizes.height);
        RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });
}

/**
 * =====================================================================
 * Анимация сцены
 */
function animateScene() {

    MATERIAL.uniforms.uTime.value = CLOCK.getElapsedTime();
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);
    window.requestAnimationFrame(animateScene);
}


export {
    screenResize,
    animateScene,
};
