/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)

  if (!wordSet.has(endWord)) return []
  
  wordSet.add(beginWord)

  const distanceMap = new Map()
  const wordMap = new Map()

  // BFS construct distanceMap and wordMap from end to start
  const queue = []
  const visited = new Set()

  // flag to check if we can reach start from end
  let reached = false

  queue.push(endWord)
  visited.add(endWord)

  let distance = 0
  distanceMap.set(endWord, distance)

  while (queue.length) {
    let size = queue.length
    distance++

    for (let i = 0;i < size;i++) {
      const word = queue.shift()

      for (let w of getNextWords(word, wordSet)) {
        // push into wordMap from start to end
        if (!wordMap.has(w)) wordMap.set(w, [])
        wordMap.get(w).push(word)

        if (visited.has(w)) continue
        if (w === beginWord) reached = true

        // put into distance map
        distanceMap.set(w, distance)

        queue.push(w)
        visited.add(w)
      }
    }
  }

  // short circuit if can not reach
  if (!reached) return []
  
  // DFS with path where distance -1
  const res = []
  dfs(res, [beginWord], beginWord, endWord, wordMap, distanceMap)

  return res
};

function getNextWords(word, wordSet) {
  const res = []

  for (let i = 0, l = word.length;i < l;i++) {
    let currentCode = word.charCodeAt(i)
    for (let c = 97;c <= 122;c++) {
      if (c !== currentCode) {
        const chars = word.split('')
        chars[i] = String.fromCharCode(c)
        let newWord = chars.join('')

        wordSet.has(newWord) && res.push(newWord)
      }
    }
  }

  return res
}

function dfs(res, tmpPath, word, endWord, wordMap, distanceMap) {
  if (word === endWord) {
    res.push([...tmpPath])
    return
  }

  for (let nextWord of wordMap.get(word)) {
    if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
      tmpPath.push(nextWord)
      dfs(res, tmpPath, nextWord, endWord, wordMap, distanceMap)
      tmpPath.pop()
    }
  }
}
// @lc code=end

