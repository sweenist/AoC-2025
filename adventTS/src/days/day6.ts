type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
  const mittenBin: string[] = [];
  const matches: { [key: string]: { L: number, R: number } } = {};
  for (const { color, hand } of gloves) {
    if (!(color in matches)) {
      matches[color] = { L: hand === 'L' ? 1 : 0, R: hand === 'R' ? 1 : 0 };
    }
    else {
      const opposite: 'L' | 'R' = hand === 'L' ? 'R' : 'L';
      matches[color][hand] += 1;
      if (matches[color][hand] <= matches[color][opposite]) mittenBin.push(color);
    }
  }
  return mittenBin
}

const gloves: Glove[] = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

export const result = matchGloves(gloves)