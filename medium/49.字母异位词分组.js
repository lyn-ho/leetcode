/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**
 * 一个简单的解法就是遍历数组，然后对每一项都进行排序，然后将其添加到 hashTable 中，最后输出 hashTable 中保存的值即可。

    这种做法空间复杂度 O(n)， 假设排序算法用的快排，那么时间复杂度为 O(n * klogk), n 为数组长度，k 为字符串的平均长度
 */
// var groupAnagrams = function(strs) {
//   const hash = {}

//   function sort(str) {
//     return str
//       .split('')
//       .sort()
//       .join('')
//   }

//   for (let str of strs) {
//     const key = sort(str)

//     if (!hash[key]) {
//       hash[key] = [str]
//     } else {
//       hash[key].push(str)
//     }
//   }

//   return Object.values(hash)
// }

/**
 * 建立一个 26 长度的 counts 数组
 * （如果区分大小写，我们可以建立 52 个，如果支持其他字符依次类推）。
 *  然后我们给每一个字符一个固定的数组下标，然后我们只需要更新每个字符出现的次数。
 *  最后形成的 counts 数组如果一致，则说明他们可以通过 交换顺序得到。
 *  这种算法空间复杂度 O(n), 时间复杂度 O(n * k), n 为数组长度，k 为字符串的平均长度.
 */
var groupAnagrams = function(strs) {
  let counts = []
  const hash = {}

  for (let str of strs) {
    counts = Array(26).fill(0)

    for (let c of str) {
      counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const key = counts.join('')

    if (!hash[key]) {
      hash[key] = [str]
    } else {
      hash[key].push(str)
    }
  }

  return Object.values(hash)
}
// @lc code=end
