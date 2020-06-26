/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const len = points.length

  if (len <= 2) return len
  
  let count = 2
  let same = 0

  for (let i = 0;i < len;i++) {
    const p1 = points[i]

    let max = 0

    const map = new Map()

    for (let j = 0;j < len;j++) {
      if (i !== j) {
        const p2 = points[j]

        if (isSamePoint(p1, p2)) {
          same++
        } else {
          const arg = getLinerFunction(p1, p2)
          if (!map.has(arg)) {
            map.set(arg, 2)
          } else {
            map.set(arg, map.get(arg) + 1)
          }
        }
      }
    }

    map.forEach(arg => max = Math.max(max, arg))

    if (max) {
      max += same
    } else {
      return len
    }

    same = 0
    count = Math.max(count, max)
  }

  return count
};

function getLinerFunction(p1, p2) {
  const maxInt = 0xffffff

  const k = ((p1[1] - p2[1]) % maxInt * maxInt) / (p1[0] - p2[0])
  const b = p1[1] - k * p1[0]
  return `${k}-${b}`
}

function isSamePoint(p1, p2) {
  return (p1[0] === p2[0]) && (p1[1] === p2[1])
}

// @lc code=end

