function findClosest(words: string[], word1: string, word2: string): number {
  let left = -Infinity
  let right = Infinity
  let res = words.length

  for (let i = 0, l = words.length;i < l;i++) {
    if (words[i] === word1) left = i
    else if (words[i] === word2) right = i

    res = Math.min(res, Math.abs(left - right))
  }

  return res
};
