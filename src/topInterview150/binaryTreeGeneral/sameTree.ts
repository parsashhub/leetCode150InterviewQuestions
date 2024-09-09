import { TreeNode } from "./maximumDepthOfBinaryTree";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;

  if (p !== null && q !== null)
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );

  return false;
}

export function testIsSameTree() {
  const root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);

  const root2 = new TreeNode(3);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(20);
  root2.right.left = new TreeNode(15);
  root2.right.right = new TreeNode(7);

  return isSameTree(root1, root2);
}
