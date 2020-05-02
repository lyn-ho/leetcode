/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0

  let count = 1
  let max = 1

  nums = [...new Set(nums)].sort((a, b) => a - b)
  const len = nums.length

  for (let i = 0;i < len - 1;i++) {
    if (nums[i + 1] - nums[i] === 1) {
      count++
    } else {
      if (count > max) {
        max = count
      }
      count = 1
    }
  }

  if(nums[len - 1] - nums[len - 2]===1 && count > max) max = count

  return max
};

// 复杂度 O(n^2)
// var longestConsecutive = function(nums) {
//   if (nums.length === 0) return 0

//   let count = 1
//   let max = 1

//   nums = [...new Set(nums)].sort((a, b) => a - b)
//   const len = nums.length

//   for (let i = 0;i < len - 1;i++) {
//     if (nums[i + 1] - nums[i] === 1) {
//       count++
//     } else {
//       if (count > max) {
//         max = count
//       }
//       count = 1
//     }
//   }

//   if(nums[len - 1] - nums[len - 2]===1 && count > max) max = count

//   return max
// };
// @lc code=end

