export default function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i = m - 1; // last element in nums1
  let j = n - 1; // last element in nums2
  let k = m + n - 1; // last position in nums1

  // Merge nums1 and nums2 from the back
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }

  // If there are remaining elements in nums2, copy them over
  while (j >= 0) nums1[k--] = nums2[j--];
}
