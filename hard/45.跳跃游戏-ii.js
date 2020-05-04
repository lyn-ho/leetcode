/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 贪心算法
 *
 * 重点不在于判断当前位置跳几步，而是要记录在当前位置可以到达的范围内
 * 下一跳可以到达的最远位置
 */
var jump = function(nums) {
  const len = nums.length

  let jumpCount = 0
  // left 记录当前位置可到达范围的左边界
  // right 记录当前位置可到达的右边界
  let left = 0, right = 0

  while (right < len - 1) {
    let maxBound = right
    for (let i = left;i <= right;i++) {
      maxBound = Math.max(nums[i] + i, maxBound)
    }

    left = right + 1
    right = maxBound
    jumpCount++
  }

  return jumpCount
};
// @lc code=end

