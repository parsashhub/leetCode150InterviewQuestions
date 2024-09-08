// first idea that comes to my mind: Brute Force
// which has o(n^2) time complexity, but let's implement it.
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == target) return [i, j];
    }
  }

  return [];
}

// for the second idea we use a hashmap
export function twoSumII(nums: number[], target: number): number[] {
  const hashMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];

    if (hashMap.hasOwnProperty(temp)) return [hashMap[temp], i];

    hashMap[nums[i]] = i;
  }

  return [];
}
