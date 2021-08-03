import {MATERIAL} from "./examples/material_example";
import {PARAMETERS} from "../parts/parameters";
import * as THREE from 'three';

const CUBE_MESH = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.15, 0.15),
    new THREE.MeshStandardMaterial({color: PARAMETERS.color}
    )
);

CUBE_MESH.position.set(0.076, 0.076, 0.076);


const SPHERE_MESH = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.2,
        32,
        32
    ),
    MATERIAL
);

const PLANE_MESH = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        0.4,
        0.4
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
    -1,
    0.2,
    -0.5
);

PLANE_MESH.position.set(
    0,
    0.2,
    -0.5
);

TORUS_MESH.position.set(
    1,
    0.3,
    -0.5
);

/*SPHERE_MESH.geometry.setAttribute(
    'uv2',
    new THREE.BufferAttribute(
        SPHERE_MESH.geometry.attributes.uv.array,
        2
    )
);

PLANE_MESH.geometry.setAttribute(
    'uv2',
    new THREE.BufferAttribute(
        PLANE_MESH.geometry.attributes.uv.array,
        2
    )
);

TORUS_MESH.geometry.setAttribute(
    'uv2',
    new THREE.BufferAttribute(
        TORUS_MESH.geometry.attributes.uv.array,
        2
    )
);*/

SPHERE_MESH.name = 'Сфера';
PLANE_MESH.name = 'Плоскость';
TORUS_MESH.name = 'Торус';

export {
    CUBE_MESH,
    SPHERE_MESH,
    PLANE_MESH,
    TORUS_MESH
};