type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

function moveReno(board: Board, moves: Moves): Result {
  type point = { x: number; y: number };

  const robo = "@";
  const trash = "*";
  const obstacle = "#";

  function parseBoard(): {rows:string[], width:number, height:number, roboPosition: point} {
    const rows = board.trim().split("\n");

    const width = rows[0].length;
    const height = rows.length;

    const map = rows.join("");
    const roboIndex = map.indexOf(robo);
    const x = roboIndex % width;
    const y = Math.floor(roboIndex / width);

    const roboPosition = { x, y };
    return {rows, width, height, roboPosition}
  }

  function parseMovement(roboPosition: point, width:number, height:number, rows: string[]): Result {
    type Directions = "U" | "R" | "D" | "L";
    const directions: Record<Directions, point> = {
      U: { x: 0, y: -1 },
      R: { x: 1, y: 0 },
      D: { x: 0, y: 1 },
      L: { x: -1, y: 0 },
    };
    const directionKeys = Object.keys(directions);

    for (const char of moves) {
      if (!directionKeys.includes(char)) return "fail";
      const d = char as Directions;
      roboPosition = {
        x: roboPosition.x + directions[d].x,
        y: roboPosition.y + directions[d].y,
      };

      if (
        roboPosition.x < 0 ||
        roboPosition.x >= width ||
        roboPosition.y < 0 ||
        roboPosition.y >= height
      )
        return "crash";
      const target = rows[roboPosition.y][roboPosition.x];
      if (target === trash) return "success";
      if (target === obstacle) return "crash";
    }
    return "fail";
  }
  const { rows, width, height, roboPosition } = parseBoard();
  if (roboPosition === null) return "fail";
  return parseMovement(roboPosition, width, height, rows);
}

const board = `
.....
.*#.*
.@...
.....
`;

export const result = moveReno(board, "RRUUUU");
