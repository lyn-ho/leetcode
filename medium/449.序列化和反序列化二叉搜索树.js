/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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

// const serialize = (root) => {
//   // DFS 前序遍历
//   if (root == null) return 'E,'

//   const leftSerialized = serialize(root.left)
//   const rightSerialized = serialize(root.right)

//   return root.val + ',' + leftSerialized + rightSerialized
// }


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

// const buildTree = (list) => {
//   const nodeVal = list.shift()

//   if (nodeVal == 'E') return null

//   const node = new TreeNode(nodeVal)

//   node.left = buildTree(list)
//   node.right = buildTree(list)

//   return node
// }
// const deserialize = (data) => {
//   // DFS
//   const list = data.split(',')
//   return buildTree(list)
// }

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

