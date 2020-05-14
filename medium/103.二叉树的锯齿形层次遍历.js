/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []

  // BFS
  // isOdd 判断数据翻转
  // 最后判断 queue 是否为空， push null

  let items = []
  let levelNodes = []
  let isOdd = false

  let queue = [root, null]

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      levelNodes.push(node.val)

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    } else {
      isOdd && levelNodes.reverse()
      items.push(levelNodes)
      isOdd = !isOdd
      levelNodes = []

      if (queue.length) {
        queue.push(null)
      }
    }
  }

  return items
};
// @lc code=end

