const leftRotateArrayByOne = (nums) => {
	let len = nums.length;
	for (let i = 0; i < len - 1; i++) {
		[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
	}
	return nums;
};

console.log(leftRotateArrayByOne([1, 2, 3, 4]));
