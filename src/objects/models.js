import * as THREE from 'three';

const MESH = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(
      1,1,32,32
  ),
  new THREE.MeshBasicMaterial()
);

export {MESH};