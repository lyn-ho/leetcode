/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  const stack = []

  for (let i = 0, l = S.length;i < l;) {
    let curLevel = 0  // 一个 curNode 对应一个 curLevel

    while (i < l && S[i] === '-') {
      i++
      curLevel++  // 连字符个数代表 level
    }

    const start = i   // 记录当前节点值的开始位置
    while (i < l && S[i] !== '-') {
      i++   // 指针移动到当前节点值的结束位置
    }

    const curNode = new TreeNode(S.slice(start, i)) // 创建当前节点
    if (stack.length === 0) { // root 入栈，不用找父亲， continue
      stack.push(curNode)
      continue
    }

    while (stack.length > curLevel) { // 直到栈顶是父亲
      stack.pop()   // 栈顶不是父亲，栈顶出栈
    }

    if (stack[stack.length - 1].left) { // 左儿子已存在
      stack[stack.length - 1].right = curNode
    } else {
      stack[stack.length - 1].left = curNode
    }

    stack.push(curNode) // 节点一定要入栈一次
  }

  return stack[0] // 栈顶就是根节点
};
// @lc code=end

