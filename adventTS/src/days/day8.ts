function findUniqueToy(toy: string): string {
  const lowerToy = toy.toLowerCase();
  const characterCounts: { [key: string]: number } = {};
  for (const char of lowerToy) {
    if (characterCounts[char]) characterCounts[char]++;
    else characterCounts[char] = 1;
  }
  for(let i=0; i < toy.length; i++) {
    if(characterCounts[lowerToy[i]] === 1) return toy[i];
  }
  return "";
}

export const result = findUniqueToy("aAaAaAF");
