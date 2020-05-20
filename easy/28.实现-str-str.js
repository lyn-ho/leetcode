/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack == null || needle == null || haystack.length < needle.length) return -1

  if (needle.length === 0) return 0

  const lps = computeLPS(needle)

  let i = 0
  let j = 0

  while (i < haystack.length) {
    if (needle.charCodeAt(j) === haystack.charCodeAt(i)) {
      i++
      j++

      if (j === needle.length) {
        return i - j
      }
    } else {
      if (j === 0) {
        i++
      } else {
        j = lps[j - 1]
      }
    }
  }

  return -1
}

function computeLPS(needle) {
  const lps = new Array(needle.length)

  lps[0] = 0

  let i = 1
  let j = 0

  while (i < needle.length) {
    if (needle.charCodeAt(i) === needle.charCodeAt(j)) {
      j++
      lps[i] = j
      i++
    } else {
      if (j === 0) {
        lps[i] = 0
        i++
      } else {
        j = lps[j - 1]
      }
    }
  }

  return lps
}

// @lc code=end

