/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const len = nums.length
  let map = new Map
  let sum = 0
  let repeat

  for (let i = 0;i < len;i++) {
    sum += nums[i]

    if (!map.has(nums[i])) {
      map.set(nums[i], true)
    } else {
      repeat = nums[i]
    }
  }

  const lose = (1 + len) * len / 2 - (sum - repeat)
  return [repeat, lose]
};
// @lc code=end

