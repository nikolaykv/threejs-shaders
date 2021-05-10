import * as THREE from "./three/three.module.js";

class Boxes {

    constructor(x, y, z, material = null) {
        // super();
        this.geometry = new THREE.BoxGeometry( x, y, z );
        if (material) {
            this.material = material;
        } else {
            this.material = new THREE.MeshNormalMaterial( ); //TODO customize
        }
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        // this.animation();
    }


    animation(time) {
        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;
    }


}


export {Boxes};