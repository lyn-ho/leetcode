/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 类似快排
 * 选取 pivot ，把大于 pivot 的元素移到 pivot 之前，这样 pivot 位置就是 pivot index 最大的元素
 * 只要找到当前 pivot 的位置是否是在第 k 大的位置，如果是，找到第 k 大的数直接返回
 * 
 * 选取 pivot index = left + ((right - left) >>> 1)
 * 根据 pivot 做分区，把小于 pivot 的移到左边
 * 得到 pivot 的位置 index， 比较 pivot index 和 k
 *  index === len-k 直接返回结果
 *  index < len-k 说明在 index 右边，继续找数组区间 [index + 1, right]
 *  index > len-k 说明在 index 左边，继续找数组区间 [left, index - 1]
 */
var findKthLargest = function(nums, k) {
  const len = nums.length
  if (len < k) return -1

  return select(nums, 0, len - 1, len - k)
};

function select(nums, left, right, k) {
  if (left === right) return nums[right]

  let pivotIndex = left + ((right - left) >>> 1)

  // 分区，将小于 pivot 的数移到 pivotIndex 的左边
  let pos = partition(nums, left, right, pivotIndex)

  if (pos === k) {
    return nums[pos]
  } else if (pos > k) {
    return select(nums, left, pos - 1, k)
  } else {
    return select(nums, pos + 1, right, k)
  }
}

function partition(nums, left, right, pivotIndex) {
  const pivot = nums[pivotIndex]

  swap(nums, right, pivotIndex)

  let pos = left

  for (let i = left;i <= right;i++) {
    if (nums[i] < pivot) {
      swap(nums, i, pos++)
    }
  }

  swap(nums, right, pos)

  return pos
}

function swap(nums, i, j) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
// @lc code=end

