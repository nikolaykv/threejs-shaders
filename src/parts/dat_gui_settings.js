import * as dat from 'dat.gui';
import {generateGalaxy, parameters} from "../objects/meshes";

/**
 * @type {GUI}
 */
const GUI = new dat.GUI({
    width: 600,
});


let galaxy_settings = GUI.addFolder('Настройки "Генератора галактик"');

galaxy_settings.add(
    parameters,
    'count',
    100,
    1000000,
    100
).name('Кол-во точек').onFinishChange(generateGalaxy);


galaxy_settings.add(
    parameters,
    'size',
    0.001,
    0.1,
    0.001
).name('Размер точек').onFinishChange(generateGalaxy);

galaxy_settings.add(
    parameters,
    'radius',
    0.01,
    20,
    0.01
).name('Радиус галактики').onFinishChange(generateGalaxy);

galaxy_settings.add(
    parameters,
    'branches',
    2,
    20,
    1
).name('Кол-во ветвей галактики').onFinishChange(generateGalaxy);

galaxy_settings.add(
    parameters,
    'spin',
    -5,
    5,
    0.001
).name('Спин галактики').onFinishChange(generateGalaxy);

galaxy_settings.add(
    parameters,
    'randomness',
    0,
    2,
    0.001
).name('Частицы случайно').onFinishChange(generateGalaxy);

galaxy_settings.add(
    parameters,
    'randomnessPower',
    1,
    10,
    0.001
).name('Коэффициент случайного расположения').onFinishChange(generateGalaxy);

galaxy_settings.addColor(
    parameters,
    'insideColor'
).name('Внутренний цвет частиц').onFinishChange(generateGalaxy);

galaxy_settings.addColor(
    parameters,
    'outsideColor'
).name('Внутренний цвет частиц').onFinishChange(generateGalaxy);


galaxy_settings.open();


export {GUI};