/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */

var rightSideView = function(root) {
  if (!root) return []

  let res = []

  let nodes = [root]

  // 广度优先遍历
  // while (nodes.length) {
  //   const node = nodes.shift()
  //   res.push(node.val)

  //   node.left && nodes.push(node.left)
  //   node.right && nodes.push(node.right)
  // }

  while (nodes.length) {
    let len = nodes.length

    while (len) {
      const node = nodes.shift()

      // 取这一层最后（最右）节点
      if (len === 1) {
        res.push(node.val)
      }

      // 收集下一层
      node.left && nodes.push(node.left)
      node.right && nodes.push(node.right)

      len--
    }
  }

  return res
};
// @lc code=end

