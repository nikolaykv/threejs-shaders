import * as THREE from "three";
import params from '../params.json';

let
    hemiLight = new THREE.HemisphereLight(
        0xffffff,
        0x444444,
        0.5
    ),

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);

hemiLight.position.set(
    params.hemisphereLight.position.x,
    params.hemisphereLight.position.y,
    params.hemisphereLight.position.z
);


directionalLight.position.set(
    params.directionalLight.position.x,
    params.directionalLight.position.y,
    params.directionalLight.position.z,
)

directionalLight.castShadow = true
directionalLight.shadow.camera.top = 0.079999999;
directionalLight.shadow.camera.bottom = -0.079999999;
directionalLight.shadow.camera.left = 0.12;
directionalLight.shadow.camera.right = -0.13;


directionalLight.name = 'directionalLight';
hemiLight.name = 'hemiLight';

export {hemiLight, directionalLight};