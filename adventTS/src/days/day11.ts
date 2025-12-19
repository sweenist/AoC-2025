function findUnsafeGifts(warehouse: string[]): number {
  type Point = { x: number, y: number };
  const vectors: Point[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }];

  const width = warehouse[0].length;
  const height = warehouse.length;

  let totalGiftCount = warehouse.reduce((tally, row) => {
    const rowSum = row.split('').reduce((count, cell) => {
      count += cell === '*' ? 1 : 0;
      return count;
    }, 0);
    tally += rowSum;
    return tally;
  }, 0);

  const foundGift = new Set<string>();

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (warehouse[i][j] === '#') {
        for (let adj = 3; adj >= 0; adj--) {
          const vector = vectors[adj];
          const x = j + vector.x;
          const y = i + vector.y;
          console.info(x, y, vector)
          if (x >= 0 && x < width && y >= 0 && y < height && warehouse[y][x] === '*') {
            console.info("inbounds")
            if (!foundGift.has(`${x},${y}`)) {
              foundGift.add(`${x},${y}`);
              totalGiftCount--;
            }
          }
        }
      }
    }
  }

  return totalGiftCount;
}

export const result = findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) 