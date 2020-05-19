/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 *
 * 双指针
 *
 * 贪心
 *
 * 相同
 *  left++
 *  right--
 *
 * 不同
 *  删除左指针
 *    left++
 *    right
 *  删除右指针
 *    left
 *    right--
 */
var validPalindrome = function (s) {
  if (s.length < 3) return true

  let left = 0
  let right = s.length - 1

  while (left < right) {
    let c1 = s[left]
    let c2 = s[right]

    if (c1 === c2) {
      left++
      right--
    } else {
      return checkPalindrome(s, left, right - 1) || checkPalindrome(s, left + 1, right)
    }
  }
  return true
};

function checkPalindrome(s, left, right) {
  for (let i = left, j = right;i < j;++i, --j) {
    if(s[i] !== s[j]) return false
  }
  return true
}
// @lc code=end

