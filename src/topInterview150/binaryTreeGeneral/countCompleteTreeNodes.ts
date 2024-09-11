import { TreeNode } from "./maximumDepthOfBinaryTree";

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  let left = countNodes(root.left);
  let right = countNodes(root.right);

  return left + right + 1;
}

export function testCountNodes() {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);

  return countNodes(root)
}
