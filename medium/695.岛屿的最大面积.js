/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * dfs
 *
 * 递归计算上下作业是否为1，得到面积
 * 遍历过的位置 置0
 */
var maxAreaOfIsland = function(grid) {
  const row = grid.length
  if (row === 0) return 0

  const column = grid[0].length
  if (column === 0) return 0

  let res = 0

  for (let i = 0;i < row; i++) {
    for (let j = 0;j < column; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(grid, i, j, row, column))
      }
    }
  }

  return res
};

function dfs(grid, i, j, row, column) {
  if (i < 0 || i > row - 1 || j < 0 || j > column - 1 || grid[i][j] === 0) return 0

  let count = 1

  grid[i][j] = 0

  count += dfs(grid, i + 1, j, row, column)
  count += dfs(grid, i - 1, j, row, column)
  count += dfs(grid, i, j + 1, row, column)
  count += dfs(grid, i, j - 1, row, column)

  return count
}
// @lc code=end

