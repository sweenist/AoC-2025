function manufactureGifts(giftsToProduce: Array<{ toy: string, quantity: number }>): string[] {
  let returnArray: string[] = [];

  for (const gift of giftsToProduce) {
    if (gift.quantity > 0)
      returnArray = returnArray.concat(new Array(gift.quantity).fill(gift.toy));
  }

  return returnArray;
}

const example = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
];

export const result = manufactureGifts(example);