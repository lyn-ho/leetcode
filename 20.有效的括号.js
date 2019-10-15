/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const match = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  for (let v of s) {
    if (['(', '[', '{'].indexOf(v) > -1) {
      stack.push(v)
    } else {
      const peak = stack.pop()

      if (v !== match[peak]) {
        return false
      }
    }
  }

  return stack.length === 0
}
// @lc code=end
