import * as THREE from 'three';

const CUBE_MESH = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.15, 0.15),
    new THREE.MeshStandardMaterial({color: 'blue'}
    )
);

CUBE_MESH.position.set(0.076, 0.076, 0.076);

const MATERIAL = new THREE.MeshStandardMaterial();
MATERIAL.metalness = 0.5;
MATERIAL.roughness = 0.4;

export {
    CUBE_MESH,
    MATERIAL
};