import {ORBIT_CONTROLS, RENDER} from "../script";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
import {SPHERE_ONE, SPHERE_TWO, SPHERE_THREE} from "../objects/meshes";
import {CLOCK, MOUSE} from "./other_settings";
import {RAY_CASTER} from "../raycaster_lesson/raycaster";

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

let currentIntersect = null;

/**
 * Анимация сцены
 */
function animateScene() {
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);

    RAY_CASTER.setFromCamera(MOUSE, CAMERA);

    const OBJECT_TO_TEST = [SPHERE_ONE, SPHERE_TWO, SPHERE_THREE];
    const INTERSECTS = RAY_CASTER.intersectObjects(OBJECT_TO_TEST);

    // Окрашиваем все объекты в красный, если Raycaster их пересекает
    for (const INTERSECT of INTERSECTS) {
        INTERSECT.object.material.color.set('#ff0000');
    }

    // Перебор объектов,
    // если объект не пересекается с RayCaster - окрасить его в синий
    for (const OBJECT of OBJECT_TO_TEST) {
        if (!INTERSECTS.find(function (item) {
            return item.object === OBJECT;
        })) {
            OBJECT.material.color.set('#0000ff')
        }
    }

    // отслеживание событий mouseleave и mouseenter
    if (INTERSECTS.length) {
      if (!currentIntersect) {
          console.log('mouse enter');
      }
        currentIntersect = INTERSECTS[0];
    } else {
        if (currentIntersect) {
            console.log('mouse leave');
        }
        currentIntersect = null;
    }



    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene,
    currentIntersect
};
