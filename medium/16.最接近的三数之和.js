/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return

  let res = nums[0] + nums[1] + nums[2]
  const len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0;i < len;i++) {
    let left = i + 1
    let right = len - 1

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]

      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }

      if (sum > target)
        right--
      else if (sum < target)
        left++
      else
        return res
    }
  }

  return res
};
// @lc code=end

