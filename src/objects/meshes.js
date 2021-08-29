import * as THREE from 'three';

const CUBE = new THREE.Mesh(
    new THREE.BoxGeometry(
        1,
        1,
        1
    ),
    new THREE.MeshBasicMaterial(
        {color: 0x00ff00}
    )
);

CUBE.position.set(2, 2, 2);

export { CUBE };