/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 动态规划 dp[n] = max(dp[n - 1], dp[n - 2] + num)

  const len = nums.length

  if (len === 0) return 0
  if (len === 1) return nums[0]

  let n1 = nums[0]
  let n2 = Math.max(nums[0], nums[1])

  for (let i = 2;i < len;i++) {
    let tmp = n2
    n2 = Math.max(n1 + nums[i], n2)
    n1 = tmp
  }

  return n2
};
// @lc code=end

