uniform vec3 lightDirection;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec3 uShadeColor;
uniform float shadeControl1;
uniform float shadeControl2;
uniform float halftoneRadius;
uniform float haltoneScale;
in vec3 worldNormal;
in vec2 vUv;
in vec4 screenPos;

void main()
{
  float intensity;
  intensity = dot(normalize(lightDirection), normalize(worldNormal));

  vec4 color1 = vec4(uColor.r, uColor.g, uColor.b, 1.0);
  vec4 color2 = vec4(uColor2.r, uColor2.g, uColor2.b, 1.0);
  vec4 shadeColor = vec4(uShadeColor.r, uShadeColor.g, uShadeColor.b, 1.0);

  if (intensity > shadeControl1) {
    // scale by w component from projection matrix for perspective correctness and keep within [0, 1] range
    vec2 screen_uv = (screenPos.xy / screenPos.w) * 0.5 + 0.5;

    // rotate 45 deg for better horizontal and vertical perception
    mat2 rot45 = mat2(0.707, -0.707, 0.707, 0.707); //2d rotation matrix
    vec2 rot_uv = rot45 * screen_uv * haltoneScale;

    // pos of nearest point in grid of circles mapped to [-1, 1] with frequency of grid 120 * 120
    vec2 nearest	= fract(120.0 * rot_uv) * 2.0 - 1.0;
    float dist = length(nearest); //dist to nearest point
    float radius = halftoneRadius;

    //sqrt of sum of difference between dist at curr pixel and neighbor in x and y directions (like mip map)
    float frag_width = fwidth(dist);
    // antialias using width of fragment so that fragments near edge of circle take on mixed color values (antialias high frequencies)
    float pixel_step = smoothstep(radius - frag_width, radius + frag_width, dist);
    vec4 fragcolor = mix(color1, color2, pixel_step); //lerp between two colors
    gl_FragColor = fragcolor;

  } else if (intensity > shadeControl2) {
    gl_FragColor = color2;
  } else {
    gl_FragColor = shadeColor;
  }
}