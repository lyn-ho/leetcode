/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 *
 * 上层值，为原值加上下层相邻值的最小值
 */
var minimumTotal = function(triangle) {
  const len = triangle.length

  for (let row = len - 2;row >= 0;row--) {
    for (let col = 0;col < len - 1;col++) {
      triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1])
    }
  }

  return triangle[0][0]
};
// @lc code=end

