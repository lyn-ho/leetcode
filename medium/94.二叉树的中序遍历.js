/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 *
 * 从根节点开始，先将根节点压入栈
 *
 * 然后再将其所有左子结点压入栈，取出栈顶节点，保存节点值
 *
 * 再将当前指针移到其右子节点上，若存在右子节点，则在下次循环时又可将其所有左子结点压入栈中， 重复上步骤
 */
var inorderTraversal = function(root) {
  // 1. Recursive solution
  // if (!root) return []
  // const left = root.left ? inorderTraversal(root.left) : []
  // const right = root.right ? inorderTraversal(root.right) : []
  // return [...left, root.val, ...right]

  if(!root) return []

  const stack = [root]
  const ret = []
  let left = root.left

  let item = null

  while (left) {
    stack.push(left)
    left = left.left
  }

  while (item = stack.pop()) {
    ret.push(item.val)
    let t = item.right

    while (t) {
      stack.push(t)
      t= t.left
    }
  }

  return ret
};
// @lc code=end

