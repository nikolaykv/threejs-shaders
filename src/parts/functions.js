import {SPHERE_GEOMETRY, SPHERE_MATERIAL} from "../objects/meshes";
import {ENVIRONMENT_MAP_TEXTURE} from "./textures";
import {ORBIT_CONTROLS, RENDER} from "../script";
import {PLASTIC_MATERIAL} from "./physics";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
import {CLOCK} from "./other_settings";
import {WORLD} from "./physics";
import * as THREE from 'three';
import CANNON from 'cannon';

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
    });
}

/**
 * =====================================================================
 * Вспомогательный массив объектов, которые нужно обновлять
 * @type {*[]}
 */
const OBJECTS_TO_UPDATE = [];

/**
 * =====================================================================
 * Общая функция создания сетки и физического тела сферы
 *
 * @param radius
 * @param position
 * @constructor
 */
const CREATE_SPHERE = function (radius, position) {
    // создание стеки three.js фигур
    const MESH = new THREE.Mesh(
        SPHERE_GEOMETRY,
        SPHERE_MATERIAL
    )
    MESH.castShadow = true;
    MESH.scale.set(radius, radius, radius);
    MESH.position.copy(position);
    SCENE.add(MESH);

    // создание физического тела
    const BODY = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: new CANNON.Sphere(radius),
        material: PLASTIC_MATERIAL
    })
    BODY.position.copy(position);
    WORLD.addBody(BODY);

    // копируем объекты в вспомогательный массив
    OBJECTS_TO_UPDATE.push({
        mesh: MESH,
        body: BODY
    })
}

/**
 * =====================================================================
 * Анимация сцены
 */
let oldElapsedTime = 0;

function animateScene() {
    ORBIT_CONTROLS.update();
    RENDER.render(SCENE, CAMERA);

    const ELAPSED_TIME = CLOCK.getElapsedTime();
    const DELTA_TIME = ELAPSED_TIME - oldElapsedTime;
    oldElapsedTime = ELAPSED_TIME;

    WORLD.step(1 / 60, DELTA_TIME, 3);

    for (const OBJECT of OBJECTS_TO_UPDATE) {
        OBJECT.mesh.position.copy(OBJECT.body.position);
    }

    window.requestAnimationFrame(animateScene);
}

export {
    screenResize,
    animateScene,
    CREATE_SPHERE
};
