const lista1 = [1, 2, 3, 30, 43];

function calcularMediaGeometrica(lista) {
	const cantidadElementos = lista.length;

	const multiplicacion = lista.reduce((a, b) => {
		return a * b;
	});

	const mediaGeometrica = Math.pow(multiplicacion, 1 / cantidadElementos);

	return mediaGeometrica;
}
