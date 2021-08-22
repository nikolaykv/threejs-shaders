import * as THREE from 'three';

const GRAVE_GEOMETRY = new THREE.BoxBufferGeometry(
    0.6,
    0.8,
    0.2
);

const GRAVE_MATERIAL = new THREE.MeshStandardMaterial(
    {
        color: '#b2b6b1'
    }
);


const GRAVES_GROUP = new THREE.Group();

for (let i = 0; i < 50; i++) {
    const RANDOM_ANGLE = Math.random() * Math.PI * 2 // Рандомный угол
    const RANDOM_RADIUS = 3 + Math.random() * 6      // Рандомный радиус
    const X_POSITION = Math.cos(RANDOM_ANGLE) * RANDOM_RADIUS        // Получите положение x, используя косинус
    const Z_POSITION = Math.sin(RANDOM_ANGLE) * RANDOM_RADIUS        // Получите положение z, используя синус

    // Создаём надгробия
    const GRAVE = new THREE.Mesh(
        GRAVE_GEOMETRY,
        GRAVE_MATERIAL
    );

    // задаём позицию каждому элементу в итерации
    GRAVE.position.set(
        X_POSITION,
        0.3,
        Z_POSITION
    );

    // Для того чтобы надгробия не располагались на идеальном круге
    GRAVE.rotation.z = (Math.random() - 0.5) * 0.4;
    GRAVE.rotation.y = (Math.random() - 0.5) * 0.4;


    GRAVES_GROUP.add(GRAVE);
}

export {GRAVES_GROUP};