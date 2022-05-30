// const lista1 = [40000, 50000, 100, 200, 500];

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});

	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

function ordenarLista(lista) {
	const listaOrdenada = lista.sort(function (a, b) {
		return a - b;
	});
	return listaOrdenada;
}

function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function calcularMediana(listaBase) {
	if (listaBase.length === 0) {
		return 0;
	} else {
		const lista = ordenarLista(listaBase);

		const mitadLista = parseInt(lista.length / 2);

		// lista es par?

		let mediana;

		if (esPar(lista.length)) {
			const numero1 = lista[mitadLista - 1];
			const numero2 = lista[mitadLista];
			const promedioNumero1yNumero2 = calcularMediaAritmetica([numero1, numero2]);
			mediana = promedioNumero1yNumero2;
		} else {
			mediana = lista[mitadLista];
		}
		return mediana;
	}
}
