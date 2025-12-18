function maxDepth(s: string): number {
  const magicMarkers = {
    '[': 1,
    ']': -1
  };

  let magicIntensity = 0;
  let currentIntensity = 0;
  let previous = ''
  for (const char of s) {
    currentIntensity = currentIntensity + magicMarkers[char as '[' | ']'];
    if (currentIntensity < 0) return -1;
    magicIntensity = Math.max(magicIntensity, currentIntensity);
    previous = char;
  }
  return currentIntensity === 0 ? magicIntensity : -1;
}

export const result = maxDepth('[[[]]]')
