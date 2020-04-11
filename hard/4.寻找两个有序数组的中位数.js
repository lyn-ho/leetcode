/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 暴力解
 * 暴力解主要是要merge两个排序的数组（A，B）成一个排序的数组。
 *
 * 用两个pointer（i，j），i 从数组A起始位置开始，即i=0开始，j 从数组B起始位置， 即j=0开始. 一一比较 A[i] 和 B[j],
 *
 * 如果A[i] <= B[j], 则把A[i] 放入新的数组中，i往后移一位，即 i+1.
 * 如果A[i] > B[j], 则把B[j] 放入新的数组中，j往后移一位，即 j+1.
 * 重复步骤#1 和 #2，直到i移到A最后，或者j移到B最后。
 * 如果j移动到B数组最后，那么直接把剩下的所有A依次放入新的数组中.
 * 如果i移动到A数组最后，那么直接把剩下的所有B依次放入新的数组中.
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const merged = []
  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++])
    } else {
      merged.push(nums2[j++])
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i++])
  }

  while (j < nums2.length) {
    merged.push(nums2[j++])
  }

  const len = merged.length
  return len % 2 === 1 ? merged[Math.floor(len / 2)] : (merged[len / 2] + merged[len / 2 - 1]) / 2
};
// @lc code=end

