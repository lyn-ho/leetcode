/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  // prefix(0) = 0
  // prefix(i) = prefix(i - 1) + nums[i]
  // (a - b) % k == 0 => a % k == b % k
  // (prefix(j) - prefix(i - 1)) % k == 0 => prefix(j) % k == prefix(i - 1) % k

  const cnt = {0: 1}
  const len = A.length
  let sum = 0
  let count = 0

  for (let i = 0;i < len;i++) {
    sum = (sum + A[i]) % K

    if(sum < 0) sum += K

    cnt[sum] && (count += cnt[sum])

    cnt[sum] = cnt[sum] ? cnt[sum] + 1 : 1
  }

  return count
};
// @lc code=end

