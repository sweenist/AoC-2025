function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const depth = warehouse.length;
  const finalWareHouse = [...warehouse];

  for (const drop of drops) {
    for (let i = depth - 1; i >= 0; i--) {
      if (finalWareHouse[i][drop] === '.') {
        finalWareHouse[i][drop] = '#';
        break;
      }
    }
  }
  return finalWareHouse
}

export const result = dropGifts([
  ['.', '.', '.'],
  ['.', '.', '#'],
  ['#', '.', '#']
],
  [0, 1, 2]);