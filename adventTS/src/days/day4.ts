function decodeSantaPin(code: string): string | null {
  const comboExpression = /\[(.*?)\]/g;
  const matches = code.match(comboExpression);

  if (!matches) return null;
  if (matches.length !== 4) return null;

  let prevValue: number | null = null;
  const combo = [];
  for (const match of matches) {
    const sequence = match.replace('[', '').replace(']', '').split('');
    let n = Number(sequence[0])

    if (!isNaN(n)) {
      let index = 1;

      while (index < sequence.length) {
        n = sequence[index] === '+'
          ? n + 1
          : n - 1;
        index++;
      }
      while (n < 0) n += 10;
      combo.push(n % 10);
      prevValue = n % 10;
    } else if (sequence[0] === '<') combo.push(prevValue);
  }
  return combo.join('');
}

export const result = decodeSantaPin('[1+][2-]');