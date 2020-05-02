/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 *
 * 1. 先分组，用 count 变量记录当前节点的个数
 * 2. 用 start 变量记录当前分组的起始节点位置的前一个节点
 * 3. 用 end 变量记录要翻转的最后一个节点位置
 * 4. 翻转一组节点 (start, end)
 * 5. 翻转后，start 指向翻转后链表，区间 (start, end) 中的最后一个节点，返回 start 节点
 * 6. 如果不需要翻转，end 就往后移动一个 (end = end.next) 节点，每一次移动，都要 count + 1
 *
 * 一般情况下对链表的操作，都会引入一个新的 dummy node，因为 header 有可能会改变
 *
 * 时间复杂度 O(n) - n
 * 空间复杂度 O(1)
 *
 * 1. 创建 dummy node
 * 2. 对链表以 k 为单位进行分组，记录每一组的起始和最后节点位置
 * 3. 对每一组进行翻转，更换起始和最终的位置
 * 4. 返回 dummy.next
 */
var reverseKGroup = function (head, k) {
  // dummy node
  let dummy = new ListNode()

  dummy.next = head

  let [start, end] = [dummy, dummy.next]

  // 记录当前节点的个数
  let count = 0

  while (end) {
    count++

    if (count % k === 0) {
      // 翻转
      start = reverseList(start, end.next)
      end = start.next
    } else {
      end = end.next
    }
  }

  return dummy.next
};

function reverseList(start, end) {
  let [pre, cur] = [start, start.next]

  const first = cur

  while (cur !== end) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  start.next = pre
  first.next = cur
  return first
}
// @lc code=end

