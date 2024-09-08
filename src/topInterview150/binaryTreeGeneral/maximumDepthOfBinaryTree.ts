export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  // Recursive case: Find the depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The depth of the current node is 1 plus the maximum of the left and right depths
  return 1 + Math.max(leftDepth, rightDepth);
}

export function testMaxDepth() {
  const root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);

  return maxDepth(root1);
}

/*
 * maxDepth function is a recursive approach based on DFS.
 * DFS is inherently used in recursion when traversing a binary tree.
 * but we can accomplish this using DFS Iterative Approach with a stack too.
 */
function maxDepthII(root: TreeNode | null): number {
  if (root === null) return 0;

  let maxDepth = 0;
  const stack: { node: TreeNode; depth: number }[] = [];
  // Start DFS from the root with an initial depth of 1
  stack.push({ node: root, depth: 1 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    // Update maxDepth with the maximum depth encountered
    maxDepth = Math.max(maxDepth, depth);

    // Push the children of the current node onto the stack with updated depth
    if (node.left !== null) stack.push({ node: node.left, depth: depth + 1 });

    if (node.right !== null) stack.push({ node: node.right, depth: depth + 1 });
  }

  return maxDepth;
}
