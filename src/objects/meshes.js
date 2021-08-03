import * as THREE from 'three';
import {PARAMETERS} from "../parts/parameters";


const CUBE_MESH = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.15, 0.15),
    new THREE.MeshBasicMaterial({color: PARAMETERS.color}
    )
);

CUBE_MESH.position.set(0.076, 0.076, 0.076);

export {CUBE_MESH};