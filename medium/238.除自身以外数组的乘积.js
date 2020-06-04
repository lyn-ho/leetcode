/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length

  const res = new Array(len)

  res[0] = 1
  for (let i = 1;i < len;i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }


  let r = 1
  for (let i = len - 1;i >= 0;i--) {
    res[i] = res[i] * r

    r *= nums[i]
  }

  return res
};
// var productExceptSelf = function (nums) {
//   const len = nums.length

//   const L = new Array(len)
//   const R = new Array(len)

//   const res = new Array(len)

//   L[0] = 1
//   for (let i = 1;i < len;i++) {
//     L[i] = L[i - 1] * nums[i - 1]
//   }

//   R[len - 1] = 1
//   for (let i = len - 2;i >= 0;i--) {
//     R[i] = R[i + 1] * nums[i + 1]
//   }

//   for (let i = 0;i < len;i++) {
//     res[i] = L[i] * R[i]
//   }

//   return res
// };
// @lc code=end

