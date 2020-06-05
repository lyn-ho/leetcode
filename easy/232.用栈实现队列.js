/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue {
  // s1 用于元素入栈, s2 用于元素出栈
  // push 将元素入栈 s1, top 记录 s1 栈底元素（peek 操作使用）, O(1)
  // pop 如果 s2 不为空，直接弹出 pop, 否则一次性将 s1 中所有元素倒入 s2, 然后 s2 弹出 pop, O(1) | O(n)
  // peek 如果 s2 不为空, 读取 s2 peek, 否则返回 top, O(1)
  // empty s1 和 s2 都为空返回 true, 否则返回 false, O(1)

  constructor() {
    this.s1 = []
    this.s2 = []
    this.top = void 0
  }

  push(val) {
    if (this.s1.length === 0)
      this.top = val
    this.s1.push(val)
  }

  pop() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop())
      }
    }
    return this.s2.pop()
  }

  peek() {
    if (this.s2.length > 0)
      return this.s2[this.s2.length - 1]
    return this.top
  }

  empty() {
    return !this.s1.length && !this.s2.length
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

