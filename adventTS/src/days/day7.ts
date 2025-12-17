function drawTree(height: number, ornament: string, frequency: number): string {
  let treeString = '';
  const treeBranch = '*';
  const trunk = '#';
  let cursor = 1;
  let line = 0;

  for (let i = height; i > 0; i--) {
    line++;
    treeString += ' '.repeat(i - 1);
    let charToType = line * 2 - 1;

    while (charToType > 0) {
      treeString += cursor % frequency === 0 ? ornament : treeBranch;
      cursor++;
      charToType--;
    }
    treeString += '\n';

  }
  treeString += ' '.repeat(height - 1) + trunk;
  return treeString;
}

export const result = drawTree(4, '+', 1);