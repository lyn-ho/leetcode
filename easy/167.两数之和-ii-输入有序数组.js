/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * 使用 map 记录已遍历元素 `value => index + 1`
 * 如果 target 减去当前数组中的值，作为 key 获得 map 的值不为 undefined 则返回 [map[target - num], i + 1]
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = {}
  const len = numbers.length

  for (let i = 0;i < len;i++) {
    const num = numbers[i]

    if (map[target - num] !== undefined) {
      return [map[target - num], i + 1]
    }

    map[num] = i + 1
  }

  return []
};
// @lc code=end

