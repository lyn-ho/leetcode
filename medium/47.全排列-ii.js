/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(list, nums, tempList, visited) {
  if (tempList.length === nums.length) return list.push([...tempList])

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue
    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue

    visited[i] = true

    tempList.push(nums[i])
    backtrack(list, nums, tempList, visited)
    visited[i] = false
    tempList.pop()
  }
}

var permuteUnique = function(nums) {
  const list = []
  backtrack(list, nums.sort((a, b) => a - b), [], [])
  return list
}
// @lc code=end
