function canEscape(maze: string[][]): boolean {
  type Point = { x: number, y: number };
  const width = maze[0].length;
  const height = maze.length;

  function getNodes(): { [key: string]: Point | null } {
    let s: Point | null = null
    let e: Point | null = null
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++) {
        if (maze[y][x] === 'S')
          s = { x, y };
        else if (maze[y][x] === 'E')
          e = { x, y }
      };

    return { start: s, end: e };
  }

  const { start, end } = getNodes();
  if (!start || !end) return false;

  const visited = Array.from({ length: height }, () => Array(width).fill(false));
  const queue: Point[] = [start];
  visited[start.y][start.x] = true;

  const dirs: Point[] = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];

  while (queue.length) {
    const node = queue.shift()!;
    if (node.x === end.x && node.y === end.y) return true;
    for (const delta of dirs) {
      const target = { x: node.x + delta.x, y: node.y + delta.y };
      if (target.x < 0 || target.x >= width || target.y < 0 || target.y >= height) continue;
      if (maze[target.y][target.x] === '#' || visited[target.y][target.x]) continue;

      queue.push(target);
      visited[target.y][target.x] = true;
    }
  }
  return false;
}

export const result = canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
]);