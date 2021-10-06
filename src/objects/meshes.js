import * as THREE from 'three';

const FLOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5,
    })
);
FLOOR.receiveShadow = true;
FLOOR.rotation.x = - Math.PI * 0.5;

export {
  FLOOR
}