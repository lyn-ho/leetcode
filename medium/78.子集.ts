function backtrack(list: number[][], tempList: number[], nums: number[], start: number) {
  list.push([...tempList])

  for (let i = start, l = nums.length;i < l;i++) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1)
    tempList.pop()
  }
}

function subsets(nums: number[]): number[][] {
  const list: number[][] = []

  backtrack(list, [], nums, 0)

  return list
};