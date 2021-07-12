import * as THREE from 'three';
import {VERTICES} from "./rectangle_vertices";


const POSITIONS = []; // Позиция вершин треугольников на осях x,y,z из которых строится объект
const UVS = []; // Координаты текстуры
const NORMALS = []; // Нормали вершин треугольников
const COLORS = []; // их цвета

for (const VERTEX of VERTICES) {
    POSITIONS.push(...VERTEX.pos);
    NORMALS.push(...VERTEX.norm);
    UVS.push(...VERTEX.uv);
    COLORS.push(Math.random(), Math.random(), Math.random());
}

const BUFFER_GEOMETRY_RECTANGLE = new THREE.Mesh(
    new THREE.BufferGeometry().setAttribute(
        'position',
        new THREE.BufferAttribute(
            new Float32Array(POSITIONS),
            3
        )
    ).setAttribute(
        'normal',
        new THREE.BufferAttribute(
            new Float32Array(NORMALS),
            3
        )
    ).setAttribute(
        'uv',
        new THREE.BufferAttribute(
            new Float32Array(UVS),
            2
        )
    ).setAttribute(
        'color',
        new THREE.BufferAttribute(
            new Float32Array(COLORS),
            2
        )
    ),
    new THREE.MeshPhongMaterial(
        {
            vertexColors: true,
            // wireframe: true // покажи схему объекта
        }
    )
);

BUFFER_GEOMETRY_RECTANGLE.name = 'bufferGeometryRectangle';

export {BUFFER_GEOMETRY_RECTANGLE};