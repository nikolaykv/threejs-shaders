import {ENVIRONMENT_MAP_TEXTURE} from "../parts/textures";
import * as THREE from 'three';

const SPHERE = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({
        metalness: 0.3,
        roughness: 0.4,
        envMap: ENVIRONMENT_MAP_TEXTURE
    })
);
SPHERE.castShadow = true;
SPHERE.position.y = 0.5;

const FLOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: ENVIRONMENT_MAP_TEXTURE
    })
)
FLOOR.receiveShadow = true
FLOOR.rotation.x = - Math.PI * 0.5

export {SPHERE, FLOOR};