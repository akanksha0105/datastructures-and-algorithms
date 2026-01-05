//Problem: https://www.geeksforgeeks.org/dsa/find-second-largest-element-array/

const getSecondLargest = (arr) => {
	const n = arr.length;

	let largest = -1,
		secondLargest = -1;

	for (let i = 0; i < n; i++) {
		if (arr[i] > largest) {
			secondLargest = largest;
			largest = arr[i];
		} else if (arr[i] < largest && arr[i] > secondLargest) {
			secondLargest = arr[i];
		}
	}
	return secondLargest;
};
