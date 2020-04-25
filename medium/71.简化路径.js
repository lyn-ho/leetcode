/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const ps = path.split('/')
  const tempPath = []

  for(let p of ps) {
    if(p && p === '..') {
      tempPath.pop()
    } else if(p && p !== '.') {
      tempPath.push(p)
    }
  }

  return `/${tempPath.join('/')}`
};
// @lc code=end

