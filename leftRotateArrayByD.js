const leftRotateArrayByD = (arr, d) => {
    let n = arr.length;
	reverse(arr, 0, d - 1);
	reverse(arr, d, n - 1);
	reverse(arr, 0, n - 1);
	return arr;
};

export const reverse = (arr, l, r) => {
	while (l < r) {
		[arr[l], arr[r]] = [arr[r], arr[l]];
		l++;
		r--;
	}

    return arr;
};

console.log(leftRotateArrayByD([1, 2, 3, 4, 5, 6, 7], 3));
