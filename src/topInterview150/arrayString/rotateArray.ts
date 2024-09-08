// first idea that comes to my mind
export default function rotate(nums: number[], k: number): void {
  const len: number = nums.length;
  // adjust k to handle cases where k > len
  k = k % len;
  const temp = [...nums.slice(len - k), ...nums.slice(0, len - k)];
  for (let i = 0; i < len; i++) {
    nums[i] = temp[i];
  }
}

export function rotateII(nums: number[], k: number): void {
  const len = nums.length;
  // adjust k to handle cases where k > len
  k = k % len;

  // function to reverse part of the array
  const reverse = (start: number, end: number): void => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // reverse the entire array
  reverse(0, len - 1);
  // reverse the first k elements
  reverse(0, k - 1);
  // reverse the remaining elements
  reverse(k, len - 1);
}
