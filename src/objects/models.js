import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import burger from '../../static/models/burger.glb';
import {SCENE} from "../parts/scene_settings";


const GLTF_LOADER = new GLTFLoader();

GLTF_LOADER.load(
  burger,
  function (gltfBurger) {
      gltfBurger.scene.scale.set(0.15, 0.15, 0.15);
      gltfBurger.scene.position.set(0, -0.4, 0);
      SCENE.add(gltfBurger.scene);
  }
);

export {
    GLTF_LOADER
};