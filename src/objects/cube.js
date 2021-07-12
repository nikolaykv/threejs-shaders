import * as THREE from 'three';
import params from '../params.json'


const CUBE = new THREE.Mesh(
    new THREE.BoxGeometry(
        params.cubeMeshObject.geometry.sizes,
        params.cubeMeshObject.geometry.sizes,
        params.cubeMeshObject.geometry.sizes
    ),
    new THREE.MeshPhongMaterial(
        {
            color: parseInt(
                params.cubeMeshObject.material.color,
                params.otherSettings.parseIntRadixValueToColor
            )
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

