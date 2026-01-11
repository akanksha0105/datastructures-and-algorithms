// A number is a power of 2 if it can be divided by 2 repeatedly until it reaches 1.
function isPowerOfTwo(n) {
	if (n === 1) return true;
	else if (n < 1 || n % 2 !== 0) return false;
	return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(18)); // false
