/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const len = nums.length

  let left = 0
  let right = -1

  let max = nums[0]
  let min = nums[len - 1]

  for (let i = 0;i < len;i++) {
    if (nums[i] < max) right = i
    else max = nums[i]

    if (nums[len - i - 1] > min) left = len - i - 1
    else min = nums[len - i - 1]
  }

  return right - left + 1
};
// @lc code=end

