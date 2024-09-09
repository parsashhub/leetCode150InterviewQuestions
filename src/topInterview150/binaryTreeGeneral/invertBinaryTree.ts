import { TreeNode } from "./maximumDepthOfBinaryTree";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  invertTree(root.left);
  invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
}

export function testInvertTree() {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);

  return invertTree(root)?.printPreOrder();
}
