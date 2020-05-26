/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 龟兔赛跑算法
  if (nums.length < 2) return -1

  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  fast = 0

  while (fast !== slow) {
    fast = nums[fast]
    slow = nums[slow]
  }

  return slow
};
// @lc code=end

