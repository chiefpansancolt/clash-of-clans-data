import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('powerPekka() [Clan Capital]', () => {
  const t = clanCapital().troops().powerPekka().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('power-pekka');
    expect(t.name).toBe('Power P.E.K.K.A');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(40);
    expect(t.movementSpeed).toBe(12);
    expect(t.attackSpeed).toBe(1.8);
    expect(t.specialAbility).toBe('Overcharge');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(6800);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.deathDamage).toBe(1000);
    expect(l1.stats.normal.dps).toBe(680);
    expect(l1.stats.normal.damagePerShot).toBe(1224);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(10300);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.deathDamage).toBe(1800);
    expect(l5.stats.normal.dps).toBe(1000);
    expect(l5.stats.normal.damagePerShot).toBe(1800);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/power-pekka/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/power-pekka/normal/level-1.png');
    }
  });
});
