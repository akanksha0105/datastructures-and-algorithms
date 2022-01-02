//T.C. : O(N)
//S.C. : O(1)

const getSecondLargest = (arr) => {
	const n = arr.length;
	if (n < 2) return "Array should have at least two numbers";
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

// console.log(getSecondLargest([0, 3, 5, 2, 7, 9]));
