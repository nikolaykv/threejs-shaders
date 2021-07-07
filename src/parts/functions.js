import {sizes} from "./other_settings";
import {camera} from "./camera_settings";
import donut from "../../donut.glb";
import params from "../params.json";
import {controls, scene, render} from "../script";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
function screenResize() {
    window.addEventListener('resize', function () {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        render.setSize(sizes.width, sizes.height);
        render.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
            scene.add(donutObj.scenes[0]);

        },
        // Отладка
        /*function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% загружено');
        },
        function (error) {
            console.log('Ошибка ' + error);
        }*/
    );
}

/**
 * Анимация сцены
 */
function animateScene() {
    controls.update()

    render.render(scene, camera)
    window.requestAnimationFrame(animateScene)
}

export {screenResize, donutGltfLoader, animateScene};
