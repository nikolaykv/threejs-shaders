precision mediump float;
varying float vRandom;
uniform vec3 uColor;

void main()
{
    // gl_FragColor = vec4(0.5, vRandom, 1.0, 0.8);

    gl_FragColor = vec4(uColor, 1.0);
}