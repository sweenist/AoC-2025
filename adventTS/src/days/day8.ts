type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
  const robo = '@';
  const trash = "*";
  const obstacle = "#";

  type point = { x: number, y: number };

  function parseBoard() {
    board = board.trim();
    const rows = board.split('\n');

    const width = rows[0].length;
    const height = rows.length;
    let x = 0;//these go away in favor of determinism
    let y = 0;
    const coordinates = [];

    for (let i = 0; i < width * height; i++) {

    }
  }
  parseBoard();
  return 'fail';
}

const board = `
.....
.*#.*
.@...
.....
`

export const result = moveReno(board, 'UU');