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

/*
 * We compare characters column by column across all strings. If all characters match in a column,
 * we move to the next column until we find a mismatch or reach the end of one of the strings.
 */
export function longestCommonPrefixVertical(strs: string[]): string {
  if (!strs.length) return "";

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

/*
 * We build a Trie from all the strings, and then traverse it from the root,
 * collecting characters until we find a node with more than one child or reach the end of the word.
 * This gives us the longest common prefix.
 */
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  findLongestCommonPrefix(): string {
    let node = this.root;
    let prefix = "";

    // Traverse the Trie and build the prefix as long as there's only one child.
    while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
      let char = Object.keys(node.children)[0];
      prefix += char;
      node = node.children[char];
    }

    return prefix;
  }
}

function longestCommonPrefixTrie(strs: string[]): string {
  if (!strs.length) return "";

  // Build the Trie with the strings.
  let trie = new Trie();
  for (let str of strs) {
    trie.insert(str);
  }

  return trie.findLongestCommonPrefix();
}
