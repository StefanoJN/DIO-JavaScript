function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((previo, current) => previo + current);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));
