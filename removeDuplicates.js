// Problem : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

//Hint : x is the last unique element's position
const removeDuplicates = (nums) => {
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[x]) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x + 1;
};


// T.C : O(n)
// S.C : O(1)