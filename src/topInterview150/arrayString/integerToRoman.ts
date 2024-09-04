export default function intToRoman(num: number): string {
  const romanNumber: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";
  for (let value of Object.keys(romanNumber).map(Number).reverse()) {
    // While the current value can be subtracted from num, append the corresponding symbol
    while (num >= value) {
      result += romanNumber[value];
      num -= value;
    }
  }

  return result;
}
