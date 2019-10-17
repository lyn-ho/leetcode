/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
  * 使用快慢指针来记录遍历的坐标。

    开始时这两个指针都指向第一个数字

    如果两个指针指的数字相同，则快指针向前走一步

    如果不同，则两个指针都向前走一步

    当快指针走完整个数组后，慢指针当前的坐标加1就是数组中不同数字的个数

    如果是数据是无序的，就不可以用这种方式了，从这里也可以看出排序在算法中的基础性和重要性。
  */
var removeDuplicates = function(nums) {
  const len = nums.length

  let slow = 0

  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}
// @lc code=end
