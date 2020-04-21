/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 滑动窗口
 *
 * 窗口内有 k + 1 个奇数
 * 首尾偶数个数乘积
 */
var numberOfSubarrays = function (nums, k) {
  if (!nums || nums.length === 0) return 0
  if(k === 0) return 0

  let res = 0
  let odd = [-1]  // 前后插入假奇数
  let base = 1

  const len = nums.length

  for (let i = 0;i <= len;i++) {
    if (i === len || nums[i] & 1) {
      odd.push(i)
    }

    if (odd.length - base > k) {
      const h = odd[base] - odd[base - 1]
      const t = i - odd[odd.length - 2]
      res += h * t
      base++
    }
  }

  return res
};
// @lc code=end

