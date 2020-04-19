/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const len1 = s1.length
  const len2 = s2.length

  if(len1 > len2) return false

  let map = {}
  for(let c of s1) {
    map[c] = map[c] ? map[c] + 1 : 1
  }

  let tmp = { ...map }
  let arr = []
  let res = false
  for(let c of s2) {

    if(map[c]) {
      arr.push(c)

      if(tmp[c] === 0) {
        const delIndex = arr.findIndex(a => a === c)
        for(let i = 0; i < delIndex; i++) {
          tmp[arr[i]] = tmp[arr[i]] + 1
        }
        arr = arr.slice(delIndex + 1)
      } else {
        tmp[c] = tmp[c] - 1
        if(arr.length === len1) {
          res = true
          break
        }
      }
    } else {
      tmp = { ...map }
      arr = []
    }
  }

  return res
};
// @lc code=end

