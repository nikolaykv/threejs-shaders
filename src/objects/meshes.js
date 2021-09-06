import * as THREE from 'three';

const SPHERE_ONE = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.5,
        16,
        16
    ),
    new THREE.MeshBasicMaterial({
            color: '#ff0000'
        }
    )
);
SPHERE_ONE.position.x = -2;

const SPHERE_TWO = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.5,
        16,
        16
    ),
    new THREE.MeshBasicMaterial({
            color: '#ff0000'
        }
    )
);

const SPHERE_THREE = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.5,
        16,
        16
    ),
    new THREE.MeshBasicMaterial({
            color: '#ff0000'
        }
    )
);
SPHERE_THREE.position.x = 2;


export {SPHERE_ONE, SPHERE_TWO, SPHERE_THREE};
