/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * 动态规划
 * 子问题
 *
 * dp[i] 表示 i块钱 ，所有的组成数
 * 不可取第 j 个硬币，组成数 = dp[i]
 * 可取第 j 个硬币，组成数 = dp[i] + dp[i - coins[j]]
 */
var change = function(amount, coins) {
  if (amount === 0) return 1

  const dp = [1].concat(Array(amount).fill(0))

  // 遍历硬币数组，所有硬币都需要尝试
  for (let j = 0;j < coins.length;j++) {
    // 每种硬币都可以投多次
    for (let i = 1;i < amount + 1;i++) {
      if (i - coins[j] >= 0) {
        // 累加前 i - coins[j] 的次数
        dp[i] = dp[i] + dp[i - coins[j]]
      }
    }
  }

  return dp[dp.length - 1]
};
// @lc code=end

