/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 *
 * 分治
 * 合并
 */

function mergeTwoLists(l1, l2) {
  const dummyHead = {}
  let current = dummyHead

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1  // 把小的添加到结果链表
      current = current.next  // 移动结果列表的指针
      l1 = l1.next  // 移动小的链表的指针
    } else {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  if (l1 !== null) {
    current.next = l1
  } else {
    current.next = l2
  }

  return dummyHead.next
}

var mergeKLists = function (lists) {
  if (lists.length == 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])

  const mid = lists.length >> 1

  return mergeTwoLists(mergeKLists(lists.splice(0, mid)), mergeKLists(lists))
};
// @lc code=end

