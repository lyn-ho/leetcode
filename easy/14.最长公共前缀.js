/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''

  let res = ''

  for (let i = 0, l1 = strs[0].length;i < l1;i++) {
    for (let j = 0, l2 = strs.length;j < l2;j++) {
      if(strs[j][i] !== strs[0][i]) return res
    }
    res += strs[0][i]
  }

  return res
};
// @lc code=end

