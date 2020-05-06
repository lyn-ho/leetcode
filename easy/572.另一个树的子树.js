/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 *
 * 遍历 s 和 t 比较
 */
var isSubtree = function(s, t) {
  if (!s || !t) return false

  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

/**
 *
 * @param {*} n1
 * @param {*} n2
 *
 * 递归调用比较
 */
function isSame(n1, n2) {
  if (!n1 && n2) return false
  if (n1 && !n2) return false
  if (!n1 && !n2) return true

  if (n1.val == n2.val) {
    return isSame(n1.left, n2.left) && isSame(n1.right, n2.right)
  } else {
    return false
  }

}
// @lc code=end

