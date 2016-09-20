// classic Phong equation
#version 410
in vec4 vPosition;
in vec4 vColor;
in vec4 vNormal;

out vec4 color;

uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;
uniform vec3 Ia;
uniform vec3 Id;
uniform vec3 Is;
uniform vec3 lightDirection;
uniform vec3 cameraPosition;
uniform float specularPower;

void main() 
{
	vec3 Lm = normalize(lightDirection);
	vec3 N = normalize(vNormal.xyz);
	vec3 Rm = 2 * dot(Lm,N) * N - Lm;
	vec3 V = normalize(cameraPosition-vPosition.xyz);

    vec3 red = vec3(250,0,0);
    vec3 green = vec3(0, 250, 0);
    vec3 blue = vec3(0, 0, 250);

    float a = dot(N,vec3(0,1.f,0));
    vec3 hemisphere = .5f * mix(green, blue, a) + .5f;

    float specularTerm = pow( max( 0, dot( Rm, V ) ), specularPower );
	float lambertTerm = max(0,dot(N,Lm));

    vec3 ambient = (Ia * .1f) * (Ka) * hemisphere;
	vec3 diffuse = Kd * 0.5 * lambertTerm * Id;
    vec3 specular = Is * Ks * specularTerm;

	color = vec4((0.8 * ambient) + (diffuse) + specular,1.0f);
}