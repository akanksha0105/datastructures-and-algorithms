const rotate = (nums, k) => {
	let n = nums.length;
	k = k % n;

	reverse(nums, 0, n - k - 1);
	reverse(nums, n - k, n - 1);
	reverse(nums, 0, n - 1);
	return nums;
};

const reverse = (arr, l, r) => {
	while (l < r) {
		[arr[l], arr[r]] = [arr[r], arr[l]];
		l++;
		r--;
	}
};
