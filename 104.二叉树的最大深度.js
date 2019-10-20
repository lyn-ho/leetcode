/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

/**
 * 队列

    队列中用 Null(一个特殊元素)来划分每层，或者在对每层进行迭代之前保存当前队列元素的个数（即当前层所含元素个数）

    树的基本操作- 遍历 - 层次遍历（BFS）
 */
var maxDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1

  let cur = root
  const queue = [root, null]
  let depth = 1

  while ((cur = queue.shift()) !== undefined) {
    if (cur === null) {
      if (queue.length === 0) return depth

      depth++
      queue.push(null)
      continue
    }

    const l = cur.left
    const r = cur.right

    if (l) queue.push(l)
    if (r) queue.push(r)
  }

  return depth
}
// @lc code=end
