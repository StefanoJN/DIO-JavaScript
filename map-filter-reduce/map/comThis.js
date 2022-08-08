const fruts = {
	orange : {
		price: 2,
		 	},

	apple : {
		price: 3,
			},
};

function mapArray(arr, thisArg) {
	return arr.map((item) => {
		return item * thisArg.price;
	});
}

const qtd = [4,5];

console.log(mapArray(qtd, fruts.orange));
