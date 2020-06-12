/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
  if (!root) return 0

  let sum = 0
  recurse(root, 0)

  return sum

  function recurse(node, cur) {
    cur = cur * 10 + node.val

    if (!node.left && !node.right) sum += cur
    if (node.left) recurse(node.left, cur)
    if (node.right) recurse(node.right, cur)
  }
};
// @lc code=end

