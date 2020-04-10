/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * 记录下”第一行和第一列是否全是0“这样的一个数据
    遍历除了第一行和第一列之外的所有的数据，如果是0，那就更新第一行第一列中对应的元素为0
    你可以把第一行第一列看成我们上面那种解法使用的m + n 数组。

    根据第一行第一列的数据，更新matrix
    最后根据我们最开始记录的”第一行和第一列是否全是0“去更新第一行和第一列即可
 */

var setZeroes = function(matrix) {
  if (matrix.length === 0) return matrix

  const m = matrix.length
  const n = matrix[0].length

  let firstRow = false
  let firstCol = false

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = matrix[i][j]

      if (item === 0) {
        if (i === 0) {
          firstRow = true
        }
        if (j === 0) {
          firstCol = true
        }
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (firstRow) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0
    }
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }

  return matrix
}

/**
 * 使用一个 m + n 的数组来表示每一行每一列是否”全部是 0“， 先遍历一遍去构建这样的 m + n 数组，然后根据这个 m + n 数组去修改 matrix 即可
 *  时间复杂度 O(m * n), 空间复杂度 O(m + n)
 */
// var setZeroes = function(matrix) {
//   if (matrix.length === 0) return matrix

//   const m = matrix.length
//   const n = matrix[0].length
//   const zeroes = Array(m + n).fill(false)

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       const item = matrix[i][j]

//       if (item === 0) {
//         zeroes[i] = true
//         zeroes[m + j] = true
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     if (zeroes[i]) {
//       matrix[i] = Array(n).fill(0)
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (zeroes[m + i]) {
//       for (let j = 0; j < m; j++) {
//         matrix[j][i] = 0
//       }
//     }
//   }

//   return matrix
// }
// @lc code=end
