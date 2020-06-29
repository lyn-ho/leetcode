function trap(height: number[]): number {
  let res = 0
  let max = 0
  const len = height.length
  const leftMax = []
  const rightMax = []

  for (let i = 0;i < len;i++) {
    leftMax[i] = max = Math.max(height[i], max)
  }

  max = 0

  for (let i = len - 1;i >= 0;i--) {
    rightMax[i] = max = Math.max(height[i], max)
  }

  for (let i = 0;i < len;i++) {
    res = res + Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return res
};