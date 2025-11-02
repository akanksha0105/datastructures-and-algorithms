const removeElement = (nums) => {
	let x = -1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x + 1;
};
