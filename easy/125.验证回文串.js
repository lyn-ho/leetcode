/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(c) {
  const code = c.charCodeAt(0)
  const isDigit = code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)

  const isChar = code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)

  return isDigit || isChar
}

var isPalindrome = function(s) {
  s = s.toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isValid(s[left])) {
      left++
      continue
    }

    if (!isValid(s[right])) {
      right--
      continue
    }

    if (s[left] === s[right]) {
      left++
      right--
    } else {
      break
    }
  }

  return right <= left
}
// @lc code=end
