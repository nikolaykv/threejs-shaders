import CANNON from 'cannon';

/**
 * =====================================================================
 * Инициализация физического мира
 * и сила гравитациям по осям, то есть скорость падения
 * предметов
 */
const WORLD = new CANNON.World();
WORLD.gravity.set(0, -9.82, 0);
// более реалистичное поведение тел, сталкивающихся дру с другом
WORLD.broadphase = new CANNON.SAPBroadphase(WORLD);
// Усыпить физику столкновений для тех тел, которые мы не видим (оптимизация)
WORLD.allowSleep = true;

/**
 * =====================================================================
 *  Физические материалы тел
 */
const CONCRETE_MATERIAL = new CANNON.Material('concrete');
const PLASTIC_MATERIAL = new CANNON.Material('plastic');

/**
 * =====================================================================
 * Статичная "земля"
 */
const FLOOR_BODY = new CANNON.Body({
    material: CONCRETE_MATERIAL,
    mass: 0,
    shape: new CANNON.Box(new CANNON.Vec3(5, 5, 0.00001))
});

/**
 * =====================================================================
 * Поворот "статичной земли", относительно камеры
 */
FLOOR_BODY.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0),
    Math.PI * 0.5
);
WORLD.addBody(FLOOR_BODY);

/**
 * =====================================================================
 * Физика материалов на границе их столкновения
 */
const CONCRETE_PLASTIC_CONTACT_MATERIAL = new CANNON.ContactMaterial(
    CONCRETE_MATERIAL,
    PLASTIC_MATERIAL,
    {
        friction: 0.1, // трение
        restitution: 0.7 // упругость
    }
);
WORLD.addContactMaterial(CONCRETE_PLASTIC_CONTACT_MATERIAL);

/**
 * =====================================================================
 * Столкновение пласти о пластик
 */
const PLASTIC_PLASTIC_CONTACT_MATERIAL = new CANNON.ContactMaterial(
    PLASTIC_MATERIAL,
    PLASTIC_MATERIAL,
    {
        friction: 0.05, // трение
        restitution: 0.4 // упругость
    }
);
WORLD.addContactMaterial(PLASTIC_PLASTIC_CONTACT_MATERIAL);

export {WORLD, PLASTIC_MATERIAL};