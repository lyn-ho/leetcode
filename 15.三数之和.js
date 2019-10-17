/** 
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * 排序之后，用双指针
 * 分治
    我们采用分治的思想. 想要找出三个数相加等于0，我们可以数组依次遍历， 每一项a[i]我们都认为它是最终能够用组成0中的一个数字，那么我们的目标就是找到 剩下的元素（除a[i]）两个相加等于-a[i].

    通过上面的思路，我们的问题转化为了给定一个数组，找出其中两个相加等于给定值， 这个问题是比较简单的， 我们只需要对数组进行排序，然后双指针解决即可。 加上我们需要外层遍历依次数组，因此总的时间复杂度应该是O(N^2)。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  const list = []

  nums.sort((a, b) => a - b)

  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i
    let right = len - 1

    while (left < right) {
      if (left === i) {
        left++
      } else if (right === i) {
        right--
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[left], nums[right], nums[i]])

        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++

        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--

        continue
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return list
}
// @lc code=end
