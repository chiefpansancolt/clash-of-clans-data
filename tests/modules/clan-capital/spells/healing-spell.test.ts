import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpell } from '@/types';

describe('healingSpell() [Clan Capital]', () => {
  const s = clanCapital().spells().healingSpell().first()! as ClanCapitalSpell;

  it('has correct identity', () => {
    expect(s.id).toBe('healing-spell');
    expect(s.name).toBe('Healing Spell');
    expect(s.base).toBe('clan_capital');
    expect(s.category).toBe('spell');
  });

  it('has correct root stats', () => {
    expect(s.radius).toBe(4.5);
    expect(s.housingSpace).toBe(3);
    expect(s.durationAttacks).toBe(2);
    expect(s.timeBetweenPulses).toBe(0.3);
    expect(s.requiredSpellFactory).toBe('Heal Spell Factory');
  });

  it('has 5 levels', () => {
    expect(s.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = s.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.healingPerSecond).toBe(80);
    expect(l1.healingPerPulse).toBe(24);
  });

  it('level 5 has correct stats', () => {
    const l5 = s.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.healingPerSecond).toBe(133);
    expect(l5.healingPerPulse).toBe(40);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of s.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/spells\/healing-spell\/normal\/level-\d+\.png$/,
      );
    }
  });
});
