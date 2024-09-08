export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // key is the number and index is the value
  const hashMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i]) && Math.abs(i - hashMap[nums[i]]) <= k)
      return true;

    hashMap[nums[i]] = i;
  }

  return false;
}
