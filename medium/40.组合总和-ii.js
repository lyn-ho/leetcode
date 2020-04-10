/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function backtrack(list, tempList, nums, remain, start) {
  if (remain < 0) return
  else if (remain === 0) return list.push([...tempList])

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue
    tempList.push(nums[i])
    backtrack(list, tempList, nums, remain - nums[i], i + 1)
    tempList.pop()
  }
}

var combinationSum2 = function(candidates, target) {
  const list = []
  backtrack(list, [], candidates.sort((a, b) => a - b), target, 0)
  return list
}
// @lc code=end
