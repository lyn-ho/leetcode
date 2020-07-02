/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const n = matrix.length

  let low = matrix[0][0]
  let high = matrix[n - 1][n - 1]

  while (low <= high) {
    const midVal = low + ((high - low) >>> 1)
    const rank = getRankInMatrix(matrix, midVal)

    if (rank < k) {
      low = midVal + 1
    } else {
      high = midVal - 1
    }
  }

  return low
};

const getRankInMatrix = (matrix, midVal) => {
  const n = matrix.length

  let rank = 0
  let row = 0
  let col = n - 1

  while (row < n && col >= 0) {
    if (midVal >= matrix[row][col]) {
      rank += col + 1
      row++
    } else {
      col--
    }
  }
  return rank
}
// @lc code=end

