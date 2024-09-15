export function reverseBits(n: number): number {
  // console.log(n.toString(2).padStart(32, "0"))
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let lastBit = n & 1; // extract the last bit of n
    // console.log("last bit :", lastBit);
    result = (result << 1) | lastBit; // shift result left, add lastBit
    // console.log("result :", result.toString(2).padStart(32, "0"));
    n = n >> 1; // shift n to the right by 1 to get the next bit (every time we shift is like n / 2)
    // console.log("n :", n.toString(2).padStart(32, "0"))
  }

  return result >>> 0; // return the result as an unsigned 32-bit integer
}
