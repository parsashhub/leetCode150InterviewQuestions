export default function canConstruct(
  ransomNote: string,
  magazine: string,
): boolean {
  const magazineLetters: { [key: string]: number } = {};

  for (let char of magazine) {
    if (magazineLetters[char]) magazineLetters[char]++;
    else magazineLetters[char] = 1;
  }

  for (let char of ransomNote) {
    if (!magazineLetters[char] || magazineLetters[char] === 0) return false;
    magazineLetters[char]--;
  }

  return true;
}
