/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length < 2) return

  let map = {}

  map[nums[0]] = 0

  for (let i = 1, l = nums.length;i < l;i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i]

    map[nums[i]] = i
  }
};
// @lc code=end

