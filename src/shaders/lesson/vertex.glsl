uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
varying float vRandom;

attribute vec3 position;
attribute float aRandom;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;

    modelPosition.z += aRandom * 0.1;
    vRandom = aRandom;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}