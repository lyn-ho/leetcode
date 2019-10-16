/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * 排序之后，用双指针
 * 分治
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  const list = []

  nums.sort((a, b) => a - b)

  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i
    let right = len - 1

    while (left < right) {
      if (left === i) {
        left++
      } else if (right === i) {
        right--
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[left], nums[right], nums[i]])

        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++

        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--

        continue
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return list
}
// @lc code=end
