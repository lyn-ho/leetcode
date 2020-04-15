/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 *
 * 队列
 * BFS
 * 注意 push null 的时候，判断当前队列是否为空，不然会无限循环
 */
var levelOrder = function(root) {
  if(!root) return []

  const items = []
  const queue = [root, null]
  let levelNodes = []

  while (queue.length > 0) {
    const node = queue.shift()

    if (node) {
      levelNodes.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    } else {
      items.push(levelNodes)
      levelNodes = []
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }
  return items
};
// @lc code=end

