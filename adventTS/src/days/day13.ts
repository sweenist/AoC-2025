type Factory = string[];
type Result = "completed" | "broken" | "loop";

function runFactory(factory: Factory): Result {
  type point = { x: number; y: number };
  const directions = ["<", ">", "V", "^"];
  type dirType = (typeof directions)[number];
  const dirDeltas: Record<dirType, point> = {
    "<": { x: -1, y: 0 },
    ">": { x: 1, y: 0 },
    V: { x: 0, y: 1 },
    "^": { x: 0, y: -1 },
  };

  const hBound = factory[0].length;
  const vBound = factory.length;

  let giftLocation: point = { x: 0, y: 0 };
  const locationMap: { [key: string]: number } = {};

  while(true){
    const tile = factory[giftLocation.y][giftLocation.x];
    if(tile ==='.') return "completed";
    giftLocation = {x: giftLocation.x + dirDeltas[tile].x, y: giftLocation.y+dirDeltas[tile].y};
  }

  return "completed";
}

export const result = runFactory([">>v", "<<<"]);
