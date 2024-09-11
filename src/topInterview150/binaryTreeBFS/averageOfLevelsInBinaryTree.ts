import { TreeNode } from "../binaryTreeGeneral/maximumDepthOfBinaryTree";

function averageOfLevels(root: TreeNode | null): number[] {
  if (root === null) return [];

  // a queue for level order traversal
  const queue = [{ ...root }];
  const result: number[] = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node) {
        levelSum += node.val;

        // Add child nodes to the queue for the next level
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }

    result.push(levelSum / levelSize);
  }

  return result;
}

export function testAverageOfLevels() {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  return averageOfLevels(root);
}
