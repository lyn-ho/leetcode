/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
  if (K === 0) return 1.0

  let dp = Array.from({ length: K + W + 1 }).fill(0)

  for (let i = K;i <= N && i < K + W;i++) {
    dp[i] = 1.0
  }

  dp[K - 1] = 1.0 * Math.min(N - K + 1, W) / W

  for (let i = K - 2;i >= 0;i--) {
    // dp[x] = (dp[x + 1] + dp[x + 2] + ... + dp[x + W]) / W
    // dp[x + 1] - dp[x] = (dp[x + W + 1] - dp[x + 1]) / W
    dp[i] = dp[i + 1] - (dp[i + W + 1] - dp[i + 1]) / W
  }

  return dp[0]
};
// @lc code=end

