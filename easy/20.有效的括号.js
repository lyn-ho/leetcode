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
/**
 * 使用栈,遍历输入字符串

    如果当前字符为左半边括号时，则将其压入栈中

    如果遇到右半边括号时，分类讨论：

    1）如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环

    2）若此时栈为空，则直接返回false

    3）若不为对应的左半边括号，反之返回false
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
