function drawGift(size: number, symbol: string): string {
  const nl = '\n';
  if (size < 2) return '';
  else if (size === 2) return `${symbol}${symbol}${nl}${symbol}${symbol}`;


  let gift = symbol.repeat(size) + nl;
  for (let i = 1; i < size - 1; i++) {
    gift += symbol + ' '.repeat(size - 2) + symbol + nl;
  }
  gift += symbol.repeat(size);
  return gift;
}

export const g1 = drawGift(4, '*');
export const g3 = drawGift(2, '-')
export const result = g1
