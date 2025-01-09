#ifdef VERTEX_SHADER

attribute vec2 position;
attribute vec2 texcoord;

uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform vec2 u_scale;

varying vec2 v_texCoord;
varying vec2 v_posCoord;

void main() {
  vec2 scaledPosition = (position * u_scale) + u_translation;

  vec2 zeroToOne = scaledPosition / u_resolution;
  vec2 zeroToTwo = zeroToOne * 2.0;
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

  v_texCoord = texcoord;
  v_posCoord = position;
}

#else

precision mediump float;

uniform float u_alpha;

#endif

#ifdef IMAGE

uniform sampler2D u_image;
varying vec2 v_texCoord;

void main() {
  vec4 color = texture2D(u_image, v_texCoord);
  gl_FragColor = vec4(color.rgb, color.a * u_alpha);
}

#endif

#ifdef RECT

uniform vec4 u_color;

varying vec2 v_posCoord;

void main() {
  gl_FragColor = vec4(u_color.rgb, u_color.a * u_alpha);
}

#endif

#ifdef BUTTON

uniform vec4 u_color;
uniform float u_outline_l;
uniform float u_border_radius;
uniform vec2 u_size;

varying vec2 v_posCoord;

void main() {
  vec2 halfSize = vec2(1.0) * 0.5;
  vec2 center = vec2(halfSize.x, halfSize.y);
  vec2 pos = v_posCoord - center;

  vec2 normalizedRadius = vec2(u_border_radius / u_size.x, u_border_radius / u_size.y);

  if (abs(pos.x) <= halfSize.x - normalizedRadius.x || 
    abs(pos.y) <= halfSize.y - normalizedRadius.y) {
    float yAxis = float(v_posCoord.y < 1.0 - u_outline_l);
    gl_FragColor = vec4(yAxis == 1.0 ? u_color.rgb : u_color.rgb * 0.75, u_color.a * u_alpha);
    return;
  }

  vec2 corner = vec2(
    pos.x > 0.0 ? halfSize.x - normalizedRadius.x : -halfSize.x + normalizedRadius.x,
    pos.y > 0.0 ? halfSize.y - normalizedRadius.y : -halfSize.y + normalizedRadius.y
  );

  vec2 scaledPos = pos * u_size;
  vec2 scaledCorner = corner * u_size;
  float distance = length(scaledPos - scaledCorner);

  if (distance <= u_border_radius) {
    float yAxis = float(v_posCoord.y < 1.0 - u_outline_l);
    float xAxis = float(v_posCoord.x < 1.0 - u_outline_l && v_posCoord.x > u_outline_l);
    gl_FragColor = vec4((yAxis == 1.0 || xAxis == 1.0) ? u_color.rgb : u_color.rgb * 0.75, u_color.a * u_alpha);
  } else {
    discard;
  }
}

#endif
