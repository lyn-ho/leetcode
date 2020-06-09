/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null

  return makeTree(head, null)
};

function makeTree(head, tail) {
  if (head === tail) return null

  // 快慢指针 获取中间节点
  let p1 = head
  let p2 = head

  while (p2 !== tail) {
    p2 = p2.next

    if (p2 !== tail) {
      p1 = p1.next
      p2 = p2.next
    }
  }

  let node = new TreeNode(p1.val)
  node.left = makeTree(head, p1)
  node.right = makeTree(p1.next, tail)

  return node
}
// @lc code=end

