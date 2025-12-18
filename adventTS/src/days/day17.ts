function hasFourLights(board: string[][]): boolean {
  const validLights = ['R', 'G']
  type light = typeof validLights[number];

  function checkHorizontal(socket: light, x: number, y: number): boolean {

    return board[y][x + 1] === socket
      && board[y][x + 2] === socket
      && board[y][x + 3] === socket;
  }
  function checkVertical(socket: light, x: number, y: number): boolean {
    return board[y + 1][x] === socket
      && board[y + 2][x] === socket
      && board[y + 3][x] === socket;
  }

  const width = board[0].length;
  const height = board.length;

  if (width < 4 && height < 4) return false;
  const maxX = width - 4;
  const maxY = height - 4;

  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const socket = board[y][x];
      if (validLights.includes(socket)) {
        let found4 = false;
        if (x <= maxX) found4 ||= checkHorizontal(socket, x, y);
        if (y <= maxY) found4 ||= checkVertical(socket, x, y);
        if (found4) return true;
      }
    }

  return false
}

const lights = [
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']];

const otherLights = [
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]

export const result = hasFourLights(otherLights) 