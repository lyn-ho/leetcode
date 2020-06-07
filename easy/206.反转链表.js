/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 定义两个指针： pre 和 cur ，pre 在前， cur 在后
  // 每次让 pre 的 next 指向 cur ，实现一次局部反转
  // 局部反转后，pre 和 cur 同时往前移动一位
  // 循环上述过程，直到 pre 到达链尾
  if (!head || !head.next) return head

  let cur = head
  let pre = null

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
};
// @lc code=end

