import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('superWizard() [Clan Capital]', () => {
  const t = clanCapital().troops().superWizard().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('super-wizard');
    expect(t.name).toBe('Super Wizard');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('both');
    expect(t.housingSpace).toBe(10);
    expect(t.movementSpeed).toBe(13);
    expect(t.attackSpeed).toBe(2.0);
    expect(t.range).toBe(3);
    expect(t.specialAbility).toBe('Chain Magic');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(600);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.dps).toBe(160);
    expect(l1.stats.normal.damagePerShot).toBe(320);
    expect(l1.stats.normal.chainDamagePerShot).toBe(128);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(1000);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.dps).toBe(240);
    expect(l5.stats.normal.damagePerShot).toBe(480);
    expect(l5.stats.normal.chainDamagePerShot).toBe(192);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/super-wizard/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/super-wizard/normal/level-1.png');
    }
  });
});
