/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 *
 * 归并排序
 *
 * 判断是否是一个元素，是，直接返回
 * 找到中间节点
 * 递归对前后部分链表进行排序
 * 最后对两个子链表进行归并
 */
var sortList = function(head) {
  if (!head || !head.next) return head
  
  let slow = head
  let fast = head

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const middle = slow.next
  slow.next = null

  const left = head
  const right = middle
  return merge(sortList(left), sortList(right))
};

function merge(left, right) {
  const dummy = new ListNode()

  let l = left
  let r = right
  let p = dummy

  while (l && r) {
    if (l.val < r.val) {
      const t = l
      l = l.next
      t.next = null
      p.next = t
      p = t
    } else {
      const t = r
      r = r.next
      t.next = null
      p.next = t
      p = t
    }
  }

  if (l) p.next = l
  if (r) p.next = r
  return dummy.next
}

/// 选择排序 O(n^2)
// var sortList = function(head) {
//   let l1 = head

//   while (l1) {
//     let l2 = l1
//     while (l2) {
//       if (l2.val < l1.val) {
//         [l1.val, l2.val] = [l2.val, l1.val]
//       }
//       l2 = l2.next
//     }
//     l1 = l1.next
//   }
//   return head
// };
// @lc code=end

