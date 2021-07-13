import * as THREE from 'three';
import params from '../params.json'
import {TEXTURE} from "../parts/other_settings";

const CUBE = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        params.cubeMeshObject.geometry.sizes,
        params.cubeMeshObject.geometry.sizes,
        params.cubeMeshObject.geometry.sizes
    ),
    new THREE.MeshPhongMaterial(
        {
            /*color: parseInt(
                params.cubeMeshObject.material.color,
                params.otherSettings.parseIntRadixValueToColor
            )*/
            map: TEXTURE
        }
    )
);

CUBE.castShadow = params.otherSettings.castShadow;
CUBE.position.set(
    params.cubeMeshObject.position.x,
    params.cubeMeshObject.position.y,
    params.cubeMeshObject.position.z,
);
CUBE.name = params.cubeMeshObject.customName;

export {CUBE}

