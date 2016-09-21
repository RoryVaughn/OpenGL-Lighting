// // classic Phong equation
#version 410
layout(location=0) in vec4 Position;
layout(location=1) in vec4 Color;
layout(location=2) in vec4 Normal;
//locations must be added and set to a location 
//in the buffer before they cant be taken in from the vertex shader.

out vec4 vPosition;
out vec4 vColor;
out vec4 vNormal;
//The "outed" data from here must be taken in in the Fragment shader.


uniform mat4 ProjectionViewModel;
uniform mat4 ModelMatrix;
uniform mat4 NormalMatrix;


void main() {
	vPosition = ModelMatrix * Position;
	vNormal = NormalMatrix * Normal;
	gl_Position = ProjectionViewModel * Position;
}