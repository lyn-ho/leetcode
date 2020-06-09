/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const uf = new UnionFind(26)

  for (const e of equations) {
    if (e[1] === '=') uf.union(e.charCodeAt(0) - 97, e.charCodeAt(3) - 97)
  }

  for (const e of equations) {
    if(e[1] === '!' && uf.findRoot(e.charCodeAt(0) - 97) === uf.findRoot(e.charCodeAt(3) - 97))
      return false
  }

  return true
};

class UnionFind {
  constructor(num) {
    this.roots = new Array(num)
    this.ranks = new Array(num)

    for (let i = 0;i < num;i++) {
      this.roots[i] = -1
      this.ranks[i] = 0
    }
  }

  findRoot(x) {
    let root = x
    while (this.roots[root] !== -1) {
      root = this.roots[root]
    }

    return root
  }

  union(x, y) {
    let xRoot = this.findRoot(x)
    let yRoot = this.findRoot(y)

    if (xRoot === yRoot) {
      return
    }

    let xRank = this.ranks[xRoot]
    let yRank = this.ranks[yRoot]

    if (xRank < yRank) {
      this.roots[xRoot] = yRoot
    } else if (yRank < xRank) {
      this.roots[yRoot] = xRoot
    } else {
      this.roots[yRoot] = xRoot
      this.ranks[xRoot]++
    }
  }
}
// @lc code=end

