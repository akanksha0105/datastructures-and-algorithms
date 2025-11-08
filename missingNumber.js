// Problem 8: https://leetcode.com/problems/missing-number/

const missingNumber = function (nums) {
	let xor1 = 0,
		xor2 = 0;
	let n = nums.length;
	for (let i = 0; i < nums.length; i++) {
		xor1 = xor1 ^ nums[i];
	}

	for (let i = 1; i <= n; i++) {
		xor2 = xor2 ^ i;
	}

	return xor1 ^ xor2;
};

//T.C : O(N)
//S.C : O(1)