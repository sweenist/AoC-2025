type Factory = string[];
type Result = 'completed' | 'broken' | 'loop';

function runFactory(factory: Factory): Result {
  type point = { x: number; y: number };
  const directions = ['<', '>', 'v', 'V', '^'];
  type dirType = (typeof directions)[number];
  const dirDeltas: Record<dirType, point> = {
    '<': { x: -1, y: 0 },
    '>': { x: 1, y: 0 },
    'v': { x: 0, y: 1 },
    'V': { x: 0, y: 1 },
    '^': { x: 0, y: -1 },
  };

  const hBound = factory[0].length;
  const vBound = factory.length;

  let giftLocation: point = { x: 0, y: 0 };
  const visited: string[] = [];

  while (true) {
    const tile = factory[giftLocation.y][giftLocation.x];
    if (tile === '.') return 'completed';

    const locString = `${giftLocation.x},${giftLocation.y}`;
    if (visited.includes(locString)) return 'loop';
    else visited.push(locString);

    giftLocation = {
      x: giftLocation.x + dirDeltas[tile].x,
      y: giftLocation.y + dirDeltas[tile].y
    };

    if (giftLocation.x < 0 || giftLocation.y < 0 || giftLocation.x >= hBound || giftLocation.y >= vBound)
      return 'broken';
  }
}

export const result = runFactory(['>>v',
  '..<']);
