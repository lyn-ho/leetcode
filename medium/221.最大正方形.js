/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 *
 * 动态规划
 *
 * 定义 dp[i][j] 为右下角时的最大边长
 * dp[i][j] 与 dp[i-1][j], dp[i-1][j-1], dp[i][j-1] 的关系
 * dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1
 *
 * 使用一维数组
 *
 * 当前层只与当前层与上一层的状态有关，可以将数组压缩
 *
 * prev ==> dp[i-1][j-1]
 * dp[i] ==> dp[i-1][j]
 * dp[i-1] ==> dp[i][j-1]
 * new_dp[i] ==> dp[i][j]
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0

  const rows = matrix.length
  const cols = matrix[0].length

  const dp = Array.from({length: cols + 1}).fill(0)

  let max = 0
  let prev = 0

  for (let i = 1;i <= rows;i++) {
    for (let j = 1;j <= cols;j++) {
      let temp = dp[j]
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
        max = Math.max(max, dp[j])
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }

  return max * max
};
// @lc code=end

