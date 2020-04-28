/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * 快排
 */

// 性能问题
// var sortArray = function(nums) {
//   if (nums.length <= 1) return nums

//   let pivotIndex = Math.floor(nums.length / 2)  // 基准位置
//   let pivot = nums.splice(pivotIndex, 1)[0]

//   let left = []
//   let right = []

//   const len = nums.length
//   for (let i = 0;i < len;i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i])
//     } else {
//       right.push(nums[i])
//     }
//   }

//   return [...sortArray(left), pivot, ...sortArray(right)]
// };

function quickSort(nums, start, end) {
  if (start >= end) return

  const pivotIndex = start + ((end - start) >>> 1)
  const pivot = nums[pivotIndex]

  let i = start
  let j = end
  while (i <= j) {
    while (nums[i] < pivot) i++;
    while (nums[j] > pivot) j--;

    if (i <= j) {
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      i++
      j--
    }
  }

  quickSort(nums, start, j)
  quickSort(nums, i, end)
}

var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)

  return nums
}

// @lc code=end

