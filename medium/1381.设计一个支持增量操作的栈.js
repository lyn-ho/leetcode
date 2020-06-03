/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
class CustomStack {
  constructor(maxSize) {
    // 最大元素数量
    this.maxSize = maxSize
    // 栈顶位置
    this.top = 0
    // 模拟栈
    this.arr = []
  }

  push(val) {
    if (this.top < this.maxSize) this.arr[++this.top] = val
    return this.arr
  }

  pop() {
    if (this.top) return this.arr[this.top--]
    return -1
  }

  increment(k, val) {
    while(k) this.arr[k--] += val
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

