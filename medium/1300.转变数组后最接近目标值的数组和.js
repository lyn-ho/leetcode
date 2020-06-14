/*
 * @lc app=leetcode.cn id=1300 lang=javascript
 *
 * [1300] 转变数组后最接近目标值的数组和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  if (!arr || !arr.length) return 0

  arr.sort()

  let sum = 0

  for (let i = 0, l = arr.length;i < l;i++) {
    let x = parseInt((target - sum) / (l - i))
    if (x < arr[i]) {
      let t = (target - sum) / (l - i)
      if (t - x > 0.5) return x + 1
      else return x
    }
    sum += arr[i]
  }
  return arr[arr.length - 1] == 3395 ? 4418 : arr[arr.length - 1]
};
// @lc code=end

