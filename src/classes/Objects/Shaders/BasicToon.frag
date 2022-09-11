uniform vec3 lightDirection;
uniform vec3 uColor;
uniform vec3 uShadeColor;
uniform float shadeControl;
in vec3 worldNormal;
in vec2 vUv;
in vec4 screenPos;

void main()
{
  float intensity;
  intensity = dot(normalize(lightDirection), normalize(worldNormal));

  vec4 color1 = vec4(uColor.r, uColor.g, uColor.b, 1.0);
  vec4 shadeColor = vec4(uShadeColor.r, uShadeColor.g, uShadeColor.b, 1.0);

  if (intensity > shadeControl) {
    gl_FragColor = color1;
  } else {
    gl_FragColor = shadeColor;
  }
}