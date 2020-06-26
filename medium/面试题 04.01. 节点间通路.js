/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function(n, graph, start, target) {
  if (start === target) return true

  const set = new Set([start])
  let count = 1

  while (true) {
    for (let item of graph) {
      if (set.has(item[0])) {
        if (item[1] === target) return true
        set.add(item[1])
      }
    }
    if (set.size > count) {
      count = set.size
    } else {
      return false
    }
  }
};
