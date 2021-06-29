import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import donut from '../donut.glb'

const loader = new GLTFLoader();

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Lights
const light = new THREE.PointLight(0x404040, 3);
light.position.set(3, 3, 5);
scene.add(light)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(15, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

loader.load(
    donut,
    function (donutObj) {
        scene.add(donutObj.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% загружено');
    },
    function (error) {
        console.log('Ошибка ' + error);
    }
);

/**
 * Animate
 */

const animate = () => {
    controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

animate();
