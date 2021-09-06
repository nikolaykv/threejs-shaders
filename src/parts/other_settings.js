import {SPHERE_ONE, SPHERE_TWO, SPHERE_THREE} from "../objects/meshes";
import {currentIntersect} from "./functions";
import * as THREE from 'three';

/**
 * Размеры холста
 *
 * @type {{width: number, height: number}}
 */
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * @type {Element}
 */
const CANVAS = document.querySelector('canvas.webgl');

/**
 *
 * @type {Clock}
 */
const CLOCK = new THREE.Clock();

const MOUSE = new THREE.Vector2();

window.addEventListener('mousemove', function (event) {
    MOUSE.x = event.clientX / sizes.width * 2 - 1;
    MOUSE.y = - (event.clientY / sizes.height) * 2 + 1;
});

window.addEventListener('click', function () {
    if (currentIntersect) {
        switch (currentIntersect.object) {
            case SPHERE_ONE:
                console.log('Кликнули по первому объекту');
                break;

            case SPHERE_TWO:
                console.log('Кликнули по второму объекту');
                break;

            case SPHERE_THREE:
                console.log('Кликнули по третьему объекту');
                break;
        }
    }
})

export {
    sizes,
    CANVAS,
    CLOCK,
    MOUSE,
};