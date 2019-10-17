/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * 设置一个dummy 节点简化操作,dummy next 指向head。

    初始化first为第一个节点
    初始化second为第二个节点
    初始化current为dummy
    first.next = second.next
    second.next = first
    current.next = second
    current 移动两格
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummy = new ListNode(0)

  dummy.next = head

  let current = dummy

  while (current.next !== null && current.next.next !== null) {
    const first = current.next
    const second = current.next.next

    first.next = second.next
    second.next = first
    current.next = second

    current = current.next.next
  }

  return dummy.next
}
// @lc code=end
