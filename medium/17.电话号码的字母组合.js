/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 *
 * 回溯
 * 递归
 */
var letterCombinations = function(digits) {
  if (!digits) return []

  const len = digits.length
  const keyMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const result = []

  function gen(i, str) {
    if (i === len) {
      result.push(str)
      return
    }

    const temp = keyMap[digits[i]]
    for (let j = 0;j < temp.length;j++) {
      gen(i + 1, str + temp[j])
    }
  }

  gen(0, '')
  return result
};
// @lc code=end

