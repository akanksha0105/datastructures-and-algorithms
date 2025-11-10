//Problem 10 : Second Largest Element in an Array

const secondLargestElementInAnArray = (nums) => {
	if (!Array.isArray(nums) || nums.length < 2) return null;

	let firstLargest = -Infinity;
	let secondLargest = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > firstLargest) {
			secondLargest = firstLargest;
			firstLargest = nums[i];
		} else if (nums[i] < firstLargest && nums[i] > secondLargest) {
			secondLargest = nums[i];
		}
	}

	return secondLargest === -Infinity ? null : secondLargest;
};

// T.C : O(n)
// S.C : O(1)
