/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null

  // 假设指针 pA 和 pB 分别指向链表 A 和链表 B 的头结点
  // 两个指针分别以步幅为 1 的速度向链表的尾部遍历
  // 当指针 pA 遍历到链表 A 的尾节点时，将指针 pA 指向链表 B 的头部
  // 当指针 pB 遍历到链表 B 的尾节点时，将指针 pB 指向链表 A 的头部
  // 当两个指针相遇时，指针 pA 或者 pB 所指向的节点就是两个链表的相交节点

  let pA = headA
  let pB = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }

  return pA
};
// @lc code=end

