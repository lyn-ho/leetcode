/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0
  const stack = [-1]

  for (let i = 0, l = s.length;i < l;i++) {
    const c = s[i]

    if (c == '(') { // 左括号 索引入栈
      stack.push(i)
      continue
    }

    stack.pop() // 遇到右括号 出栈

    if (stack.length === 0) { // 栈为空，右括号匹配不到
      stack.push(i) // 将当前索引作为 ‘参照物’
    } else {  // 右括号找到匹配，计算有效的连续长度
      max = Math.max(max, i - stack[stack.length - 1])
    }
  }

  return max
};

// var longestValidParentheses = function(s) {
//   let max = 0
//   const len = s.length
//   const dp = new Array(len).fill(0)

//   for (let i = 1;i < len;i++) {
//     if (s[i] === ')') {
//       if (s[i - 1] === '(') {
//         if (i - 2 >= 0) {
//           dp[i] = dp[i - 2] + 2
//         } else {
//           dp[i] = 2
//         }
//       } else if (s[i - dp[i - 1] - 1] === '(') {
//         if (i - dp[i - 1] - 2 >= 0) {
//           dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
//         } else {
//           dp[i] = dp[i - 1] + 2
//         }
//       }
//     }
//     max = Math.max(max, dp[i])
//   }
//   return max
// };
// @lc code=end

