export function reverseWords(s: string): string {
  let str = s.trim().split(" ").reverse();

  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "") temp += `${str[i]} `;
  }

  return temp.trimEnd();
}
