/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * 我们需要三个指针：

    current 用于记录当前填补到那个位置了

    m 用于记录 nums1 数组处理到哪个元素了

    n 用于记录 nums2 数组处理到哪个元素了
 */

var merge = function(nums1, m, nums2, n) {
  let current = m + n - 1

  while (current >= 0) {
    if (n === 0) return

    if (m < 1) {
      nums1[current--] = nums2[--n]
      continue
    }

    if (n < 1) {
      nums1[current--] = nums1[--m]
      continue
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m]
    } else {
      nums1[current--] = nums2[--n]
    }
  }
}
// @lc code=end
