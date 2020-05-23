/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 滑动窗口
  // 扩张窗口，直到当前窗口包含了所有字符，此时 missingType === 0
  // 收缩窗口，并且只要不影响当前窗口包含所有字符，就一直收缩
  // 收缩带来产生最小串的可能，计算长度，与 minLen 比较
  // 左指针指向的字符，如果是目标字符，它会被舍弃，它的缺失个数 + 1

  if(t.length > s.length) return ''

  const len = s.length
  let startPoint = 0  // 结果字符串起始点
  let minLen = len  // 结果字符串长度

  const map = {}  // 表示目标字符串，和目标字符串对应个数
  let missingType = 0 // 表示缺失字符类型的个数

  for (let c of t) {
    if (!map[c]) {
      map[c] = 1
      missingType++
    } else {
      map[c]++
    }
  }

  let left = 0  // 滑动窗口左
  let right = 0   // 滑动窗口右
  let matched = false   // 是否匹配

  for (;right < len;right++) {
    let rightChar = s[right]

    if (map[rightChar] !== undefined) map[rightChar]--  // 是目标字符，对应字符缺失个数 -1
    if (map[rightChar] === 0) missingType-- // 缺失个数为 0，缺失类型个数 -1

    while (missingType === 0) { // 包含所有字符类型，一直收缩
      matched = true  // 标记匹配为真
      if (right - left + 1 < minLen) {  // 计算长度，取最小值
        minLen = right - left + 1
        startPoint = left
      }

      let leftChar = s[left]
      if (map[leftChar] !== undefined) map[leftChar]++  // 是目标字符，对应字符缺失个数 +1
      if (map[leftChar] > 0) missingType++  // 缺失个数 >0，缺失类型个数 +1
      left++  // 收缩窗口
    }
  }

  return matched ? s.substring(startPoint, startPoint + minLen) : ''
};
// @lc code=end

