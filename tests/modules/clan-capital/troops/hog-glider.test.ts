import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('hogGlider() [Clan Capital]', () => {
  const t = clanCapital().troops().hogGlider().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('hog-glider');
    expect(t.name).toBe('Hog Glider');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(5);
    expect(t.movementSpeed).toBe(18);
    expect(t.range).toBe(0.25);
    expect(t.preferredTarget).toBe('Defenses');
    expect(t.specialAbility).toBe('Stunning Glide');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(650);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.damagePerShot).toBe(120);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(850);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.damagePerShot).toBe(160);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/hog-glider/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/hog-glider/normal/level-1.png');
    }
  });
});
