export default function lengthOfLastWord(s: string): number {
  s = s.trimEnd();
  let length = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") break;
    length++
  }

  return length;
}
