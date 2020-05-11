/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1

  if (n === 1) return x

  if (n < 0) return 1 / myPow(x, -n)

  // n 为偶数， = pow(x^2, n / 2)
  // n 为奇数， = x * pow(x, n - 1)
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x, n - 1)
};
// @lc code=end

