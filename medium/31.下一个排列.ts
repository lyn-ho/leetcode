/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums === null || nums.length < 2) return

  let i = nums.length - 2

  while (i > -1 && nums[i + 1] <= nums[i]) i--

  if (i > -1) {
    let j = nums.length - 1

    while (nums[j] <= nums[i]) j--

    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  reverse(nums, i + 1, nums.length - 1)
};

function reverse(arr: number[], i: number, j: number): void {
  while (i < j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++
    j--
  }
}
// @lc code=end

