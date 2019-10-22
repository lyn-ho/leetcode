/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 将第 i 行变成第 n - i - 1 列
  const oMatrix = JSON.parse(JSON.stringify(matrix))
  const n = oMatrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][n - i - 1] = oMatrix[i][j]
    }
  }
}

// var rotate = function(matrix) {
//   // 时间复杂度 O(n^2) 空间复杂度 O(1)
//   // 先沿对角线翻转，后沿水平线翻转

//   const n = matrix.length
//   function swap(arr, [i, j], [m, n]) {
//     const temp = arr[i][j]
//     arr[i][j] = arr[m][n]
//     arr[m][n] = temp
//   }

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i; j++) {
//       swap(matrix, [i, j], [n - j - 1, n - i - 1])
//     }
//   }

//   for (let i = 0; i < n / 2; i++) {
//     for (let j = 0; j < n; j++) {
//       swap(matrix, [i, j], [n - i - 1, j])
//     }
//   }
// }
// @lc code=end
