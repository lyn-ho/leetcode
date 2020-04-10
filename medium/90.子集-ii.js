/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * 回溯法
 * backtrack 解题公式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(list, tempList, nums, start) {
  list.push([...tempList])
  const len = nums.length
  for (let i = start;i < len;i++) {
    // 和78.subsets的区别在于这道题nums可以有重复
    // 因此需要过滤这种情况
    if (i > start && nums[i] === nums[i - 1]) continue
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1)
    tempList.pop()
  }
}

var subsetsWithDup = function(nums) {
  const list = []
  backtrack(list, [], nums.sort((a, b) => a - b), 0)
  return list
};
// @lc code=end

