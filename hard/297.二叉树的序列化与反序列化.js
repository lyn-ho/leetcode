/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
  // BFS
  const queue = [root]
  let res = []

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      res.push('E')
    }
  }
  return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  if (data === 'E') return null

  const list = data.split(',')
  const root = new TreeNode(list[0])
  const queue = [root]
  let cursor = 1

  while (cursor < list.length) {
    const node = queue.shift()

    const leftVal = list[cursor]
    const rightVal = list[cursor + 1]
    cursor += 2

    if (leftVal !== 'E') {
      const leftNode = new TreeNode(leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }
    if (rightVal !== 'E') {
      const rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
  }

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

