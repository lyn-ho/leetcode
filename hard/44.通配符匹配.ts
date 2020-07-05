function isMatch(s: string, p: string): boolean {
  const sLen = s.length
  const pLen = p.length

  const dp: boolean[][] = new Array(sLen + 1)
  for (let i = 0;i < sLen + 1;i++) {
    dp[i] = new Array(pLen + 1).fill(false)
  }

  dp[0][0] = true

  for (let j = 1;j <= pLen;j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 1]
  }

  for (let i = 1;i <= sLen;i++) {
    for (let j = 1;j <= pLen;j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1])
        dp[i][j] = dp[i - 1][j - 1]

      else if (p[j - 1] === '*' && (dp[i - 1][j] || dp[i][j - 1]))
        dp[i][j] = true
    }
  }

  return dp[sLen][pLen]
};