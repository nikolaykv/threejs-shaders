import {ENVIRONMENT_MAP_TEXTURE} from "../parts/textures";
import * as THREE from 'three';

/**
 * =====================================================================
 * Геометрия сферы
 * @type {SphereGeometry}
 */
const SPHERE_GEOMETRY = new THREE.SphereBufferGeometry(
    1,
    50,
    50
);

/**
 * =====================================================================
 * Материал сетки сферы
 * @type {MeshStandardMaterial}
 */
const SPHERE_MATERIAL = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: ENVIRONMENT_MAP_TEXTURE
});

/**
 * =====================================================================
 * Геометрия куба
 * @type {BoxGeometry}
 */
const BOX_GEOMETRY = new THREE.BoxBufferGeometry(
    1,
    1,
    1
);

/**
 * =====================================================================
 * Материал сетки куба
 * @type {MeshStandardMaterial}
 */
const BOX_MATERIAL = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: ENVIRONMENT_MAP_TEXTURE
});

/**
 * =====================================================================
 * Меш "земли" и его настройки
 * @type {Mesh}
 */
const FLOOR = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: ENVIRONMENT_MAP_TEXTURE
    })
);
FLOOR.receiveShadow = true;
FLOOR.rotation.x = - Math.PI * 0.5;

export {
    FLOOR,
    SPHERE_MATERIAL,
    SPHERE_GEOMETRY,
    BOX_MATERIAL,
    BOX_GEOMETRY
};