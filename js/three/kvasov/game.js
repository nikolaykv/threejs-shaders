const game = new function () {
	const game = this;
    let scene, render, camera,
		keys = {},
        events = {
            'keydown': null
        };

    const vector = this.vector = (x, y, z) => {
        return new THREE.Vector3(x, y, z);
    };

    game.on = (event_name, processor) => {
        events[event_name] = processor;
    }

    const addCube = this.addCube = (configuration) => {
        let cube = new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshBasicMaterial(
                {
                    color: 0x00ff00
                }
            ));

        cube.position.copy(configuration.position);
        scene.add(cube);
        return cube;
    }


	game.getCamera = () => {
		return camera;
	};


    const animate = this.animate = () => {

    	if (events.keydown) {
    		events.keydown(keys);
		}
        render.render(scene, camera);
        requestAnimationFrame(animate);
    };


    this.init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        render = new THREE.WebGLRenderer()
        render.setSize(window.innerWidth, window.innerHeight);

        window.addEventListener('keydown', (event) => {
        	keys[event.code] = true;
		});

		window.addEventListener('keyup', (event) => {
			keys[event.code] = false;
		});

        document.body.appendChild(render.domElement);

        animate();
    };
}