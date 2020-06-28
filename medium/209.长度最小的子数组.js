/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const len = nums.length

  if (len === 0) return 0
  
  let res = Infinity
  let left = 0
  let right = 0
  let sum = 0

  while (right < len) {
    sum += nums[right]

    while (sum >= s) {
      res = Math.min(res, right - left + 1)
      sum -= nums[left]
      left++
    }

    right++
  }

  return res === Infinity ? 0 : res
};
// @lc code=end

