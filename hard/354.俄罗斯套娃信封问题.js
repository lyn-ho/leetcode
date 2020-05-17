/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 *
 * 先以 w 升序排序
 * 后若 w 相同，以 h 降序排序
 *
 * 把所有的 h 作为一个数组，在这个数组上计算 LIS（最长递增子序列）
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length < 2) return envelopes.length

  // 排序
  envelopes.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0])

  let heights = envelopes.map(envelope => envelope[1])

  return lis(heights)
};

function lis(heights) {
  const len = heights.length
  let dp = Array.from({length: len}).fill(1)

  for (let i = 1;i < len;i++) {
    for (let j = 0;j < i;j++) {
      if (heights[j] < heights[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let max = 0

  for (let i = 0;i < len;i++) {
    max = max >= dp[i] ? max : dp[i]
  }

  return max
}
// @lc code=end

