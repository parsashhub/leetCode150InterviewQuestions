export function isValid(s: string): boolean {
  const stack: string[] = [];
  const check: { [key: string]: string } = { "}": "{", "]": "[", ")": "(" };

  for (let c = 0; c < s.length; c++) {
    let char = s[c];

    if (char === "{" || char === "[" || char === "(") stack.push(char);
    else if (stack.pop() !== check[`${char}`]) return false;
  }

  return stack.length === 0;
}
