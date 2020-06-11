/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const res = new Array(T.length).fill(0)

  const stack = []

  for (let i = T.length - 1;i >= 0;i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length && T[i] < T[stack[stack.length - 1]]) {
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }

  return res
};
// @lc code=end

