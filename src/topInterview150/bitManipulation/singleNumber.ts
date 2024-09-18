// this one we first sort the algorithm and then find the single element
// time complexity => o(nlogn), space complexity = o(1)
export function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }

  return -1; // this line should never be reached if input is valid
}

// using Maps (O(n) time, O(n) space)
export function singleNumberII(nums: number[]): number {
  const map = new Map<number, number>();

  // Store counts of each number in the map
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Find the number with count 1
  for (const [key, value] of map) {
    if (value === 1) return key;
  }

  return -1;
}

// using Bitwise XOR (O(n) time, O(1) space)
export function singleNumberIII(nums: number[]): number {
  let result = 0;

  for (const num of nums) result ^= num; // XOR each element

  return result;
}
