/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(!num1.length || !num2.length) return '0'

  let cn = num1.length + num2.length
  let c = new Array(cn).fill(0)

  const len1 = num1.length
  const len2 = num2.length

  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; j++) {
      c[i + j + 1] += Number(num1[i]) * Number(num2[j])
    }
  }

  // 进位
  for(let i = cn - 1; i>= 0; i--) {
    let carry = Math.trunc(c[i] / 10)
    if(carry) {
      c[i - 1] += carry
    }
    c[i] = c[i] % 10
  }

  while(c[0] === 0) {
    c.shift()
  }

  return c.join('') || '0'
};
// @lc code=end

