type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  if (gifts.some((gift) => gift > maxWeight)) return null;

  let currentWeight = 0;
  let sleighCount = 0;
  for (let i = 0; i < gifts.length; i++) {
    if (currentWeight + gifts[i] <= maxWeight) currentWeight += gifts[i];
    else {
      sleighCount++;
      currentWeight = gifts[i];
    }
  }
  if (currentWeight > 0) sleighCount++;
  return sleighCount;
}

export const result = packGifts([5, 2, 1], 3);