export function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;
  let length = nums.length;

  for (let i = 1; i < length; i++) {
    if (nums[i] === candidate) count++;
    else count--;

    if (count === 0) {
      candidate = nums[i];
      count = 1;
    }

    // Optional: Early return if candidate is determined
    if (count > length / 2) return candidate;
  }

  return candidate;
}
