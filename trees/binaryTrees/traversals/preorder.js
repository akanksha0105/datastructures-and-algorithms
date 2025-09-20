//  @param {TreeNode} root * @return {number[]}

//Preorder : Root Left Right
function traversePreOrderRecursive(node) {
	if (!node) return;
	console.log(node.value);
	traversePreOrderRecursive(node.left);
	traversePreOrderRecursive(node.right);
}

traversePreOrderRecursive(root);

function traversePreOrderIterative(node) {
	if (!node) return;
	console.log(node.value);
	while(node.left!==null){
		console.log(node.left)
	}
}
