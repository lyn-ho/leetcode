/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 若无进位 结果直接返回  123 => 124
  // 若有进位 一直往前遍历到无进位的位置 返回结果  129 => 130
  // 一直进位到最前方 多出一位,首位为1 其他位为0  999 => 1000

  // 时间复杂度 O(n)
  const len = digits.length

  for (let i = len - 1;i >= 0;i--) {
    digits[i]++
    digits[i] = digits[i] % 10

    if(digits[i] !== 0) return digits
  }

  digits = new Array(len + 1).fill(0)
  digits[0] = 1
  return digits
};
// @lc code=end

