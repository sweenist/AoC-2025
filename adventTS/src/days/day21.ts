function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const depth = warehouse.length;
  const width = warehouse[0].length;
  let finalWareHouse = [...warehouse];

  for (const drop of drops) {
    for (let i = depth - 1; i >= 0; i--) {
      if (finalWareHouse[i][drop] === '.') {
        finalWareHouse[i][drop] = '#';
        break;
      }
    }
    if (finalWareHouse[depth - 1].join('') === '#'.repeat(width)) {
      finalWareHouse.pop();
      let newRow: string[] = new Array(width).fill('.');
      finalWareHouse = [newRow, ...finalWareHouse];
    }
  }
  return finalWareHouse
}

export const result = dropGifts([
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
],
  [0, 1, 2]);