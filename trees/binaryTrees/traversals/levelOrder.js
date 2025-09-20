//Level Order Traversal Recursive

function levelOrderRecursive(root, level, res) {
	if (root == null) return;

	// If the current level doesn't exist yet, create it
	if (res.length === level) {
		res.push([]);
	}

	// Add the current node's value to the correct level
	res[level].push(root.val);

	// Recurse for children, increasing level
	levelOrderRecursive(root.left, level + 1, res);
	levelOrderRecursive(root.right, level + 1, res);
}

function levelOrderIterative(root) {
	if (!root) return [];

	let q = [root];
	let res = [];

	while (q.length > 0) {
		let levelSize = q.length; // number of nodes in the current level
		let currentLevel = [];

		for (let i = 0; i < levelSize; i++) {
			let node = q.shift();
			currentLevel.push(node.val);

			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}

		res.push(currentLevel);
	}

	return res;
}

function levelOrder(root) {
	let res = [];
	levelOrderRecursive(root, 0, res);
	return res;
}
