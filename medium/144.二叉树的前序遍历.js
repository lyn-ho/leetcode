/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  if(!root) return []

  const res = []
  const stack = [root]

  let temp = stack.pop()

  while (temp) {
    res.push(temp.val)

    if (temp.right) {
      stack.push(temp.right)
    }
    if (temp.left) {
      stack.push(temp.left)
    }

    temp = stack.pop()
  }

  return res
};
// @lc code=end

