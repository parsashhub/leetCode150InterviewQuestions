export default function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapSToT: { [key: string]: string } = {};
  const mapTToS: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (mapSToT[sChar] !== undefined && mapSToT[sChar] !== tChar) return false;
    else mapSToT[sChar] = tChar;

    if (mapTToS[tChar] !== undefined && mapTToS[tChar] !== sChar) return false;
    else mapTToS[tChar] = sChar;
  }

  return true;
}
