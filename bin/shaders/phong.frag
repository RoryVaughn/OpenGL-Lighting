// classic Phong equation
#version 410
in vec4 vPosition;
in vec4 vColor;
in vec4 vNormal;

out vec4 color;

uniform vec3 lightDirection;
uniform vec3 Id;
uniform vec3 Kd;

void main() {
color = vec4 (1f,0f,0f,1.f);
vec3 normalLight = normalize(lightDirection);
vec4 v4Light = (normalLight,1f)
vec4 diffuse = Kd * dot(vNormal,-v4Light) * Id;
color = color * diffuse;

}