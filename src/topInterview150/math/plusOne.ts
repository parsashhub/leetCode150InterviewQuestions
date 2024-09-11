export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // If the current digit is 9, set it to 0 and continue
    digits[i] = 0;
  }

  // If all digits were 9, create a new array with an additional leading 1
  const newDigits = new Array(digits.length + 1).fill(0);
  newDigits[0] = 1;

  return newDigits;
}
