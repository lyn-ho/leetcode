function isValid(s: string): boolean {
  const stack = []
  const map = new Map

  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')

  for (let v of s) {
    if (['(', '[', '{'].indexOf(v) > -1) {
      stack.push(v)
    } else {
      const peak = stack.pop()

      if(!peak) return false

      if (v !== map.get(peak)) {
        return false
      }
    }
  }

  return stack.length === 0
};