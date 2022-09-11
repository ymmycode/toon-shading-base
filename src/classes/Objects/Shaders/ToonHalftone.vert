out vec3 worldNormal;
out vec2 vUv;
out vec4 screenPos;

void main()
{
  worldNormal = normalMatrix * normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  screenPos = gl_Position;
  vUv = uv;
}