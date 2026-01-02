//Problem : https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=ww4l9yzs

const removeElement = (nums, val) => {
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != val) {
			nums[x] = nums[i];
			x++;
		}
	}
	return x;
};
