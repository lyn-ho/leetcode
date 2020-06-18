/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  // 取一个节点，计算有两种情况
  //  这个节点的父节点，和该节点左右子节点中较大
  //  这个节点和左右子节点
  //  递归
  //  对负数剪枝

  let res = -Infinity

  function helper(node) {
    if (!node) return 0

    let left = Math.max(helper(node.left), 0)
    let right = Math.max(helper(node.right), 0)

    res = Math.max(res, node.val + left + right)

    return node.val + Math.max(left, right)
  }

  helper(root)

  return res
};

// @lc code=end

