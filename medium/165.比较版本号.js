/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1arr = version1.split('.')
  const v2arr = version2.split('.')

  let res = 0
  const len = Math.max(v1arr.length, v2arr.length)
  let i = 0

  while (i < len) {
    let v1 = v1arr[i]
    let v2 = v2arr[i]
    i += 1

    v1 = v1 ? Number(v1) : 0
    v2 = v2 ? Number(v2) : 0

    if (v1 === v2) continue

    res = v1 > v2 ? 1 : -1

    break
  }

  return res
};
// @lc code=end

