/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/**
 * 用一个hashmap来建立字符和其出现位置之间的映射。

    维护一个滑动窗口，窗口内的都是没有重复的字符，去尽可能的扩大窗口的大小，窗口不停的向右滑动。

    （1）如果当前遍历到的字符从未出现过，那么直接扩大右边界；

    （2）如果当前遍历到的字符出现过，则缩小窗口（左边索引向右移动），然后继续观察当前遍历到的字符；

    （3）重复（1）（2），直到左边索引无法再移动；

    （4）维护一个结果res，每次用出现过的窗口大小来更新结果res，最后返回res获取结果。

      用一个mapper记录出现过并且没有被删除的字符
      用一个滑动窗口记录当前index开始的最大的不重复的字符序列
      用res去记录目前位置最大的长度，每次滑动窗口更新就去决定是否需要更新res
 */
var lengthOfLongestSubstring = function(s) {
  const mapper = {}

  let res = 0
  let slidingWindow = []

  for (let c of s) {
    if (mapper[c]) {
      const delIndex = slidingWindow.findIndex((item) => item === c)

      for (let i = 0; i < delIndex; i++) {
        mapper[slidingWindow[i]] = false
      }

      slidingWindow = slidingWindow.slice(delIndex + 1).concat(c)
    } else {
      if (slidingWindow.push(c) > res) {
        res = slidingWindow.length
      }
    }
    mapper[c] = true
  }

  return res
}
// @lc code=end
