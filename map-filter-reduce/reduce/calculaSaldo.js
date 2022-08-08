function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo); //"saldo" é o argumento para iniciar o acumulador (acc).

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 1.5,
		nome: 'biscoito',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 150;

console.log(calculaSaldo(saldo, lista));
