/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const len = nums.length

  if(len === 0 || len === 1) return len

  let left = 0
  let right = 0

  let res = 1

  while (right < len - 1) {
    let next = nums[right + 1]

    if (nums[right] < next) {
      right++
    } else {
      res = Math.max(res, right - left + 1)

      left = right + 1
      right++
    }
  }

  if(nums[len - 1] > nums[len -2]) res = Math.max(res, right - left + 1)

  return res
};
// @lc code=end

