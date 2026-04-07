import { home } from '@/modules/home';

describe('gigaBomb()', () => {
  it('returns a HomeTrap object', () => {
    const result = home().traps().gigaBomb().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('giga-bomb');
    expect(result.name).toBe('Giga Bomb');
  });

  it('base is home, category is trap', () => {
    expect(home().traps().gigaBomb().first()!.base).toBe('home');
    expect(home().traps().gigaBomb().first()!.category).toBe('trap');
  });

  it('size is 2x2', () => {
    expect(home().traps().gigaBomb().first()!.size).toBe('2x2');
  });

  it('has 4 levels', () => {
    expect(home().traps().gigaBomb().first()!.levels).toHaveLength(4);
  });

  it('constants: triggerRadius 3.5, triggerHousingSpace 18, damageRadius 4.5, splash, both, Knockback', () => {
    const gb = home().traps().gigaBomb().first()!;
    expect(gb.triggerRadius).toBe(3.5);
    expect(gb.triggerHousingSpace).toBe(18);
    expect(gb.damageRadius).toBe(4.5);
    expect(gb.damageType).toBe('splash');
    expect(gb.targetType).toBe('both');
    expect(gb.specialAbility).toBe('Knockback');
  });

  it('level 1 stats', () => {
    const l1 = home().traps().gigaBomb().first()!.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(1100);
    expect(l1.buildCost).toBe(4500000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(17);
  });

  it('level 4 stats', () => {
    const l4 = home().traps().gigaBomb().first()!.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.damage).toBe(1400);
    expect(l4.buildCost).toBe(20000000);
    expect(l4.buildTime).toEqual({ days: 13, hours: 0, minutes: 0, seconds: 0 });
    expect(l4.xpGained).toBe(1059);
    expect(l4.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    home()
      .traps()
      .gigaBomb()
      .first()!
      .levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    home()
      .traps()
      .gigaBomb()
      .first()!
      .levels.forEach((l, i) => {
        expect(l.images.normal).toBe(`images/home/traps/giga-bomb/normal/level-${i + 1}.png`);
      });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(home().traps().gigaBomb().first()!.availablePerTownHall).toHaveLength(18);
  });

  it('TH1-16 have 0, TH17-18 have 1', () => {
    const apt = home().traps().gigaBomb().first()!.availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 16)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 17)?.count).toBe(1);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(1);
  });
});
