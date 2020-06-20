/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // p.charAt(j) === s.charAt(i) => dp[i][j] = dp[i - 1][j - 1]
  // p.charAt(j) === '.' => dp[i][j] = dp[i - 1][j - 1]
  // p.charAt(j) === '* =>
  //    p.chartAt(j - 1) === s.charAt(i) => dp[i][j] = dp[i][j - 2]
  //    p.charAt(i - 1) === s.charAt(i) || p.charAt(i - 1) === '.'
  //      => dp[i][j] = dp[i - 1][j]
  //      => || dp[i][j] = dp[i][j - 1]
  //      => || dp[i][j] = dp[i][j - 2]

  if (s == null || p == null) return false

  const len1 = s.length
  const len2 = p.length

  let dp = new Array(len1 + 1)

  for (let i = 0;i < len1 + 1;i++) {
    dp[i] = new Array(len2 + 1).fill(false)
  }

  dp[0][0] = true

  for (let j = 1;j < len2 + 1;j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1;i < len1 + 1;i++) {
    for (let j = 1;j < len2 + 1;j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[len1][len2]
};
// @lc code=end

