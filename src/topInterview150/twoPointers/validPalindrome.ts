export default function isPalindrome(s: string): boolean {
  let regex = /[\W_]/g;
  let str = s.toLowerCase().replace(regex, "");
  return str === str.split("").reverse().join("");
}
