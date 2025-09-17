Array.prototype.myReduce = function (callback, initialValue) {
	let accumulator;
	let startIdx;

	// Check if initialValue is provided
	if (initialValue !== undefined) {
		accumulator = initialValue;
		startIdx = 0; // Start from the first element
	} else {
		accumulator = this[0];
		startIdx = 1; // Start from the second element
	}

	// Iterate over the array, starting at startIdx
	for (let i = startIdx; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this);
	}

	return accumulator;
};

// Example usage:
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem)); // Output: 10
console.log(arr.myReduce((prod, elem) => prod * elem)); // Output: 24
