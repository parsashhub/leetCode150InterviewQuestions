import { strStrIV } from "./topInterview150/arrayString/findTheIndexOfFirstOccInString";
import { longestCommonPrefix } from "./topInterview150/arrayString/longestCommonPrefix";
import isPalindrome from "./topInterview150/twoPointers/validPalindrome";
import intToRoman from "./topInterview150/arrayString/integerToRoman";
import isSubsequence from "./topInterview150/twoPointers/isSubsequence";
import summaryRanges from "./topInterview150/Intervals/summaryRanges";
import hasCycleInit from "./topInterview150/linkedList/linkedListCycle";
import mergeTwoSortedLists from "./topInterview150/linkedList/mergeTwoSortedLists";
import canConstruct from "./topInterview150/hashmap/ransomNote";
import isIsomorphic from "./topInterview150/hashmap/isomorphicStrings";
import wordPattern from "./topInterview150/hashmap/wordPattern";
import isAnagram from "./topInterview150/hashmap/validAnagram";
import { twoSum, twoSumII } from "./topInterview150/hashmap/twoSum";
import { isHappy } from "./topInterview150/hashmap/happyNumber";
import { containsNearbyDuplicate } from "./topInterview150/hashmap/containsDuplicateII";
import {testMaxDepth} from "./topInterview150/binaryTreeGeneral/maximumDepthOfBinaryTree";

console.log(
  "Find the Index of the First Occurrence in a String :",
  strStrIV("sadbutsad", "sad"),
);

console.log(
  "Longest Common Prefix :",
  longestCommonPrefix(["flower", "flow", "flight"]),
);

console.log(
  "Valid Palindrome :",
  isPalindrome("A man, a plan, a canal: Panama"),
);

console.log("Integer to Roman :", intToRoman(3749));

console.log("Is Subsequence :", isSubsequence("abc", "ahbgdc"));

console.log("Summary Ranges :", summaryRanges([0, 2, 3, 4, 6, 8, 9]));

console.log("Linked List Cycle :", hasCycleInit([3, 2, 0, -4], 1));

console.log(
  "Merge Two Sorted Lists :",
  mergeTwoSortedLists([1, 2, 4], [1, 3, 4]),
);

console.log("Ransom Note :", canConstruct("aa", "aab"));

console.log("Isomorphic String :", isIsomorphic("add", "egg"));

console.log(
  "Word Pattern :",
  wordPattern("abba", "dog constructor constructor dog"),
);

console.log("Valid Anagram :", isAnagram("anagram", "nagaram"));

console.log("Two Sum :", twoSumII([2, 7, 11, 15], 9));

console.log("Happy Number :", isHappy(19));

console.log("Contains Duplicate II :", containsNearbyDuplicate([1, 2, 3, 1], 3));

console.log("Maximum Depth of Binary Tree :", testMaxDepth())