import * as THREE from 'three';

import {
    DOOR_LIGHT
} from "../../parts/light_settings";

import {
    DOOR_COLOR_TEXTURE,
    DOOR_ALPHA_TEXTURE,
    DOOR_AMBIENT_OCCLUSION_TEXTURE,
    DOOR_HEIGHT_TEXTURE,
    DOOR_NORMAL_TEXTURE,
    DOOR_METALNESS_TEXTURE,
    DOOR_ROUGHNESS_TEXTURE
} from "../../textures/door";

import {
    BRICKS_COLOR_TEXTURE,
    BRICKS_AMBIENT_OCCLUSION_TEXTURE,
    BRICKS_NORMAL_TEXTURE,
    BRICKS_ROUGHNESS_TEXTURE
} from "../../textures/wall";

import {
    GRASS_COLOR_TEXTURE,
    GRASS_AMBIENT_OCCLUSION_TEXTURE,
    GRASS_NORMAL_TEXTURE,
    GRASS_ROUGHNESS_TEXTURE
} from "../../textures/grass";

/**
 * Земля
 * @type {Mesh}
 */
const FLOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        20,
        20
    ),
    new THREE.MeshStandardMaterial(
        {
            map: GRASS_COLOR_TEXTURE,
            aoMap: GRASS_AMBIENT_OCCLUSION_TEXTURE,
            normalMap: GRASS_NORMAL_TEXTURE,
            roughnessMap: GRASS_ROUGHNESS_TEXTURE
        }
    )
);
FLOOR.rotation.x = -Math.PI * 0.5;
FLOOR.rotation.y = 0;

FLOOR.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(
        FLOOR.geometry.attributes.uv.array,
        2
    )
);
FLOOR.receiveShadow = true;

/**
 * Стены
 * @type {Mesh}
 */
const WALLS = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        4,
        2.5,
        4
    ),
    new THREE.MeshStandardMaterial(
        {
            color: '#ac8e82',
            map: BRICKS_COLOR_TEXTURE,
            aoMap: BRICKS_AMBIENT_OCCLUSION_TEXTURE,
            normalMap: BRICKS_NORMAL_TEXTURE,
            roughnessMap: BRICKS_ROUGHNESS_TEXTURE
        }
    )
);
WALLS.position.y = 1.25;

WALLS.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(
        WALLS.geometry.attributes.uv.array,
        2
    )
);

WALLS.castShadow = true;

/**
 * Крыша
 * @type {Mesh}
 */
const ROOF = new THREE.Mesh(
    new THREE.ConeBufferGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({
            color: '#b35f45'
        }
    )
);
ROOF.rotation.y = Math.PI * 0.25;
ROOF.position.y = 2.5 + 0.5;

/**
 * Дверь
 * @type {Mesh}
 */
const DOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        2.2,
        2.2,
        100,
        100
    ),
    new THREE.MeshStandardMaterial(
        {
            color: '#aa7b7b',
            map: DOOR_COLOR_TEXTURE,
            transparent: true,
            alphaMap: DOOR_ALPHA_TEXTURE,
            aoMap: DOOR_AMBIENT_OCCLUSION_TEXTURE,
            displacementMap: DOOR_HEIGHT_TEXTURE,
            displacementScale: 0.1,
            normalMap: DOOR_NORMAL_TEXTURE,
            metalnessMap: DOOR_METALNESS_TEXTURE,
            roughnessMap: DOOR_ROUGHNESS_TEXTURE
        }
    )
)
DOOR.position.y = 1;
DOOR.position.z = 2 + 0.01;

DOOR.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(
        DOOR.geometry.attributes.uv.array,
        2
    )
);

/**
 * Геометрия куста
 * @type {SphereGeometry}
 */
const BUSH_GEOMETRY = new THREE.SphereBufferGeometry(
    1,
    16,
    16
);

/**
 * Материал куста
 * @type {MeshStandardMaterial}
 */
const BUSH_MATERIAL = new THREE.MeshStandardMaterial(
    {
        color: '#89c854'
    }
);

/**
 * Далее, ниже создание мешей куста,
 * а также их позиция и размеры
 * @type {Mesh}
 */
const BUSH_ONE = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_ONE.scale.set(
    0.5,
    0.5,
    0.5
);
BUSH_ONE.position.set(
    0.8,
    0.2,
    2.2
);
BUSH_ONE.castShadow = true;

const BUSH_TWO = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_TWO.scale.set(
    0.25,
    0.25,
    0.25
);
BUSH_TWO.position.set(
    1.4,
    0.1,
    2.1
);
BUSH_TWO.castShadow = true;

const BUSH_THREE = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_THREE.scale.set(
    0.4,
    0.4,
    0.4
);
BUSH_THREE.position.set(
    -0.8,
    0.1,
    2.2
);
BUSH_THREE.castShadow = true;

const BUSH_FOUR = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_FOUR.scale.set(
    0.15,
    0.15,
    0.15
);
BUSH_FOUR.position.set(
    -1,
    0.05,
    2.6
);
BUSH_FOUR.castShadow = true;

/**
 * Группа дла элементов сцены
 * @type {Group}
 */
const HOUSE_GROUP = new THREE.Group();

// Добавить все объекты в группу
HOUSE_GROUP.add(
    FLOOR,
    WALLS,
    ROOF,
    DOOR,

    BUSH_ONE,
    BUSH_TWO,
    BUSH_THREE,
    BUSH_FOUR,

    DOOR_LIGHT
);

export {
    HOUSE_GROUP
};