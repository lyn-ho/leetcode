/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let min = 1
  let max = Math.max(...piles)

  while (min < max) {
    let mid = (min + max) >> 1
    canEat(piles, H, mid) ? (max = mid) : (min = mid + 1)
  }
  return min
};

function canEat(piles, H, K) {
  for (let pile of piles) {
    H -= Math.ceil(pile / K)
    if(H < 0) return false
  }
  return true
}
// @lc code=end

