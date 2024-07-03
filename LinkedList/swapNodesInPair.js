const swapNodesInPair = (head) => {
   // Base case: if we reach the end or there is only one node left
  if (!head || !head.next) {
    return head;
  }

  // Nodes to be swapped
  let firstNode = head;
  let secondNode = head.next;

  // Recursively call swapPairs for the next pair
  firstNode.next = swapPairs(secondNode.next);

  // Swap nodes
  secondNode.next = firstNode;

  // secondNode becomes the new head of this swapped pair
  return secondNode;
}