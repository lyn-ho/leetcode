/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Map()
  const cols = new Map()
  const boxes = new Map()

  for (let i = 0;i < 9;i++) {
    rows.set(i, new Map)
    cols.set(i, new Map)
    boxes.set(i, new Map)
  }

  for (let i = 0;i < 9;i++) {
    for (let j = 0;j < 9;j++) {
      let num = board[i][j]
      if (num !== '.') {
        num = Number(num)
        let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3)

        if (rows.get(i).get(num)) return false
        rows.get(i).set(num, 1)

        if (cols.get(j).get(num)) return false
        cols.get(j).set(num, 1)

        if (boxes.get(boxIndex).get(num)) return false
        boxes.get(boxIndex).set(num, 1)
      }
    }
  }

  return true
};
// @lc code=end

