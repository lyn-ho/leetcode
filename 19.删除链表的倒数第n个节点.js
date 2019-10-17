/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * 链表这种数据结构的特点和使用
 * 使用双指针
 * 使用一个dummyHead简化操作
 *
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let i = -1

  const noop = {
    next: null,
  }

  const dummyHead = new ListNode()
  dummyHead.next = head

  let currentP1 = dummyHead
  let currentP2 = dummyHead

  while (currentP1) {
    if (i === n) {
      currentP2 = currentP2.next
    }

    if (i !== n) {
      i++
    }

    currentP1 = currentP1.next
  }

  currentP2.next = ((currentP2 || noop).next || noop).next

  return dummyHead.next
}
// @lc code=end
