import {CUBE_MESH, MATERIAL} from "../objects/meshes";
import {CAMERA} from "./camera_settings";
import {PARAMETERS} from "./parameters";
import * as dat from 'dat.gui';

const GUI = new dat.GUI(
    {
        width: 530
    }
);

import {
    AMBIENT_LIGHT,
    DIRECTIONAL_LIGHT,
    HEMISPHERE_LIGHT, POINT_LIGHT
} from "./light_settings";

let
    material = GUI.addFolder('Настройки материала: '),
    other = GUI.addFolder('Другие настройки: '),
    position = GUI.addFolder('Позиция фигуры: '),
    functions = GUI.addFolder('Функции: '),
    camera = GUI.addFolder('Настройки камеры: '),
    lights = GUI.addFolder('Настройки света: '),

    ambientLight = lights.addFolder('Ambient Light: '),
    directionalLight = lights.addFolder('Directional Light: '),
    hemisphereLight = lights.addFolder('Hemisphere Light: '),
    pointLight = lights.addFolder('Point Light');

position.add(CUBE_MESH.position, 'x', 0, 1, 0.01);
position.add(CUBE_MESH.position, 'y', 0, 1, 0.01);
position.add(CUBE_MESH.position, 'z', 0, 1, 0.01);

material
    .add(CUBE_MESH.material, 'wireframe')
    .name('Показать каркас: ');

material
    .addColor(PARAMETERS, 'color')
    .onChange(function () {
        CUBE_MESH.material.color.set(PARAMETERS.color);
    })
    .name('Цвет фигуры: ');

material
    .add(MATERIAL, 'metalness', 0, 1, 0.0001)
    .name('Металличность: ');

material
    .add(MATERIAL, 'roughness', 0, 1, 0.0001)
    .name('Шероховатость: ');


other.add(CUBE_MESH, 'visible').name('Видимость');
functions.add(PARAMETERS, 'spin').name('Вращать фигуру');
camera.add(CAMERA.position, 'x', 0, 5, 0.01);
camera.add(CAMERA.position, 'y', 0, 5, 0.01);
camera.add(CAMERA.position, 'z', 0, 5, 0.01);

directionalLight.add(DIRECTIONAL_LIGHT, 'intensity', 0, 1, 0.001).name('Интенсивность направленного света: ');
directionalLight.add(DIRECTIONAL_LIGHT.position, 'x', 0, 5, 0.01).name('Позиция ось x: ');
directionalLight.add(DIRECTIONAL_LIGHT.position, 'y', 0, 5, 0.01).name('Позиция ось y: ');
directionalLight.add(DIRECTIONAL_LIGHT.position, 'z', 0, 5, 0.01).name('Позиция ось z: ');

ambientLight.add(AMBIENT_LIGHT, 'intensity', 0, 1, 0.001).name('Интенсивность окружающего света: ');
hemisphereLight.add(HEMISPHERE_LIGHT, 'intensity', 0, 1, 0.001).name('Интенсивность окружающего света: ');

pointLight.add(POINT_LIGHT, 'intensity', 0, 1, 0.001).name('Интенсивность точечного света: ');
pointLight.add(POINT_LIGHT.position, 'x', 0, 5, 0.01).name('Позиция ось x: ');
pointLight.add(POINT_LIGHT.position, 'y', 0, 5, 0.01).name('Позиция ось y: ');
pointLight.add(POINT_LIGHT.position, 'z', 0, 5, 0.01).name('Позиция ось z: ');

export {GUI}