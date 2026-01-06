//Problem : https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
	let xor = 0;

	for (let i = 0; i < nums.length; i++) {
		xor = xor ^ nums[i];
	}

	return xor;
};
