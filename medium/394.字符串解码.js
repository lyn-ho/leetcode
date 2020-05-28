/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  // 栈
  let str = ''
  // 字符串栈
  let strStack = []
  let multi = ''
  // 对应重复次数栈
  let multiStack = []

  for (let c of s) {
    if (c === '[') {
      multiStack.push(multi)
      strStack.push(str)
      multi = ''
      str = ''
    } else if (c === ']') {
      let curMulti = multiStack.pop()

      str = str.repeat(curMulti)

      let lastStr = strStack.pop()

      str = lastStr + str
    } else if (c >= '0' && c <= '9') {
      multi += c
    } else {
      str += c
    }
  }

  return str
};
// var decodeString = function(s) {
//   // 正则
//   const reg = /(\d+)\[(\w+)]/g

//   // str.replace(regexp|substr, newSubStr|function)
//   const res = s.replace(reg, (match, p1, p2) => p2.repeat(p1))

//   return reg.test(res) ? decodeString(res) : res
// };
// @lc code=end

