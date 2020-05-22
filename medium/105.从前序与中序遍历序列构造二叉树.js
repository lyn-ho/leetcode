/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 前序 父节点 --> 左子节点 --> 右子节点
  // 中序 左子节点 --> 父节点 --> 右子节点

  // 找到各个子树的根节点
  // 构建该根节点的左子树
  // 构建该根节点的右子树

  // 树的长度相同

  if (preorder.length !== inorder.length) return null


  if (preorder.length === 0) return null

  let root = new TreeNode(preorder[0])

  const mid = inorder.indexOf(preorder[0])

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
};
// @lc code=end

