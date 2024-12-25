export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    if (currentArea > maxArea) maxArea = currentArea;

    if (height[left] < height[right]) left += 1;
    else right -= 1;
  }

  return maxArea;
}
