import * as THREE from 'three';

import {
    DOOR_LIGHT
} from "../../parts/light_settings";

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
            color: 'darkseagreen'
        }
    )
);
FLOOR.rotation.x = -Math.PI * 0.5;
FLOOR.rotation.y = 0;

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
            color: '#ac8e82'
        }
    )
);
WALLS.position.y = 1.25;

/**
 * Крыша
 * @type {Mesh}
 */
const ROOF = new THREE.Mesh(
    new THREE.ConeBufferGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({color: '#b35f45'})
);
ROOF.rotation.y = Math.PI * 0.25;
ROOF.position.y = 2.5 + 0.5;

/**
 * Дверь
 * @type {Mesh}
 */
const DOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2, 2),
    new THREE.MeshStandardMaterial({color: '#aa7b7b'})
)
DOOR.position.y = 1;
DOOR.position.z = 2 + 0.01;

/**
 * Кусты
 */
const BUSH_GEOMETRY = new THREE.SphereBufferGeometry(1, 16, 16);
const BUSH_MATERIAL = new THREE.MeshStandardMaterial({color: '#89c854'});

const BUSH_ONE = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_ONE.scale.set(0.5, 0.5, 0.5);
BUSH_ONE.position.set(0.8, 0.2, 2.2);

const BUSH_TWO = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_TWO.scale.set(0.25, 0.25, 0.25);
BUSH_TWO.position.set(1.4, 0.1, 2.1);

const BUSH_THREE = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_THREE.scale.set(0.4, 0.4, 0.4);
BUSH_THREE.position.set(-0.8, 0.1, 2.2);

const BUSH_FOUR = new THREE.Mesh(
    BUSH_GEOMETRY,
    BUSH_MATERIAL
);
BUSH_FOUR.scale.set(0.15, 0.15, 0.15);
BUSH_FOUR.position.set(-1, 0.05, 2.6);

/**
 * Сгруппировать элементы сцены
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

export {HOUSE_GROUP};