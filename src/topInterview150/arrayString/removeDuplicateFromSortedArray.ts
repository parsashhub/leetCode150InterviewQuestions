export function removeDuplicatesI(nums: number[]): number {
    if (nums.length === 0) return 0;

    let indexWrite = 1;
    let k = 1; // first element is always unique

    for (let indexRead = 1; indexRead < nums.length; indexRead++) {
        if (nums[indexRead] !== nums[indexRead - 1]) {
            nums[indexWrite] = nums[indexRead];
            indexWrite++;
            k++;
        }
    }

    return k;
}