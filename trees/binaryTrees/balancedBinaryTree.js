import { height } from "./maxDepthOfTree";
// check if the binary tree is balanced

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */

var isBalanced = function (root) {
	if (root == null) return true;

	let leftSubTreeHeight = height(root.left);
	let rightSubTreeHeight = height(root.right);

	if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) > 1) return false;

	let isBalancedLeftSubTree = isBalanced(root.left);
	let isBalancedRightSubTree = isBalanced(root.right);

	return isBalancedLeftSubTree & isBalancedRightSubTree;
};
