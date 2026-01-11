let arr = [5, 2, 6, 1, 3];

function sum(n) {
	if (n === 0) return arr[0];
	return arr[n] + sum(n - 1);
}
console.log(sum(arr.length - 1)); // 17

function sumOfAllOdd(n) {
	let isOdd = arr[n] % 2 !== 0;
	if (n === 0) return isOdd ? arr[0] : 0;
	return (isOdd ? arr[n] : 0) + sum(n - 1);
}
console.log(sumOfAllOdd(arr.length - 1)); // Output: 9
