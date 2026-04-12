import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpell } from '@/types';

describe('endlessHasteSpell() [Clan Capital]', () => {
  const s = clanCapital().spells().endlessHasteSpell().first()! as ClanCapitalSpell;

  it('has correct identity', () => {
    expect(s.id).toBe('endless-haste-spell');
    expect(s.name).toBe('Endless Haste Spell');
    expect(s.base).toBe('clan_capital');
    expect(s.category).toBe('spell');
  });

  it('has correct root stats', () => {
    expect(s.radius).toBe(6);
    expect(s.housingSpace).toBe(3);
    expect(s.durationAttacks).toBe(4);
    expect(s.requiredSpellFactory).toBe('Endless Haste Spell Factory');
  });

  it('has 4 levels', () => {
    expect(s.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = s.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.speedIncrease).toBe(7);
  });

  it('level 4 has correct stats', () => {
    const l4 = s.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.districtHallRequired).toBe(4);
    expect(l4.speedIncrease).toBe(10);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of s.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/spells\/endless-haste-spell\/normal\/level-\d+\.png$/,
      );
    }
  });
});
