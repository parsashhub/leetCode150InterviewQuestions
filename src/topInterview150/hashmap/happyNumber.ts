export function isHappy(n: number): boolean {
  // if a number appeared twice, then we are stock in an infinite loop
  const visit = new Set();

  const sumSquare = (n: number) => {
    let sum = 0;

    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    return sum;
  };

  while (!visit.has(n)) {
    visit.add(n);
    n = sumSquare(n);
    if (n === 1) return true;
  }

  return false;
}
