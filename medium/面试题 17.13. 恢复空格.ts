/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
function respace(dictionary: string[], sentence: string): number {
  const len = sentence.length
  const dp: number[] = new Array(len + 1)

  dp[0] = 0

  for (let i = 1;i <= len;i++) {
    dp[i] = dp[i - 1] + 1
    for (const word of dictionary) {
      if (sentence.substring(i - word.length, i) === word) {
        dp[i] = Math.min(dp[i], dp[i - word.length])
      }
    }
  }

  return dp[len]
};
