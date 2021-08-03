import * as THREE from "three";
import {ENVIRONMENT_MAP_TEXTURE} from "./environment";
// basic
/*const MATERIAL = new THREE.MeshBasicMaterial();
MATERIAL.color = new THREE.Color(0x69ff);
MATERIAL.wireframe = true;*/

// normal
/*const MATERIAL = new THREE.MeshNormalMaterial();
MATERIAL.flatShading = true;*/

// matcap
/*const MAT_CAP_TEXTURE = new THREE.TextureLoader().load('/textures/matcaps/1.png');
const MATERIAL = new THREE.MeshMatcapMaterial();
MATERIAL.matcap = MAT_CAP_TEXTURE;*/

// depth
// const MATERIAL = new THREE.MeshDepthMaterial();

// lambert
/*const MATERIAL = new THREE.MeshLambertMaterial();*/

// Phong
/*const MATERIAL = new THREE.MeshPhongMaterial();
MATERIAL.shininess = 70;
MATERIAL.specular = new THREE.Color(0x4ba023);
MATERIAL.color = new THREE.Color(0x69ff)*/

// Toon
/*const GRADIENT_TEXTURE = new THREE.TextureLoader().load('/textures/gradients/5.jpg');
GRADIENT_TEXTURE.minFilter = THREE.NearestFilter;
GRADIENT_TEXTURE.magFilter = THREE.NearestFilter;
GRADIENT_TEXTURE.generateMipmaps = false;
const MATERIAL = new THREE.MeshToonMaterial();
MATERIAL.gradientMap = GRADIENT_TEXTURE;*/

// standart
/*
const MATERIAL = new THREE.MeshStandardMaterial();

MATERIAL.map = new THREE.TextureLoader()
    .load(
        '/textures/door/color.jpg'
    );

MATERIAL.aoMap = new THREE.TextureLoader()
    .load(
        '/textures/door/ambientOcclusion.jpg'
    );

MATERIAL.displacementMap = new THREE.TextureLoader()
    .load(
        '/textures/door/height.jpg'
    );

MATERIAL.metalnessMap = new THREE.TextureLoader()
    .load(
        '/textures/door/metalness.jpg'
    );

MATERIAL.roughnessMap = new THREE.TextureLoader()
    .load(
        '/textures/door/roughness.jpg'
    );

MATERIAL.normalMap = new THREE.TextureLoader()
    .load(
        '/textures/door/normal.jpg'
    )

MATERIAL.alphaMap = new THREE.TextureLoader()
    .load(
        '/textures/door/alpha.jpg'
    );

MATERIAL.metalness = 0.45;
MATERIAL.roughness = 0.1;
MATERIAL.aoMapIntensity = 1.5;
MATERIAL.displacementScale = 0.0005;
MATERIAL.normalScale.set(0.5, 0.5);
MATERIAL.transparent = true;
*/

const MATERIAL = new THREE.MeshStandardMaterial();
MATERIAL.metalness = 1;
MATERIAL.roughness = 0.08;
MATERIAL.envMap = ENVIRONMENT_MAP_TEXTURE;

export {MATERIAL}
