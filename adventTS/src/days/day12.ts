function elfBattle(elf1: string, elf2: string): number {
  const hp = [3, 3];
  const turns = elf1.length;

  function damage(action: string, vs: string): number {
    if (action === 'A') return vs === 'B' ? 0 : 1;
    if (action === 'F') return 2;
    return 0;
  }

  function judge(elf1Hp: number, elf2hp: number) {
    if (0 >= elf1Hp && 0 >= elf2hp) return 0;
    return elf1Hp > elf2hp ? 1 : 2;
  }

  for (let i = 0; i < turns; i++) {
    const elf1Damage = damage(elf1[i], elf2[i]);
    const elf2Damage = damage(elf2[i], elf1[i]);

    hp[0] -= elf2Damage;
    hp[1] -= elf1Damage;

    if (hp[0] <= 0 || hp[1] <= 0) return judge(hp[0], hp[1]);
  }

  return hp[0] === hp[1] ? 0 : hp[0] > hp[1] ? 1 : 2;
}

export const result = elfBattle('AA', 'FF');