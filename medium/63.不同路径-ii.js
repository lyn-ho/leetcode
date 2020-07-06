/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0

  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length

  const dp = new Array(rows)
  for (let i = 0;i < rows;i++) dp[i] = new Array(cols)

  dp[0][0] = 1

  for (let i = 1;i < rows;i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1
  }

  for (let i = 1;i < cols;i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
  }

  for (let i = 1;i < rows;i++) {
    for (let j = 1;j < cols;j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[rows - 1][cols - 1]
};
// @lc code=end

