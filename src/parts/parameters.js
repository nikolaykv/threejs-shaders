import gsap from "gsap";
import {CUBE_MESH} from "../objects/meshes";

const PARAMETERS = {
    color: 0xff0000,
    spin: function () {
        gsap.to(
            CUBE_MESH.rotation,
            {
                duration: 1.5,
                y: CUBE_MESH.rotation.y + Math.PI * 2
            }
        )
    }
};

export {PARAMETERS};