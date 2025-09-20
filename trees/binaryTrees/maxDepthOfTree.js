export const height = function (root) {
	if (root === null) {
		return 0;
	}

	// compute the height of left and right subtrees
	let lHeight = height(root.left);
	let rHeight = height(root.right);

	return Math.max(lHeight, rHeight) + 1;
};
