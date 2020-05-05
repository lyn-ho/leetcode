/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 *
 * 中序遍历
 *
 * 中序遍历的结果是一个有序数组
 */
var isValidBST = function(root) {
  if (!root) return true

  return valid(root)
};

function valid(node, min = -Infinity, max = Infinity) {
  if (!node) return true

  const val = node.val

  if (val <= min) return false
  if (val >= max) return false


  return valid(node.left, min, val) && valid(node.right, val, max)
}
// @lc code=end

