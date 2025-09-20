//Leetcode : 
// Diameter of Binary Tree

function height(root) {
	if (root === null) {
		return 0; // return 0 instead of -1
	}

	let lHeight = height(root.left);
	let rHeight = height(root.right);

	return Math.max(lHeight, rHeight) + 1;
}

var diameterOfBinaryTree = function (root) {
	if (root == null) return 0;

	let lheight = height(root.left);
	let rheight = height(root.right);

	let ldiameter = diameterOfBinaryTree(root.left);
	let rdiameter = diameterOfBinaryTree(root.right);

	return Math.max(lheight + rheight, Math.max(ldiameter, rdiameter));
};
