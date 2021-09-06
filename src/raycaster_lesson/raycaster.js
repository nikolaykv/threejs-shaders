import * as THREE from "three";

const RAY_CASTER = new THREE.Raycaster(
    new THREE.Vector3(-3, 0, 0),
    new THREE.Vector3(10, 0, 0).normalize(),
);

export {RAY_CASTER};