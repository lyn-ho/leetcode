/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 回溯法
 */

function backtrack(list, tempList, nums, remain, start) {
  if (remain < 0) return
  else if (remain === 0) return list.push([...tempList])

  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, remain - nums[i], i)
    tempList.pop()
  }
}

var combinationSum = function(candidates, target) {
  const list = []
  backtrack(list, [], candidates.sort((a, b) => a - b), target, 0)
  return list
}
// @lc code=end
