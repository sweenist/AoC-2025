function hasFourLights(board: string[][]): boolean {
  const validLights = ['R', 'G']
  type Light = typeof validLights[number];
  type Point = { x: number, y: number };

  const vectors: Point[] = [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }];

  const width = board[0].length;
  const height = board.length;

  function checkLine(x: number, y: number, socket: Light): boolean {
    const results: Array<Array<boolean>> = [
      [],
      [],
      [],
      []];

    for (let i = 1; i <= 3; i++) {
      vectors.forEach((dir, index) => {
        const nextX = x + dir.x * i;
        const nextY = y + dir.y * i;
        if (nextX < 0 || nextY < 0 || nextX >= width || nextY >= height) results[index].push(false);
        else results[index].push(board[nextY][nextX] === socket);
      });
      if (results.every(arr => arr[i - 1] === false)) return false;
    }
    return true;
  }


  if (width < 4 && height < 4) return false;

  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const socket = board[y][x];
      if (validLights.includes(socket)) {
        if (checkLine(x, y, socket))
          return true;
      }
    }

  return false
}

const otherLights = [
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]

export const result = hasFourLights(otherLights)