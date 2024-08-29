export function removeElement(nums: number[], val: number): number {
    let indexWrite = 0;
    let k = 0;

    for (let indexRead = 0; indexRead < nums.length; indexRead++) {
        if (nums[indexRead] !== val) {
            nums[indexWrite] = nums[indexRead];
            indexWrite++;
            k++;
        }
    }

    return k;
}