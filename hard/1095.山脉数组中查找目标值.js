/*
 * @lc app=leetcode.cn id=1095 lang=javascript
 *
 * [1095] 山脉数组中查找目标值
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let leftIndex = 0;
  let rightIndex = mountainArr.length() - 1;
  let midIndex

  while (leftIndex + 1 < rightIndex) {
    midIndex = leftIndex + ((rightIndex - leftIndex) >>> 1)

    if (mountainArr.get(midIndex) > mountainArr.get(midIndex - 1)) {
      leftIndex = midIndex
    } else {
      rightIndex = midIndex
    }
  }

  // 找峰顶
  const peakIndex = mountainArr.get(rightIndex) > mountainArr.get(leftIndex) ? rightIndex : leftIndex

  // 二分查找
  const index = binSearch(mountainArr, 0, peakIndex, target, true)

  if(index !== -1) return index

  return binSearch(mountainArr, peakIndex + 1, mountainArr.length() - 1, target, false)
};

function binSearch(mountainArr, leftIndex, rightIndex, target, asc) {
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + ((rightIndex - leftIndex) >>> 1)

    let mid = mountainArr.get(midIndex)

    if (mid === target) {
      return midIndex
    }

    if (mid < target) {
      leftIndex = asc ? midIndex + 1 : leftIndex
      rightIndex = asc ? rightIndex : midIndex - 1
    } else {
      rightIndex = asc ? midIndex - 1 : rightIndex
      leftIndex = asc ? leftIndex : midIndex + 1
    }
  }

  return -1
}

// @lc code=end

