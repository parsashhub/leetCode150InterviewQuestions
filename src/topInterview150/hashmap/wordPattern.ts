export default function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  if (words.length !== pattern.length) return false;

  const patternToWord = new Map<string, string>();
  const wordToPattern = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const pChar = pattern[i];
    const word = words[i];

    if (patternToWord.has(pChar) && patternToWord.get(pChar) !== word)
      return false;
    else patternToWord.set(pChar, word);

    if (wordToPattern.has(word) && wordToPattern.get(word) !== pChar)
      return false;
    else wordToPattern.set(word, pChar);
  }

  return true;
}
