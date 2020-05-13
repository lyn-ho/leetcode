/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 *
 * 从一个节点开始，遍历其所有连接的节点，或者遍历所有同层的节点
 * 使用 visited 标记所有遍历过的节点
 * 当从一个新节点开始，数量 +1
 */
var findCircleNum = function(M) {
  if (!M || !M.length) return 0
  if (!M[0].length) return 0

  let numCircle = 0
  let rows = M.length
  let visited = new Array(rows).fill(false)
  let queue = []

  for (let i = 0;i < rows;i++) {
    if (visited[i]) continue
    queue.push(i)

    while (!!queue.length) {
      let cur = queue.pop()
      visited[cur] = true
      for (let j = 0;j < rows;j++) {
        if (M[cur][j] === 1 && !visited[j]) {
          queue.push(j)
        }
      }
    }
    numCircle++
  }

  return numCircle
};
// @lc code=end

