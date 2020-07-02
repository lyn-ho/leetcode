function kthSmallest(matrix: number[][], k: number): number {
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

function getRankInMatrix(matris: number[][], midVal: number): number {
  const n = matris.length

  let rank = 0
  let row = 0
  let col = n - 1

  while (row < n && col >= 0) {
    if (midVal >= matris[row][col]) {
      rank += col + 1
      row++
    } else {
      col--
    }
  }
  return rank
}
