import './style.css'
import params from './params.json';
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

// AxesHelper
const axesHelper = new THREE.AxesHelper(params.axesHelper.size);
scene.add(axesHelper);

// Lights
const lightOne = new THREE.PointLight(params.lightColor, params.lightIntensity);
lightOne.position.set(
    params.lightOne.x,
    params.lightOne.y,
    params.lightOne.z
);
scene.add(lightOne);

const lightTwo = new THREE.PointLight(params.lightColor, params.lightIntensity);
lightTwo.position.set(
    params.lightTwo.x,
    params.lightTwo.y,
    params.lightTwo.z
);
scene.add(lightTwo);


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', function () {
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
const camera = new THREE.PerspectiveCamera(
    params.perspectiveCamera.fov,
    sizes.width / sizes.height,
    params.perspectiveCamera.near,
    params.perspectiveCamera.far);

camera.position.set(
    params.perspectiveCamera.x,
    params.perspectiveCamera.y,
    params.perspectiveCamera.z
);

const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

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
        donutObj.scene.children[0].position.set(
            params.meshPosition.x,
            params.meshPosition.y,
            params.meshPosition.z
        );
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
