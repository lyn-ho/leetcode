/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/**
 * 二分查找

    正负数的判断中，这样判断更简单。
 */

var divide = function(dividend, divisor) {
  if (divisor === 1) return dividend

  const isNegative = dividend > 0 !== divisor > 0

  const MAX_INTEGER = Math.pow(2, 31)

  const res = helper(Math.abs(dividend), Math.abs(divisor))

  if (res > MAX_INTEGER - 1 || res < -MAX_INTEGER) {
    return MAX_INTEGER - 1
  }

  return isNegative ? -res : res
}

function helper(dividend, divisor) {
  if (dividend <= 0) return 0
  if (dividend < divisor) return 0

  let acc = 2 * divisor
  let count = 1

  while (dividend - acc > 0) {
    acc += acc
    count += count
  }

  const last = dividend - Math.floor(acc / 2)

  return count + helper(last, divisor)
}

// @lc code=end
