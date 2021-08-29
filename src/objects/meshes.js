import * as THREE from 'three';
import {SCENE} from "../parts/scene_settings";

let parameters = {
    count: 100000,
    size: 0.01,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: '#ff6030',
    outsideColor: '#1b3984'
};

let
    geometry = null,
    material = null,
    points = null;

let generateGalaxy = function () {

    if (points !== null) {
        geometry.dispose()
        material.dispose()
        SCENE.remove(points)
    }

    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry();

    let
        positions = new Float32Array(parameters.count * 3),
        colors = new Float32Array(parameters.count * 3),
        colorInside = new THREE.Color(parameters.insideColor),
        colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {

        let
            i3 = i * 3,

            radius = Math.random() * parameters.radius,
            spinAngle = radius * parameters.spin,
            branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2,

            randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius,
            randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius,
            randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = +randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        let mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / parameters.radius);

        colors[i3] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b
    }

    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );

    geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3)
    );

    /**
     * Material
     */
    material = new THREE.PointsMaterial(
        {
            size: parameters.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        }
    );

    points = new THREE.Points(geometry, material);
    points.position.set(0, 2, 0);
    SCENE.add(points);
}

export {generateGalaxy, parameters};