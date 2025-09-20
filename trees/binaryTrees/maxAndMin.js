function getMinAndMax(root) {
    if (root === null) {
        return { min: Infinity, max: -Infinity };
    }

    const leftTree = getMinAndMax(root.left);
    const rightTree = getMinAndMax(root.right);

    const max = Math.max(root.data, Math.max(leftTree.max, rightTree.max));
    const min = Math.min(root.data, Math.min(leftTree.min, rightTree.min));

    return { min, max };
}