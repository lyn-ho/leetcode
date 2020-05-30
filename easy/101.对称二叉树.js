/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 */
var isSymmetric = function (root) {
  // BFS
  if (!root) return true

  let nums = []

  search(nums, root, 1)

  let l = 0
  let r = nums.length - 1
  while (l < r) {
    if(nums[l++] !== nums[r--]) return false
  }
  return true
};

function search(nums, n, k) {
  n.left && search(nums, n.left, k + 1)

  nums.push(n.val + ',' + k)

  n.right && search(nums, n.right, k + 1)
}

// var isSymmetric = function (root) {
//   // 递归
//   if (!root) return true

//   return dfs(root.left, root.right)
// };

// function dfs(node1, node2) {
//   if (!node1 && !node2) return true
//   if (!node1 || !node2) return false

//   return node1.val === node2.val && dfs(node1.right, node2.left) && dfs(node1.left, node2.right)
// }
// @lc code=end

