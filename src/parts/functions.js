import {ORBIT_CONTROLS, RENDER} from "../script";
import {CAMERA} from "./camera_settings";
import {sizes} from "./other_settings";
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

export {
    screenResize,
    animateScene
};
