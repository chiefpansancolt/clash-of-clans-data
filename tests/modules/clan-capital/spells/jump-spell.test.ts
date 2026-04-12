import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpell } from '@/types';

describe('jumpSpell() [Clan Capital]', () => {
  const s = clanCapital().spells().jumpSpell().first()! as ClanCapitalSpell;

  it('has correct identity', () => {
    expect(s.id).toBe('jump-spell');
    expect(s.name).toBe('Jump Spell');
    expect(s.base).toBe('clan_capital');
    expect(s.category).toBe('spell');
  });

  it('has correct root stats', () => {
    expect(s.housingSpace).toBe(1);
    expect(s.durationAttacks).toBe(2);
    expect(s.requiredSpellFactory).toBe('Jump Spell Factory');
  });

  it('has 5 levels', () => {
    expect(s.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = s.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.radius).toBe(3.2);
  });

  it('level 5 has correct stats', () => {
    const l5 = s.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.radius).toBe(4);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of s.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/spells\/jump-spell\/normal\/level-\d+\.png$/,
      );
    }
  });
});
