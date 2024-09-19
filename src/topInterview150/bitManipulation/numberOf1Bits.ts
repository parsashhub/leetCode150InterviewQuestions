export function hammingWeight(n: number): number {
  let binaryNumber = n.toString(2);

  let result = 0;
  for (let i = 0; i < binaryNumber.length; i++)
    if (parseInt(binaryNumber[i]) === 1) result += 1;

  return result;
}

export function hammingWeightII(n: number): number {
  let result = 0;
  while (n != 0) {
    result += n & 1;

    n >>= 1;
  }

  return result;
}
