/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let last = 0
  let curr = 0

  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (i > curr) {
      return false
    }

    if (i > last) {
      last = curr
    }

    curr = Math.max(curr, nums[i] + i)
  }

  return true
}
// @lc code=end
