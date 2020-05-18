/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 动态规划
 *
 * 多阶段，解决一个问题有多个步骤
 * 最优解，最优子结构
 *
 * 三个概念
 *  重复子问题：因为重复计算，所以需要‘空间换时间’，记录子问题的最优解
 *  最优子结构：规模较大的问题的最优解，由各个子问题的最优解得到
 *  无后效性
 *
 * 关键步骤
 *  设计状态
 *  推导状态转移方程：通常是由问题本身决定
 *
 * 两个方向
 *  自顶向下：即‘递归 + 记忆化’
 *  自底向上：即‘递归’，从一个最小的问题开始，逐步得到最终规模问题的解
 *
 * max = Math.max(max * nums[i], nums[i])
 * min = Math.min(min * nums[i], nums[i])
 * 当出现负数时， max 和 min 交换再进行下一步
 */
var maxProduct = function (nums) {
  const len = nums.length
  let res = -Infinity
  let max = 1
  let min = 1 // 由于负数存在，需要维护当前最小值

  for (let i = 0;i < len;i++) {
    if (nums[i] < 0) {
      let tmp = max
      max = min
      min = tmp
    }
    max = Math.max(max * nums[i], nums[i])
    min = Math.min(min * nums[i], nums[i])

    res = Math.max(res, max)
  }

  return res
};
// @lc code=end

