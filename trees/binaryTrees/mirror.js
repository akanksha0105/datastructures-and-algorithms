// Mirror Binary Tree

function mirrorBinaryTree(root) {
	if (root == null) return root;

	let leftSubTree = mirrorBinaryTree(root.right);
	let rightSubTree = mirrorBinaryTree(root.left);

	root.left = leftSubTree;
	root.right = rightSubTree;

	return root;
}
