/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 *
 * area += (h[i] - height[i])
 * 左边柱子最大值 和 右边柱子最大值
 * 两个数组 leftMax, rightMax, 表示左右最大值数组
 * h[i] = Math.min(左最大值, 右最大值)
 */
var trap = function(height) {
  let max = 0
  let res = 0
  const len = height.length
  const leftMax = []
  const rightMax = []

  for (let i = 0;i < len;i++) {
    leftMax[i] = max = Math.max(height[i], max)
  }

  max = 0

  for (let i = len - 1;i >= 0; i--) {
    rightMax[i] = max = Math.max(height[i], max)
  }

  for (let i = 0;i < len;i++) {
    res = res + Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return res
};
// @lc code=end

