export function removeDuplicatesII(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let indexWrite = 2;

    for (let indexRead = 2; indexRead < nums.length; indexRead++) {
        if (nums[indexRead] !== nums[indexWrite - 2]) {
            nums[indexWrite] = nums[indexRead];
            indexWrite++;
        }
    }

    return indexWrite;
}