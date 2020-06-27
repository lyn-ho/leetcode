function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) return []

  const map = new Map

  map.set(nums[0], 0)

  for (let i = 1,l = nums.length;i < l; i++) {
    if (map.get(target - nums[i]) !== undefined) return [map.get(target - nums[i]), i]

    map.set(nums[i], i)
  }

  return []
};