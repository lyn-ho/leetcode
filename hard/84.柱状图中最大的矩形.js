/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 单调栈优化 O(n)
  if (!heights || !heights.length) return 0

  const len = heights.length
  let max = 0
  let stack = new Array(len)
  let top = -1

  for (let idx = 0;idx < len;idx++) {
    while (top !== -1 && heights[stack[top]] > heights[idx]) {
      let popIdx = stack[top--]

      let left = top === -1 ? 0 : stack[top] + 1

      max = Math.max(max, (idx - left) * heights[popIdx])
    }

    if (top !== -1 && heights[idx] === heights[stack[top]]) {
      stack[top] = idx
    } else {
      stack[++top] = idx
    }
  }

  while (top !== -1) {
    let popIdx = stack[top--]

    let left = top === -1 ? 0 : stack[top] + 1

    max = Math.max(max, (len - left) * heights[popIdx])
  }

  return max
};

// var largestRectangleArea = function (heights) {
//   // 单调栈 O(n)
//   if (!heights || !heights.length) return 0

//   const len = heights.length
//   let max = 0
//   let stack = []

//   for (let idx = 0;idx < len;idx++) {
//     while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[idx]) {
//       let popIdx = stack.pop()

//       while (stack.length > 0 && heights[stack[stack.length - 1]] === heights[popIdx]) {
//         stack.pop()
//       }

//       let left = stack.length === 0 ? 0 : stack[stack.length - 1] + 1
//       let right = idx

//       max = Math.max(max, (right - left) * heights[popIdx])
//     }

//     stack.push(idx)
//   }

//   while (stack.length > 0) {
//     let popIdx = stack.pop()

//     let left = stack.length === 0 ? 0 : stack[stack.length - 1] + 1

//     max = Math.max(max, (len - left) * heights[popIdx])
//   }

//   return max
// };

// var largestRectangleArea = function (heights) {
//   // 暴力 O(n^2)
//   if (!heights || !heights.length) return 0

//   const len = heights.length
//   let max = 0

//   for (let i = 0;i < len;i++) {
//     let l = i
//     let r = i

//     for (;l >= 0 && heights[l] >= heights[i];l--);  // 左边界
//     for (;r < len && heights[r] >= heights[i];r++); // 右边界

//     max = Math.max(max, (r - l - 1) * heights[i])
//   }

//   return max
// };
// @lc code=end

