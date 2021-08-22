import * as THREE from 'three';

const SCENE = new THREE.Scene();

// Туман
const FOG = new THREE.Fog(
    '#262837',
    1,
    15
);
SCENE.fog = FOG;

export {SCENE};