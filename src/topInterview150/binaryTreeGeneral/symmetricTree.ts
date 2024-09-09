import { TreeNode } from "./maximumDepthOfBinaryTree";

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) return true;

  if (node1 !== null && node2 !== null && node1.val === node2.val)
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );

  return false;
}

function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root);
}

export function testIsSymmetric() {
  const root = new TreeNode(3);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(3);

  return isSymmetric(root);
}
