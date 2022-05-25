// código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
	return lado * 4;
}

function areaCuadrado(lado) {
	return lado * lado;
}

console.groupEnd();
// código del triangulo
console.group("Triangulos");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
	return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
	return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

// código del círculo
console.group("Circulo");

function diametroCirculo(radio) {
	return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}

function areaCirculo(radio) {
	return radio * radio * PI;
}

console.groupEnd();

// Interaccion con el HTML
// cuadrado
function calcularPerimetroCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	alert(perimetro);
}

function calcularAreaCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;

	const area = areaCuadrado(value);
	alert(area);
}
// triángulo
function calcularPerimetroTriangulo() {
	const input1 = document.getElementById("InputTriangulo1");
	const input2 = document.getElementById("InputTriangulo2");
	const input3 = document.getElementById("InputTriangulo3");

	const lado1 = Number(input1.value);
	const lado2 = Number(input2.value);
	const base = Number(input3.value);

	const perimetro = perimetroTriangulo(lado1, lado2, base);
	alert(perimetro);
}

function calcularAreaTriangulo() {
	const input1 = document.getElementById("InputTriangulo1");
	const input2 = document.getElementById("InputTriangulo2");
	const input3 = document.getElementById("InputTriangulo3");

	const lado1 = input1.value;
	const lado2 = input2.value;
	const base = input3.value;

	const cateto = base / 2;

	const altura = Math.sqrt(lado1 ** 2 - cateto ** 2);

	const area = areaTriangulo(base, altura);
	alert(area);
}
// circulo
function calcularPerimetroCirculo() {
	const input = document.getElementById("InputCirculo");
	const value = input.value;

	const perimetro = perimetroCirculo(value);
	alert(perimetro);
}

function calcularAreaCirculo() {
	const input = document.getElementById("InputCirculo");
	const value = input.value;

	const area = areaCirculo(value);
	alert(area);
}
