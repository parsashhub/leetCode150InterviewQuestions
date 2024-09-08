export default function summaryRanges(nums: number[]): string[] {
  let result: string[] = [];

  if (!nums.length) return result;

  let start = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      result.push(
        start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`,
      );
      start = nums[i];
    }
  }

  return result;
}
