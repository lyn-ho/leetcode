/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (!x) return true

  let str = x.toString()
  let l = 0
  let r = str.length - 1

  while (l < r) {
    if(str[l++] !== str[r--]) return false
  }

  return true
};
// var isPalindrome = function(x) {
//   return x == (x || 0).toString().split('').reverse().join('')
// };
// @lc code=end

