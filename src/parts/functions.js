import {ORBIT_CONTROLS, RENDER} from "../script";
import {sizes, CLOCK} from "./other_settings";
import {CAMERA} from "./camera_settings";
import {mixer} from "../objects/models";
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
let previousTime = 0;

function animateScene() {

    const ELAPSED_TIME = CLOCK.getElapsedTime();
    const DELTA_TIME = ELAPSED_TIME - previousTime;
    previousTime = ELAPSED_TIME;

    if (mixer) {
        mixer.update(DELTA_TIME);
    }

    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);
    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene
};
