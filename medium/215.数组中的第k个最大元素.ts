function findKthLargest(nums: number[], k: number): number {
  const len = nums.length

  if (len < k) return -1
  
  return select(nums, 0, len - 1, len - k)
};

function select(nums: number[], left: number, right: number, k: number): number {
  if (left === right) return nums[right]

  let pivotIndex = left + ((right - left) >>> 1)

  let pos = partition(nums, left, right, pivotIndex)

  if (pos === k) {
    return nums[pos]
  } else if (pos > k) {
    return select(nums, left, pos - 1, k)
  } else {
    return select(nums, pos + 1, right, k)
  }
}

function partition(nums: number[], left: number, right: number, piovtIndex: number): number {
  const pivot = nums[piovtIndex]

  swap(nums, right, piovtIndex)

  let pos = left

  for (let i = left;i <= right;i++) {
    if (nums[i] < pivot) {
      swap(nums, i, pos++)
    }
  }

  swap(nums, right, pos)

  return pos
}

function swap(nums: number[], i: number, j: number): void {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
