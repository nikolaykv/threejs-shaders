import {ORBIT_CONTROLS, RENDER} from "../script";
import {sizes, CLOCK} from "./other_settings";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";

import {
    GHOST_ONE,
    GHOST_TWO,
    GHOST_THREE
} from "./ghosts";

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

        // Update renderer
        RENDER.setSize(sizes.width, sizes.height);
        RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

/**
 * Анимация сцены
 */
function animateScene() {
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);

    // Анимация PointLight "Призраков"
    const ELAPSED_TIME = CLOCK.getElapsedTime();

    GHOST_ONE.position.set(
        Math.cos(ELAPSED_TIME * 0.5) * 4,
        Math.sin(ELAPSED_TIME * 0.5 * 3),
        Math.sin(ELAPSED_TIME * 0.5) * 4
    );

    GHOST_TWO.position.set(
        Math.cos(ELAPSED_TIME * 0.32) * 5,
        Math.sin((ELAPSED_TIME * 0.32) * 4) + Math.sin((ELAPSED_TIME * 0.32) * 2.5),
        Math.sin(ELAPSED_TIME * 0.32) * 5
    );

    GHOST_THREE.position.set(
        Math.cos(ELAPSED_TIME * 0.18) * (7 + Math.sin(ELAPSED_TIME * 0.32)),
        Math.sin(ELAPSED_TIME * 4) + Math.sin(ELAPSED_TIME * 2.5),
        Math.sin(ELAPSED_TIME * 0.18) * (7 + Math.sin(ELAPSED_TIME * 0.5))
    );
    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene,
};
