import {PARAMETERS} from "../parts/parameters";
import * as THREE from 'three';

const CUBE_MESH = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.15, 0.15),
    new THREE.MeshStandardMaterial({color: PARAMETERS.color}
    )
);

CUBE_MESH.position.set(0.076, 0.076, 0.076);

const MATERIAL = new THREE.MeshStandardMaterial();
MATERIAL.metalness = 0.5;
MATERIAL.roughness = 0.4;

const SPHERE_MESH = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.2,
        32,
        32
    ),
    MATERIAL
);

const TORUS_MESH = new THREE.Mesh(
    new THREE.TorusBufferGeometry(
        0.2,
        0.1,
        16,
        32
    ),
    MATERIAL
);

SPHERE_MESH.position.set(
    -0.7,
    0.2,
    0
);

TORUS_MESH.position.set(
    0.7,
    0.3,
    0
);

TORUS_MESH.rotation.x = -2.7;

SPHERE_MESH.name = 'Сфера';
TORUS_MESH.name = 'Торус';

export {
    CUBE_MESH,
    SPHERE_MESH,
    TORUS_MESH,
    MATERIAL
};