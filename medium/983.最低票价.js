/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 *
 * 动态规划
 *
 */
var mincostTickets = function(days, costs) {
  const len = days.length

  if (!len) return 0

  const dp = [0]

  if (costs[1] < costs[0]) {
    // 测试用例问题 costs = [7, 2, 15]
    dp[len] = costs[1]
    let begin = days[0]
    for (let i = 1;i < len;i++) {
      if (days[i] - begin > 6) {
        begin = days[i]
        dp[len] += costs[1]
      }
    }
  } else {
    for (let i = 1;i <= len;i++) {
      dp[i] = dp[i - 1] + costs[0]
      let dis = 0
      for (let j = i - 1;j >= 1;j--) {
        dis = days[i - 1] - days[j - 1]

        if (dis <= 6) {
          dp[i] = Math.min(dp[j - 1] + costs[1], dp[i])
        } else if (dis <= 29) {
          dp[i] = Math.min(dp[j - 1] + costs[2], dp[i])
        }
      }
    }
  }

  return dp[len]
};
// @lc code=end

