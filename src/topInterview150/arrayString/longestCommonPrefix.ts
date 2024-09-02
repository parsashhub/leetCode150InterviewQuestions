/*
 * We start with the first string and reduce the prefix by comparing it
 * with each subsequent string. If a string doesn’t start with the current prefix,
 * we reduce the prefix by one character at a time until it matches or becomes empty.
 */
export function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the prefix, shorten the prefix.
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

function longestCommonPrefixVertical(strs: string[]): string {
  // Edge case: If the array is empty, return an empty string.
  if (strs.length === 0) return "";

  // Loop through the characters of the first string.
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    // Compare the current character with the corresponding character of each string.
    for (let j = 1; j < strs.length; j++) {
      // If a string is shorter than the current index, or a mismatch is found, return the result so far.
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}