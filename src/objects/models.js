import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {updateAllMaterials} from "../parts/functions";
import {SCENE} from "../parts/scene_settings";
import {GUI} from "../parts/dat_gui_settings";


const GLTF_LOADER = new GLTFLoader();

GLTF_LOADER.load(
    '/models/FlightHelmet/glTF/FlightHelmet.gltf',
    function (model) {

        model.scene.scale.set(10, 10, 10); // задать размеры модели
        model.scene.position.set(0, -4, 0); // позицию
        model.scene.rotation.y = Math.PI * 0.5; // начальный поворот

        // dat.gui настройки rotation
        let GLTFModelSettings = GUI.addFolder('Настройки поворота модели');
        GLTFModelSettings.add(
            model.scene.rotation, 'y',
            -Math.PI, Math.PI, 0.001
        ).name('Поворот модели');

        SCENE.add(model.scene);

        updateAllMaterials();
    }
);

export {GLTF_LOADER};