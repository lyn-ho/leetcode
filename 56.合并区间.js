/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * 先对数组进行排序，排序的依据就是每一项的第一个元素的大小。
    然后我们对数组进行遍历，遍历的时候两两运算（具体运算逻辑见下）
    判断是否相交，如果不相交，则跳过
    如果相交，则合并两项
 */

function intersected(a, b) {
  return !(a[0] > b[1] || a[1] < b[0])
}

function mergeTwo(a, b) {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
}

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length - 1; i++) {
    const cur = intervals[i]
    const next = intervals[i + 1]

    if (intersected(cur, next)) {
      intervals[i] = undefined
      intervals[i + 1] = mergeTwo(cur, next)
    }
  }

  return intervals.filter((p) => p)
}
// @lc code=end
