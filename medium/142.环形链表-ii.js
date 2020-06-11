/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
  // 快慢指针 fast, slow 指向表头 head, fast 每次走 2 步， slow 每次走一步
  // 1. fast 走到表尾，说明链表无环，直接返回 null
  //    若有环，两指针一定会相遇，因为每走一次，fast 和 slow 的间距 +1 , fast 终会追上 slow
  // 2. 当 fast === slow , 第一次相遇, 分析 fast 和 slow 走过的步数关系
  //    x: 表头到环入口的节点数，y：表示环入口到第一次相遇点直接的节点数，z：表示第一次相遇点到环入口的节点数
  //    slow: x + y, fast: x + y + z + y
  //    2(x + y) = x + y + z + y => x = z
  // 3. 将 slow 或 fast 其中一个指向 head，并且 fast 和 slow 每次走一步，第二次相遇点就是环入口
  if(!head || !head.next || !head.next.next) return null

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }


  return null
};
// @lc code=end

