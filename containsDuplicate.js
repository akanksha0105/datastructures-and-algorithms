//Problem : https://leetcode.com/problems/contains-duplicate

const hasDuplicate = (nums) => {
	let numsSet = new Set(nums);
	return numsSet.size !== nums.length;
};
