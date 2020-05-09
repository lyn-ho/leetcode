/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * 二分法
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0
  if (x === 1) return 1

  let l = 1
  let r = x

  while (l < r) {
    let mid = (l + r + 1) >> 1

    if (x / mid === mid) {
      return mid
    } else if (x / mid > mid) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  return l
};

// @lc code=end

