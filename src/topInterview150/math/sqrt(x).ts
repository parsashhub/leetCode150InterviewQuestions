// a naive way o find the floor of the square root, try with all-natural numbers starting from 1
export function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let i = 0;
  let result = 1;

  while (result <= x) {
    i++;
    result = i * i;
  }

  return i - 1;
}

export function mySqrtII(x: number): number {
  if (x === 0 || x === 1) return x;

  let lowerBound = 1;
  let upperBound = Math.floor(x / 2);
  let ans = 0;

  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);

    if (mid * mid == x) return mid;

    if (mid * mid < x) {
      lowerBound = mid + 1;
      ans = mid;
    } else upperBound = mid - 1;
  }

  return ans;
}
