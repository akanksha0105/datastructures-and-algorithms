//Problem : https://leetcode.com/problems/monotonic-array/

const isMonotonic = (array) => {
	return (
		// First check for decreasing order sequence...

		array.every(
			(element, index) => index === 0 || element <= array[index - 1],
		) ||
		// Then check for increasing order sequence...
		array.every((element, index) => index === 0 || element >= array[index - 1])
	);
};
