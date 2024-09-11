export function isPalindromeII(x: number): boolean {
  if (x < 0) return false;

  let rev = 0;
  let temp = x;

  while (temp) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return rev === x;
}
