export default function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// Brute Force Approach
export function strStrII(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;

  if (m === 0) return 0;

  for (let i = 0; i <= n - m; i++) {
    // Check if substring matches needle
    if (haystack.substring(i, i + m) === needle) {
      return i;
    }
  }

  return -1;
}

// KMP Algorithm
export function strStrIII(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;

  if (m === 0) return 0;

  // Build the prefix table (LPS array) for the needle
  const lps = buildLPSArray(needle);

  let i = 0; // Index for haystack
  let j = 0; // Index for needle
  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === m) {
      return i - j; // Found the match, return the index
    } else if (i < n && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;
}

function buildLPSArray(pattern: string): number[] {
  const m = pattern.length;
  const lps: number[] = new Array(m).fill(0);

  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

// Rabin-Karp Algorithm
export function strStrIV(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  const base = 256;
  const mod = 149;  // A prime number for hashing

  if (m === 0) return 0;

  // Compute the hash of the needle and the first window of the haystack
  let needleHash = 0;
  let haystackHash = 0;
  let h = 1;  // Base raised to the power m-1, for rolling the hash

  // Precompute h = (base^(m-1)) % mod
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % mod;
  }

  // Calculate initial hash values for needle and the first window of haystack
  for (let i = 0; i < m; i++) {
    needleHash = (base * needleHash + needle.charCodeAt(i)) % mod;
    haystackHash = (base * haystackHash + haystack.charCodeAt(i)) % mod;
  }

  // Slide over the haystack
  for (let i = 0; i <= n - m; i++) {
    // If the hash values match, check character by character
    if (needleHash === haystackHash) {
      let j;
      for (j = 0; j < m; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j === m) {
        return i;  // Found the match, return the index
      }
    }

    // Compute the hash for the next window
    if (i < n - m) {
      haystackHash = (base * (haystackHash - haystack.charCodeAt(i) * h) + haystack.charCodeAt(i + m)) % mod;

      // We might get a negative hash, convert it to positive
      if (haystackHash < 0) {
        haystackHash += mod;
      }
    }
  }

  return -1;  // If no match is found
}