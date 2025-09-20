//Inorder : Left  Root Right
function traverseInorderRecursive(node) {
	if (!node) return;

	traverseInorderRecursive(node.left);
	console.log(node.value);
	traverseInorderRecursive(node.right);
}

function traverseInorderIterative(node){

}