function longestValidParentheses(s: string): number {
  let max = 0
  const stack = [-1]

  for (let i = 0, l = s.length;i < l;i++) {
    const c = s[i]

    if (c == '(') { // 左括号 索引入栈
      stack.push(i)
      continue
    }

    stack.pop() // 遇到右括号 出栈

    if (stack.length === 0) { // 栈为空，右括号匹配不到
      stack.push(i) // 将当前索引作为 ‘参照物’
    } else {  // 右括号找到匹配，计算有效的连续长度
      max = Math.max(max, i - stack[stack.length - 1])
    }
  }

  return max
};