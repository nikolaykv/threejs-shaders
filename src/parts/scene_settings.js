import * as THREE from 'three';

/**
 * @type {Scene}
 */
const SCENE = new THREE.Scene();

/**
 * Туман
 * @type {Fog}
 */
const FOG = new THREE.Fog(
    '#262837',
    1,
    15
);
SCENE.fog = FOG;

export {
    SCENE
};