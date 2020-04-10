/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 我们定义函数 S(i) ，它的功能是计算以 0（包括 0）开始加到 i（包括 i）的值。

    那么 S(j) - S(i - 1) 就等于 从 i 开始（包括 i）加到 j（包括 j）的值。

    我们进一步分析，实际上我们只需要遍历一次计算出所有的 S(i), 其中 i = 0,1,2....,n-1。 然后我们再减去之前的 S(k),其中 k = 0，1，i - 1，中的最小值即可。 因此我们需要 用一个变量来维护这个最小值，还需要一个变量维护最大值。

    复杂度分析
      时间复杂度： O(n) - n 是数组长度
      空间复杂度： O(1)
 */
// var maxSubArray = function(nums) {
//   const len = nums.length

//   let max = nums[0]
//   let min = 0
//   let sum = 0

//   for (let i = 0; i < len; i++) {
//     sum += nums[i]

//     if (sum - min > max) max = sum - min
//     if (sum < min) {
//       min = sum
//     }
//   }

//   return max
// }

/**
 * 分治法
 * 我们把数组nums以中间位置（m)分为左（left)右(right)两部分. 那么有， left = nums[0]...nums[m - 1] 和 right = nums[m + 1]...nums[n-1]

    最大子序列和的位置有以下三种情况：

    考虑中间元素nums[m], 跨越左右两部分，这里从中间元素开始，往左求出后缀最大，往右求出前缀最大, 保持连续性。
    不考虑中间元素，最大子序列和出现在左半部分，递归求解左边部分最大子序列和
    不考虑中间元素，最大子序列和出现在右半部分，递归求解右边部分最大子序列和
    分别求出三种情况下最大子序列和，三者中最大值即为最大子序列和。

    复杂度分析
      时间复杂度： O(nlogn) - n 是数组长度
      空间复杂度： O(1)
 */
// function helper(list, m, n) {
//   if (m === n) return list[m]

//   let sum = 0
//   let lmax = -Number.MAX_VALUE
//   let rmax = -Number.MAX_VALUE

//   const mid = ((n - m) >> 1) + m
//   const l = helper(list, m, mid)
//   const r = helper(list, mid + 1, n)

//   for (let i = mid; i >= m; i--) {
//     sum += list[i]
//     if (sum > lmax) lmax = sum
//   }

//   sum = 0

//   for (let i = mid + 1; i <= n; i++) {
//     sum += list[i]
//     if (sum > rmax) rmax = sum
//   }

//   return Math.max(l, r, lmax + rmax)
// }

// var maxSubArray = function(nums) {
//   return helper(nums, 0, nums.length - 1)
// }

/**
 * 动态规划
 *
 * 动态规划的难点在于找到状态转移方程，

    dp[i] - 表示到当前位置 i 的最大子序列和

    状态转移方程为： dp[i] = max(dp[i - 1] + nums[i], nums[i])

    初始化：dp[0] = nums[0]

    从状态转移方程中，我们只关注前一个状态的值，所以不需要开一个数组记录位置所有子序列和，只需要两个变量，

    currMaxSum - 累计最大和到当前位置i

    maxSum - 全局最大子序列和:

    currMaxSum = max(currMaxSum + nums[i], nums[i])
    maxSum = max(currMaxSum, maxSum)

    复杂度分析
      时间复杂度: O(n) - n 是数组长度
      空间复杂度: O(1)
 */

var maxSubArray = function(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  const len = nums.length

  let currMaxSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < len; i++) {
    currMaxSum = Math.max(currMaxSum + nums[i], nums[i])

    maxSum = Math.max(currMaxSum, maxSum)
  }

  return maxSum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// @lc code=end
