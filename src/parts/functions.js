import {SIZES} from "./other_settings";
import {CAMERA} from "./camera_settings";
import donut from "../../donut.glb";
import params from "../params.json";
import {CONTROLS, SCENE, RENDER} from "../script";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
function screenResize() {
    window.addEventListener('resize', function () {
        // Update sizes
        SIZES.width = window.innerWidth;
        SIZES.height = window.innerHeight;

        // Update camera
        CAMERA.aspect = SIZES.width / SIZES.height;
        CAMERA.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(SIZES.width, SIZES.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

let loader = new GLTFLoader();

/**
 *  Загрузка 3D объекта и установка его позиции
 */
function donutGltfLoader() {
    loader.load(
        donut,
        function (donutObj) {
            donutObj.scene.children[0].position.set(
                params.meshPosition.x,
                params.meshPosition.y,
                params.meshPosition.z
            );
            SCENE.add(donutObj.scene);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% загружено');
        },
        function (error) {
            console.log('Ошибка ' + error);
        }
    );
}

/**
 * Анимация сцены
 */
function animateScene() {
    CONTROLS.update()

    RENDER.render(SCENE, CAMERA)
    window.requestAnimationFrame(animateScene)
}

export {screenResize, donutGltfLoader, animateScene};
