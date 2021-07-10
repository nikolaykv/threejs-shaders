import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {ORBIT_CONTROLS, RENDER, GROUP} from "../script";
import {CAMERA} from "./camera_settings";
import {SCENE} from "./scene_settings";
import {sizes} from "./other_settings";
import donut from "../../donut.glb";
import params from "../params.json";

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
        CAMERA.aspect = sizes.width / sizes.height;
        CAMERA.updateProjectionMatrix();

        // Update renderer
        RENDER.setSize(sizes.width, sizes.height);
        RENDER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

/**
 *  Загрузка 3D объекта и установка его позиции
 */
function donutGltfLoader() {
    new GLTFLoader().load(
        donut,
        function (donutObj) {

            // пончик - отбрасывать тень
            donutObj.scene.children[0].castShadow = true;

            // пончик -позиция
            donutObj.scene.children[0].position.set(
                params.meshPosition.x,
                params.meshPosition.y,
                params.meshPosition.z
            );

            // Добавить пончик в группу
            GROUP.add(donutObj.scene.children[0]);

        },

        // Отладка загрузчика
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
    ORBIT_CONTROLS.update();

    RENDER.render(SCENE, CAMERA);
    window.requestAnimationFrame(animateScene);
}

export {screenResize, donutGltfLoader, animateScene};
