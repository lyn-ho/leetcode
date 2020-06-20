/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let res = 0

  for (let i = 0, l = points.length;i < l;i++) {
    const map = new Map()

    for (let j = 0;j < l;j++) {
      if (j !== i) {
        const d = dis(points[i], points[j])
        if (map.has(d)) {
          map.set(d, map.get(d) + 1)
        } else {
          map.set(d, 1)
        }
      }
    }

    map.forEach((val, key) => {
      res += val * (val - 1)
    })
  }

  return res
};

function dis(p1, p2) {
  return (p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1])
}

// @lc code=end

