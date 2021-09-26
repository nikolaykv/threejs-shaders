import {ORBIT_CONTROLS, RENDER} from "../script";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
import {CLOCK} from "./other_settings";
import {SPHERE_BODY, WORLD} from "./physics";
import {SPHERE} from "../objects/meshes";

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

let oldElapsedTime = 0;

function animateScene() {
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);

    const ELAPSED_TIME = CLOCK.getElapsedTime();
    const DELTA_TIME = ELAPSED_TIME - oldElapsedTime;
    oldElapsedTime = ELAPSED_TIME;

    WORLD.step(1/60, DELTA_TIME, 3);

    SPHERE.position.copy(SPHERE_BODY.position)

    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene,
};
