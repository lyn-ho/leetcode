/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return []

  const res = []
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.children && node.children.length) {
      const len = node.children.length
      for (let i = len - 1;i >= 0;i--) {
        stack.push(node.children[i])
      }
    }
  }
  return res
};
// @lc code=end

