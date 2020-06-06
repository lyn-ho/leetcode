/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  constructor() {
    this.map = {};
    this.nums = [];
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map[val]) return false;

    this.nums.push(val);
    this.map[val] = this.nums.length;
    return true
  }


  /**
   * Removes a value from the set. Returns true if the set contained the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (this.map[val]) {
      let idx = this.map[val] - 1;
      let len = this.nums.length;
      if (idx === len - 1) {
        this.nums.pop();
        delete this.map[val];
      } else {
        this.map[this.nums[len - 1]] = idx + 1;
        delete this.map[val];
        [this.nums[idx], this.nums[len - 1]] = [this.nums[len - 1], this.nums[idx]];
        this.nums.pop();
      }

      return true
    }

    return false
  }


  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }

}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

