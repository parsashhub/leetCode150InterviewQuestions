import { TreeNode } from "./maximumDepthOfBinaryTree";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  if (root.left === null && root.right === null) return root.val === targetSum;

  const remainedSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainedSum) || hasPathSum(root.right, remainedSum)
  );
}

export function testHasPathSum() {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(11);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right.left = new TreeNode(13);
  root.right.right = new TreeNode(4);

  return hasPathSum(root, 22);
}


// I have an idea to use an A* like algorithm, although it is for shortest path,
// but I want to use the concept of heuristics to prune the tree.
// the only catch is that it won't work if the tree has negative value.
export function hasPathSumII(
  root: TreeNode | null,
  targetSum: number,
): boolean {
  if (root === null) return false;

  // Priority queue using a min-heap where elements are [currentSum, node] (like tuple)
  const minHeap: [number, TreeNode][] = [[root.val, root]];

  while (minHeap.length > 0) {
    // Extract the node with the lowest f(n) value (smallest currentSum)
    const [currentSum, node] = minHeap.shift()!;

    if (node.left === null && node.right === null && currentSum === targetSum)
      return true;

    if (node.left !== null) {
      const leftSum = currentSum + node.left.val;
      if (leftSum <= targetSum) minHeap.push([leftSum, node.left]);
    }

    if (node.right !== null) {
      const rightSum = currentSum + node.right.val;
      if (rightSum <= targetSum) minHeap.push([rightSum, node.right]);
    }

    minHeap.sort((a, b) => a[0] - b[0]);
  }

  return false;
}
