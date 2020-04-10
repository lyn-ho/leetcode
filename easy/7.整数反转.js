/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = x > 0 ? 1 : -1

  const str = Math.abs(x).toString()
  const rev = flag * str.split('').reverse().join('')

  return rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31) ? 0 : rev
};
// @lc code=end

