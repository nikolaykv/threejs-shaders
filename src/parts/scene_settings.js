import * as THREE from 'three';

const SCENE = new THREE.Scene();
SCENE.name = 'mainScene';
SCENE.background = new THREE.Color( '#a0a0a0' );
SCENE.fog = new THREE.Fog( 0xa0a0a0, 0.5, 4 );


export {SCENE};