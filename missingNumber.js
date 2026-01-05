//Problem : https://leetcode.com/problems/missing-number

const missingNumber = function (nums) {
	let n = nums.length;
	let total_sum = (n * (n + 1)) / 2;
	let sum_of_array = 0;

	for (let num of nums) {
		sum_of_array += num;
	}
	return total_sum - sum_of_array;
};

const findMissingNumber = (arr) => {
	let n = arr.length;
	let xor = 0;

	// XOR from 0 to n
	for (let i = 0; i <= n; i++) {
		xor ^= i;
	}

	// XOR all array elements
	for (let num of arr) {
		xor ^= num;
	}

	return xor;
};

// Example
console.log(findMissingNumber([3, 0, 1])); // 2
