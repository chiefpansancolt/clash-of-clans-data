import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('infernoDragon() [Clan Capital]', () => {
  const t = clanCapital().troops().infernoDragon().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('inferno-dragon');
    expect(t.name).toBe('Inferno Dragon');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('both');
    expect(t.housingSpace).toBe(15);
    expect(t.movementSpeed).toBe(13);
    expect(t.attackSpeed).toBe(0.128);
    expect(t.range).toBe(3);
    expect(t.specialAbility).toBe('Inferno Beam');
  });

  it('has 4 levels', () => {
    expect(t.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1700);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.infernoInitialDps).toBe(65);
    expect(l1.stats.normal.infernoDpsAfter1_7s).toBe(130);
    expect(l1.stats.normal.infernoDpsAfter3_2s).toBe(1300);
  });

  it('level 4 has correct stats', () => {
    const l4 = t.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(2300);
    expect(l4.districtHallRequired).toBe(4);
    expect(l4.stats.normal.infernoInitialDps).toBe(80);
    expect(l4.stats.normal.infernoDpsAfter1_7s).toBe(160);
    expect(l4.stats.normal.infernoDpsAfter3_2s).toBe(1600);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/inferno-dragon/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe(
        'images/clan-capital/troops/inferno-dragon/normal/level-1.png',
      );
    }
  });
});
