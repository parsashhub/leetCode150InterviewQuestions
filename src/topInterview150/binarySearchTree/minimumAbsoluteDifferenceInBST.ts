import { TreeNode } from "../binaryTreeGeneral/maximumDepthOfBinaryTree";

export function getMinimumDifference(root: TreeNode | null): number {
  let prev: number | null = null;
  let minDiff: number = 999999;

  const inorder = (node: TreeNode | null) => {
    if (node === null) return;

    inorder(node.left);

    if (prev !== null) minDiff = Math.min(minDiff, Math.abs(node.val - prev));
    prev = node.val;

    inorder(node.right);
  };

  inorder(root);

  return minDiff;
}

export function testGetMinimumDifference() {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right = new TreeNode(6);

  return getMinimumDifference(root);
}
