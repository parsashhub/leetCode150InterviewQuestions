export function addBinary(a: string, b: string): string {
  let result = "";
  let sum = 0;

  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || sum === 1) {
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;

    result =
      String.fromCharCode(parseInt(`${sum % 2}`) + "0".charCodeAt(0)) + result;

    sum = parseInt(`${sum / 2}`);

    i--;
    j--;
  }

  return result;
}
