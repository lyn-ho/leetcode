/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 *
 * 回溯法
 */
var restoreIpAddresses = function(s) {
  let res = []

  backtrack(0, '', s, 4, res)

  return res
};

/**
 * 
 * @param {number} pos 当前遍历到的位置
 * @param {string} ip 当前构造出的 ip
 * @param {string} s 输入
 * @param {number} flag 当前处理 ip 段，ip 共 4 段
 * @param {string[]} res 结果
 */
function backtrack(pos, ip, s, flag, res) {
  if (flag < 0) return

  if (pos === s.length && flag === 0) {
    res.push(ip.substring(0, ip.length - 1))
    return
  }

  for (let index = pos;index < pos + 3;index++) {
    // 0 不能出现在 ip 段的开头 或者 ip 段为 0
    if (index === pos && s[index] === '0') {
      backtrack(index + 1, ip + '0.', s, flag - 1, res)
      break
    }

    // ip 段小于 255
    if (Number(s.substring(pos, index + 1)) <= 255) {
      backtrack(index + 1, ip + s.substring(pos, index + 1) + '.', s, flag - 1, res)
    }
  }
}

// @lc code=end

