function divingBoard(shorter: number, longer: number, k: number): number[] {
  if (!k) return []

  if (shorter === longer) return [shorter * k]

  const res = []

  for (let i = 0;i <= k;i++) {
    res.push(i * longer + (k - i) * shorter)
  }

  return res
};
