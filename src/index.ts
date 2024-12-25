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
import { twoSumII } from "./topInterview150/hashmap/twoSum";
import { isHappy } from "./topInterview150/hashmap/happyNumber";
import { containsNearbyDuplicate } from "./topInterview150/hashmap/containsDuplicateII";
import { testMaxDepth } from "./topInterview150/binaryTreeGeneral/maximumDepthOfBinaryTree";
import { testIsSameTree } from "./topInterview150/binaryTreeGeneral/sameTree";
import { testInvertTree } from "./topInterview150/binaryTreeGeneral/invertBinaryTree";
import { testIsSymmetric } from "./topInterview150/binaryTreeGeneral/symmetricTree";
import {
  hasPathSum,
  testHasPathSum,
} from "./topInterview150/binaryTreeGeneral/pathSum";
import { testCountNodes } from "./topInterview150/binaryTreeGeneral/countCompleteTreeNodes";
import { testAverageOfLevels } from "./topInterview150/binaryTreeBFS/averageOfLevelsInBinaryTree";
import { isPalindromeII } from "./topInterview150/math/palindromeNumber";
import { plusOne } from "./topInterview150/math/plusOne";
import { mySqrt, mySqrtII } from "./topInterview150/math/sqrt(x)";
import { addBinary } from "./topInterview150/bitManipulation/addBinary";
import { reverseBits } from "./topInterview150/bitManipulation/reverseBits";
import { singleNumberIII } from "./topInterview150/bitManipulation/singleNumber";
import {
  hammingWeight,
  hammingWeightII,
} from "./topInterview150/bitManipulation/numberOf1Bits";
import { testGetMinimumDifference } from "./topInterview150/binarySearchTree/minimumAbsoluteDifferenceInBST";
import { maxProfitII } from "./topInterview150/arrayString/bestTimeToBuyAndSellStockII";
import { canJump } from "./topInterview150/arrayString/jumpGame";
import { canCompleteCircuit } from "./topInterview150/arrayString/gasStation";
import { maxArea } from "./topInterview150/twoPointers/maxArea";

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

console.log(
  "Contains Duplicate II :",
  containsNearbyDuplicate([1, 2, 3, 1], 3),
);

console.log("Maximum Depth of Binary Tree :", testMaxDepth());

console.log("Same Tree :", testIsSameTree());

console.log("Invert Binary Tree :", testInvertTree());

console.log("Symmetric Tree :", testIsSymmetric());

console.log("Path Sum :", testHasPathSum());

console.log("Count Complete Tree Nodes :", testCountNodes());

console.log("Average of Levels in Binary Tree :", testAverageOfLevels());

console.log("Palindrome Number :", isPalindromeII(121));

console.log("Plus One :", plusOne([1, 2, 3, 9]));

console.log("Sqrt(x) :", mySqrtII(2));

console.log("Add Binary :", addBinary("11", "1"));

console.log("Reverse Bit :", reverseBits(0b0000010100101000001111010011100));

console.log("Single Number :", singleNumberIII([2, 2, 1]));

console.log("Number of 1 Bits :", hammingWeightII(128));

console.log("Minimum Absolute Difference in BST :", testGetMinimumDifference());

console.log(
  "Best Time to Buy and Sell Stock II :",
  maxProfitII([7, 1, 5, 3, 6, 4]),
);

console.log("Jump Game :", canJump([2, 3, 1, 1, 4]));

console.log(
  "Gas Station :",
  canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]),
);

console.log(
  "Container With Most Water :",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
);
