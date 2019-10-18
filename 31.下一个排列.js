/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 在有序数组中首尾指针不断交换位置即可实现reverse
    找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换
 */

function reverseRange(arr, i, j) {
  while (i < j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++
    j--
  }
}

var nextPermutation = function(nums) {
  if (nums === null || nums.length <= 1) return

  let i = nums.length - 2

  // 从后往前找到第一个降序的，相当于找到回溯点
  while (i > -1 && nums[i + 1] <= nums[i]) i--

  // 找到了就 swap
  if (i > -1) {
    let j = nums.length - 1
    // 找到从右起第一个大于 nums[i] 的，并将其和 nums[i] 进行交换
    // 因为如果交换的数字比 nums[i] 还有小肯定不符合题意
    while (nums[j] <= nums[i]) {
      j--
    }

    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    // ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // 最后只需要将剩下的元素从左到右，依次填入最小的元素保证是大于当前排列的最小值
  // [i + 1, nums.length - 1] 的元素进行反转
  reverseRange(nums, i + 1, nums.length - 1)
}
// @lc code=end
