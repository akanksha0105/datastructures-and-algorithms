const findSum = (n) => {
	// base condition
	if (n == 1) return 1;
	return n + findSum(n - 1);
};

let n = 5;
console.log(findSum(n));
