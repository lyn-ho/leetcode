/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

/*

if (s[i] === s[j] && dp[i+1][j-1]) {
  dp[i][j] = true
}

*/
/**
 *
 * 如果一个字符串是回文串，那么在它左右分别加上一个相同的字符，那么它一定还是一个回文串
 * 如果一个字符串不是回文串，或者在回文串左右分别加不同的字符，得到的一定不是回文串
 */

var longestPalindrome = function(s) {
  if (!s || s.length === 0) return ''

  let res = s[0]

  const dp = []

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = []

    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true
      else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }

  return res
}

// var longestPalindrome = function(s) {
//   if (!s || s.length === 0) return ''

//   const len = s.length
//   let res = s[0]

//   for (let i = 0; i < len; i++) {
//     let j = 1
//     let tmpStr1 = ''
//     let tmpStr2 = ''

//     if (s[i + 1] && s[i] === s[i + 1]) {
//       const doubleStr = `${s[i]}${s[i + 1]}`
//       res = res.length > doubleStr.length ? res : doubleStr
//     }

//     tmpStr1 = s[i]

//     while (s[i - j] && s[i + j] && s[i - j] === s[i + j]) {
//       tmpStr1 = s[i - j] + tmpStr1 + s[i + j]
//       j++
//     }

//     j = 1
//     while (s[i - j] && s[i + j - 1] && s[i - j] === s[i + j - 1]) {
//       tmpStr2 = s[i - j] + tmpStr2 + s[i + j - 1]
//       j++
//     }

//     const tmpStr = tmpStr1.length > tmpStr2.length ? tmpStr1 : tmpStr2
//     res = res.length > tmpStr.length ? res : tmpStr
//   }

//   return res
// }

// @lc code=end
