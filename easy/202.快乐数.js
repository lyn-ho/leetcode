/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set()
  let sum = 0
  n = (n || 0).toString()

  while (sum !== 1) {
    sum = 0
    for (let i of n) {
      sum += i * i
    }
    n = sum.toString()

    if (set.has(sum)) return false
    set.add(sum)
  }

  return true
};
// @lc code=end

