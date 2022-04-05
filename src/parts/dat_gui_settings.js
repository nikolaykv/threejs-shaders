import {MATERIAL} from "../objects/models";
import * as dat from 'dat.gui';

/**
 * @type {GUI}
 */
const GUI = new dat.GUI({
    width: 600,
});


let frequency = GUI.addFolder('Частота');

frequency.add(
    MATERIAL.uniforms.uFrequency.value,
    'x', 0, 20, 0.01
).name("Частота вершинного шейдера по оси X");

frequency.add(
    MATERIAL.uniforms.uFrequency.value,
    'y', 0, 20, 0.01
).name("Частота вершинного шейдера по оси Y");

export {GUI};