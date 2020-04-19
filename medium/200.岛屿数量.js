/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 * 对于每个节点，判断当前的值是否是'1'，是'1'的话岛屿数+1
 * 开始按照DFS进行 '右下左上'的递归搜索，同时将搜索过的节点设成'0'
 */

function dfs(x, y, grid) {
  if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1 || grid[x][y] === '0') return

  grid[x][y] = '0'

  dfs(x - 1, y, grid)
  dfs(x, y - 1, grid)
  dfs(x + 1, y, grid)
  dfs(x, y + 1, grid)
}

var numIslands = function(grid) {
  let res = 0

  for (let x = 0;x < grid.length;x++) {
    for (let y = 0;y < grid[0].length;y++) {
      if (grid[x][y] === '1') {
        dfs(x, y, grid)
        res++
      }
    }
  }

  return res
};
// @lc code=end

