/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return

  let stack = []
  let dummy = new Node(null, null, head, null)
  let pre = dummy

  stack.push(head)

  while (stack.length) {
    let cur = stack.pop()
    cur.prev = pre
    pre.next = cur

    if (cur.next) stack.push(cur.next)

    if (cur.child) {
      stack.push(cur.child)
      cur.child = null
    }

    pre = pre.next
  }

  dummy.next.prev = null
  return dummy.next
};
// var flatten = function(head, next) {
//   let cur = head

//   while (cur && (cur.next || cur.child)) {
//     if (cur.child) {
//       let flat = flatten(cur.child, cur.next)
//       let tmp = cur.next
//       cur.next = flat
//       cur.child = null
//       cur.next.prev = cur
//       cur = tmp
//     } else {
//       cur = cur.next
//     }
//   }

//   if (next) {
//     next.prev = cur
//     cur.next = next
//   }

//   return head
// };
// @lc code=end

