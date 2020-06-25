/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict)

  const len = s.length

  const dp = new Array(len + 1).fill(false)

  dp[0] = true
  for (let i = 1; i <= len; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[i] == true) break
      if (dp[j] == false) continue
      const word = s.slice(j, i)
      if (wordSet.has(word) && dp[j] == true) {
        dp[i] = true
        break
      }
    }
  }
  return dp[s.length]
};
// @lc code=end

