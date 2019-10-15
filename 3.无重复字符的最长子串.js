/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const mapper = {}

  let res = 0
  let slidingWindow = []

  for (let c of s) {
    if (mapper[c]) {
      const delIndex = slidingWindow.findIndex((item) => item === c)

      for (let i = 0; i < delIndex; i++) {
        mapper[slidingWindow[i]] = false
      }

      slidingWindow = slidingWindow.slice(delIndex + 1).concat(c)
    } else {
      if (slidingWindow.push(c) > res) {
        res = slidingWindow.length
      }
    }
    mapper[c] = true
  }

  return res
}
// @lc code=end
