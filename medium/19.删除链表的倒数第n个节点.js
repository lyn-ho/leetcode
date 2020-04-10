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
 * 双指针，指针A先移动n次， 指针B再开始移动。当A到达null的时候， 指针b的位置正好是倒数n

    我们可以设想假设设定了双指针p和q的话，当q指向末尾的NULL，p与q之间相隔的元素个数为n时，那么删除掉p的下一个指针就完成了要求。

    设置虚拟节点dummyHead指向head

    设定双指针p和q，初始都指向虚拟节点dummyHead

    移动q，直到p与q之间相隔的元素个数为n

    同时移动p与q，直到q指向的为NULL

    将p的下一个节点指向下下个节点

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
