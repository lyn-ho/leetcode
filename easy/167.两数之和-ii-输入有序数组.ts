function twoSum(numbers: number[], target: number): number[] {
  let map = new Map()

  const len = numbers.length

  for (let i = 0;i < len;i++) {
    const num = numbers[i]

    if (map.get(target - num) !== undefined) {
      return [map.get(target - num), i + 1]
    }

    map.set(num, i + 1)
  }

  return []
};