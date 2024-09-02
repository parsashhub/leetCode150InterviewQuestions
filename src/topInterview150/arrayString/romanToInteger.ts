const romanNumber: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

export default function romanToInt(s: string): number {
  let sum: number = 0;
  let skipNext = false;
  for (let i = 0; i < s.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }

    let char = s[i];
    if (char !== "I" && char !== "X" && char !== "C") {
      sum += romanNumber[char];
    } else {
      let nextChar = s[i + 1];
      if (romanNumber[char + nextChar]) {
        sum += romanNumber[char + nextChar];
        skipNext = true;
      } else {
        sum += romanNumber[char];
      }
    }
  }

  return sum;
}
