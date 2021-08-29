import * as THREE from 'three';

/**
 * Particles
 */
// Geometry
const PARTICLES_GEOMETRY = new THREE.BufferGeometry();
const COUNT = 10000;

const POSITIONS = new Float32Array(COUNT * 3);
const COLORS = new Float32Array(COUNT * 3);

for(let i = 0; i < COUNT * 3; i++)
{
    POSITIONS[i] = (Math.random() - 0.5) * 10;
    COLORS[i] = Math.random();
}

PARTICLES_GEOMETRY.setAttribute('position', new THREE.BufferAttribute(POSITIONS, 3));
PARTICLES_GEOMETRY.setAttribute('color', new THREE.BufferAttribute(COLORS, 3));


// Material
const TEXTURE = new THREE.TextureLoader().load('./textures/particles/2.png');

const PARTICLES_MATERIAL = new THREE.PointsMaterial(
    {
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: TEXTURE,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    }
);

const PARTICLES = new THREE.Points(
    PARTICLES_GEOMETRY,
    PARTICLES_MATERIAL
);

export { PARTICLES };