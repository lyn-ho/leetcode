/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * 双指针优化时间复杂度
 */
var maxArea = function(height) {
  if (!height || height.length <= 1) return 0

  let left = 0
  let right = height.length - 1

  let max = 0

  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right])

    if (currentArea > max) {
      max = currentArea
    }

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}
// @lc code=end
