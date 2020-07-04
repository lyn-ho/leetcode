function findUnsortedSubarray(nums: number[]): number {
  const len = nums.length

  let left = 0
  let right = -1

  let max = nums[0]
  let min = nums[len - 1]

  for (let i = 0;i < len;i++) {
    if (max > nums[i]) right = i
    else max = nums[i]

    if (min < nums[len - i - 1]) left = len - i - 1
    else min = nums[len - i - 1]
  }

  return right - left + 1
};