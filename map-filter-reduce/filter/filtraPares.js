function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}
array = [1 , 2, 3, 4];
console.log(filtraPares(array));
