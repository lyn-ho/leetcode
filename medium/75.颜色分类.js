/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  // left 下标 表示 0 的右边界 nums[idx < left] = 0 初始 left = 0
  // right 下标 表示 2 的左边界 nums[idx > right] = 2 初始 right = nums.length - 1
  // curr 当前元素下标 初始 curr = 0
  // 递增 curr 到 curr <= right 终止

  // 时间复杂度 O(n)

  let left = 0
  let right = nums.length - 1
  let curr = 0

  while (curr <= right) {
    if (nums[curr] === 0) {
      // 交换 left 和 curr
      // left++, curr++
      [nums[curr], nums[left]] = [nums[left], nums[curr]]
      curr++
      left++
    } else if (nums[curr] === 2) {
      // 交换 right 和 curr
      // right--
      [nums[curr], nums[right]] = [nums[right], nums[curr]]
      right--
    } else {
      curr++
    }
  }
}

// function swap(nums, i, j) {
//   const temp = nums[i]
//   nums[i] = nums[j]
//   nums[j] = temp
// }

// var sortColors = function(nums) {
//   const len = nums.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - i; j++) {
//       if (nums[j] < nums[j - 1]) {
//         swap(nums, j - 1, j)
//       }
//     }
//   }
// }
// @lc code=end
