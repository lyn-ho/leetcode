/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  if(!root) return null
  // BFS
  let stack = [root]

  let res = null
  while (stack.length) {
    const node = stack.pop()
    res = node.val

    node.right && stack.unshift(node.right)
    node.left && stack.unshift(node.left)
  }

  return res
};
// @lc code=end

