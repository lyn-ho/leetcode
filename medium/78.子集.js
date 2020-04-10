/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(list, tempList, nums, start) {
  list.push([...tempList])

  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1)
    tempList.pop()
  }
}

var subsets = function(nums) {
  const list = []
  backtrack(list, [], nums, 0)
  return list
}
// @lc code=end
