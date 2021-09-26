import CANNON from 'cannon';

const WORLD = new CANNON.World();

/**
 * Сила гравитациям по осям, то есть скорость падения
 */
WORLD.gravity.set(0, -9.82, 0);

// Материалы тел
const CONCRETE_MATERIAL = new CANNON.Material('concrete');
const PLASTIC_MATERIAL = new CANNON.Material('plastic');

// Физика шара
const SPHERE_BODY = new CANNON.Body({
    material: PLASTIC_MATERIAL,
    mass: 1,
    position: new CANNON.Vec3(0, 3, 0),
    shape: new CANNON.Sphere(0.5)
});
WORLD.addBody(SPHERE_BODY);

// Статичная земля
const FLOOR_BODY = new CANNON.Body({
    material: CONCRETE_MATERIAL,
    mass: 0,
    shape: new CANNON.Plane(),
});

// Поворот физического тела, относительно камеры
FLOOR_BODY.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0),
    Math.PI * 0.5
);
WORLD.addBody(FLOOR_BODY)

// Физика материалов на границе их столкновения
const CONCRETE_PLASTIC_CONTACT_MATERIAL = new CANNON.ContactMaterial(
    CONCRETE_MATERIAL,
    PLASTIC_MATERIAL,
    {
        friction: 0.1, // трение
        restitution: 0.7 // упругость
    }
);
WORLD.addContactMaterial(CONCRETE_PLASTIC_CONTACT_MATERIAL);

export {WORLD, SPHERE_BODY}