import * as THREE from 'three';

const CUBE = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.03, 0.03),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
);

CUBE.position.set( 0.1, 0.015, 0.09 );

export {CUBE}

