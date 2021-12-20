import * as dat from 'dat.gui';
import {DIRECTIONAL_LIGHT} from "./light_settings";
import {updateAllMaterials} from "./functions";

/**
 * @type {GUI}
 */
const GUI = new dat.GUI({
    width: 600,
});

/**
 * Финт ушами
 * @type {{}}
 */
const DEBUG_OBJECT = {};
DEBUG_OBJECT.envMapIntensity = 5; // default value


/**
 * =====================================================================
 * Свет
 */
let directionalLightSettings = GUI.addFolder('Настройки направленного света');

directionalLightSettings.add(
    DIRECTIONAL_LIGHT,
    'intensity',
    0, 10, 0.001
).name('Интенсивность света');

directionalLightSettings.add(
    DIRECTIONAL_LIGHT.position, 'x',
    -5, 5, 0.001
).name('Направление по оси X');

directionalLightSettings.add(
    DIRECTIONAL_LIGHT.position, 'y',
    -5, 5, 0.001
).name('Направление по оси Y');

directionalLightSettings.add(
    DIRECTIONAL_LIGHT.position, 'z',
    -5, 5, 0.001
).name('Направление по оси Z');

/**
 * =====================================================================
 * Интенсивность освещения карты окружения на моделях
 */
GUI.addFolder(
    'Настройки интенсивности освещения карты окружения на модели'
).add(
    DEBUG_OBJECT, 'envMapIntensity',
    0, 10, 0.001
).name('Интенсивность освещения карты окружения').onChange(updateAllMaterials);


export {GUI, DEBUG_OBJECT};