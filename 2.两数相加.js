/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 设立一个表示进位的变量carried，建立一个新链表， 把输入的两个链表从头往后同时处理，每两个相加，将结果加上carried后的值作为一个新节点到新链表后面。
 *
    链表这种数据结构的特点和使用
    用一个carried变量来实现进位的功能，每次相加之后计算carried，并用于下一位的计算
 */

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let cur1 = l1
  let cur2 = l2
  let cur = dummyHead
  let carry = 0

  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0
    let val2 = cur2 !== null ? cur2.val : 0

    let sum = val1 + val2 + carry

    let newNode = new ListNode(sum % 10)

    carry = sum >= 10 ? 1 : 0

    cur.next = newNode
    cur = cur.next

    if (cur1 !== null) {
      cur1 = cur1.next
    }

    if (cur2 !== null) {
      cur2 = cur2.next
    }
  }

  if (carry > 0) {
    cur.next = new ListNode(carry)
  }

  return dummyHead.next
}
// @lc code=end
