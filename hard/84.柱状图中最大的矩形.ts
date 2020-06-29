function largestRectangleArea(heights: number[]): number {
  if (!heights || !heights.length) return 0

  const len = heights.length
  let max = 0
  let stack: number[] = new Array(len)
  let top = -1

  for (let idx = 0;idx < len;idx++) {
    while (top !== -1 && heights[stack[top]] > heights[idx]) {
      let popIdx = stack[top--]

      let left = top === -1 ? 0 : stack[top] + 1

      max = Math.max(max, (idx - left) * heights[popIdx])
    }

    if (top === -1 && heights[idx] === heights[stack[top]]) {
      stack[top] = idx
    } else {
      stack[++top] = idx
    }
  }

  while (top !== -1) {
    let popIdx = stack[top--]

    let left = top === -1 ? 0 : stack[top] + 1

    max = Math.max(max, (len - left) * heights[popIdx])
  }

  return max
};