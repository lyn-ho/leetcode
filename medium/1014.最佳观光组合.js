/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let res = 0
  let max = A[0] + 0

  for (let i = 1, l = A.length;i < l;i++) {
    res = Math.max(res, max + A[i] - i)
    max = Math.max(max, A[i] + i)
  }

  return res
};
// @lc code=end

