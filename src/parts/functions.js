import {MATERIAL, GEOMETRY} from "../objects/models";
import {ORBIT_CONTROLS, RENDER} from "../script";
import {sizes, CLOCK} from "./other_settings";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
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

/**
 * =====================================================================
 * Настройки геометрии MESH
 */
function meshGeometrySettings(GEOMETRY) {

    const COUNT = GEOMETRY.attributes.position.count;

    const RANDOMS = new Float32Array(COUNT);

    for(let i = 0; i < COUNT; i++)
    {
        RANDOMS[i] = Math.random();
    }

    return GEOMETRY.setAttribute(
        'aRandom',
        new THREE.BufferAttribute(RANDOMS, 1)
    );
}

export {
    screenResize,
    meshGeometrySettings,
    animateScene,
};
