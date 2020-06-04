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
  // str, strStack, multi, multiStack
  // 遍历字符串 s ，获取字符 c
  //  当 c in ['0'-'9'], 拼接到重复数量 multi ，用于倍数计算
  //  当 c in ['a'-'z','A'-'Z']，拼接到 str
  //  当 c === '[' 将 multi 和 str 入栈，并置空
  //   str 入栈，用于发现对应 ']' 后的拼接操作
  //   multi 入栈，用于发现对应 ']' 后，multi * [...]
  //  单 c === ']' , strStack 出栈，拼接字符串 res = lastStr + curMulti * str
  //   lastStr 上一个 '[' 到当前 '[' 的字符串
  //   curMulti 当前 '[' 到 ']' 字符串重复的倍数 multiStack.pop()
  //  返回 str

  // 时间复杂度 O(n)

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

