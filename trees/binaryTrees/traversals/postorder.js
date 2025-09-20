//Postorder : Left Right  Root
function traversePostorderRecursive(node) {
	if (!node) return;

	traversePostorderRecursive(node.left);
	traversePostorderRecursive(node.right);
	console.log(node.value);
}


