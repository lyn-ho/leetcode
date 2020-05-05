/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

/*
 * 以 n = 3, k = 3 为例
 *
 * 123, 132, 213, 231, 312, 321
 *
 * 1xx, 2xx, 3xx 都有 2! 个
 * 如果想要找的是第 3 个，直接跳到 2 开头，将 2 加入到结果
 * 问题缩小，我们不断重复上述的逻辑，直到第 n 个
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let nums = Array.from({length: n}).map((_, i) => i + 1)
  let result = ''

  while (n > 1) {
    // 阶乘得到除开头，可能的条数
    const facto = factorial(n - 1)

    // 计算的到开头的下标
    let i = Math.ceil(k / facto) - 1

    result += nums[i]

    // 将开头下标的踢出数组
    nums.splice(i, 1)

    // 缩小k 和 n
    k -= facto * i
    n -= 1
  }

  result += nums[0]

  return result
};

// 阶乘函数
function factorial(n, total = 1) {
  if (n === 1) return total
  // 尾递归
  return factorial(n - 1, n * total)
}
// @lc code=end

