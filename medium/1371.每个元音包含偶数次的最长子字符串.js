/*
 * @lc app=leetcode.cn id=1371 lang=javascript
 *
 * [1371] 每个元音包含偶数次的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 * 奇偶两个状态
 *
 * 5 位二进制来表示以 i 结尾的字符串中包含各个元音的奇偶性，0 表示偶数，1 表示奇数
 * a, e, i, o, u. 比如 10110 表示包含偶数个 a 和 o，奇数个 e，i 和 u。用 cur 来表示
 *
 *  如果两个数字奇偶性相同，那么相减一定是偶数
 *  如果两个数字奇偶性不同，那么相减一定是奇数
 *
 * 如果对两个二进制做异或，会对其每一位进行位运算，如果相同则为 0，否则为 1。和奇偶性相同为偶数，否则为奇数
 * 所以用 0 表示偶数，1 表示 奇数
 */
var findTheLongestSubstring = function(s) {
  const mapper = {
    a: 1,
    e: 2,
    i: 4,
    o: 8,
    u: 16
  }

  const len = s.length
  const seen = { 0: -1 }
  let res = 0
  let cur = 0

  for (let i = 0;i < len;i++) {
    if (s[i] in mapper) {
      cur = cur ^ mapper[s[i]]
    }

    if (cur in seen) {
      res = Math.max(res, i - seen[cur])
    } else {
      seen[cur] = i
    }
  }
  return res
};
// @lc code=end

