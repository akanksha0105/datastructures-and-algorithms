const leadersInArray = (nums) => {
	let ans = [],
		n = nums.length;
	let max = nums[n - 1];
	ans.push(max);
	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] > max) {
			ans.push(nums[i]);
			max = nums[i];
		}
	}

	return reverse(ans, 0, ans.length - 1);
};

const reverse = (arr, l, r) => {
	while (l < r) {
		[arr[l], arr[r]] = [arr[r], arr[l]];
		l++;
		r--;
	}
    return arr;
};

console.log(leadersInArray([5, 8, 6, 10, 4, 7]));
