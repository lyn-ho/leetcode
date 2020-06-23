/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = ''
  let ca = 0

    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca
        sum += i >= 0 ? parseInt(a[i]) : 0
        sum += j >= 0 ? parseInt(b[j]) : 0
        res += sum % 2
        ca = Math.floor(sum / 2)
    }

    res += ca == 1 ? ca : "";
    return res.split('').reverse().join('')
};
// @lc code=end

