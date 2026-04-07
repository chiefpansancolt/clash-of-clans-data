import { gigaBomb } from '@/modules/home/traps/giga-bomb';

describe('gigaBomb()', () => {
  it('returns a HomeTrap object', () => {
    const result = gigaBomb();
    expect(result).toBeDefined();
    expect(result.id).toBe('giga-bomb');
    expect(result.name).toBe('Giga Bomb');
  });

  it('base is home, category is trap', () => {
    expect(gigaBomb().base).toBe('home');
    expect(gigaBomb().category).toBe('trap');
  });

  it('size is 2x2', () => {
    expect(gigaBomb().size).toBe('2x2');
  });

  it('has 4 levels', () => {
    expect(gigaBomb().levels).toHaveLength(4);
  });

  it('constants: triggerRadius 3.5, triggerHousingSpace 18, damageRadius 4.5, splash, both, Knockback', () => {
    const gb = gigaBomb();
    expect(gb.triggerRadius).toBe(3.5);
    expect(gb.triggerHousingSpace).toBe(18);
    expect(gb.damageRadius).toBe(4.5);
    expect(gb.damageType).toBe('splash');
    expect(gb.targetType).toBe('both');
    expect(gb.specialAbility).toBe('Knockback');
  });

  it('level 1 stats', () => {
    const l1 = gigaBomb().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(1100);
    expect(l1.buildCost).toBe(4500000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(17);
  });

  it('level 4 stats', () => {
    const l4 = gigaBomb().levels[3];
    expect(l4.level).toBe(4);
    expect(l4.damage).toBe(1400);
    expect(l4.buildCost).toBe(20000000);
    expect(l4.buildTime).toEqual({ days: 13, hours: 0, minutes: 0, seconds: 0 });
    expect(l4.xpGained).toBe(1059);
    expect(l4.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    gigaBomb().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    gigaBomb().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/traps/giga-bomb/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(gigaBomb().availablePerTownHall).toHaveLength(18);
  });

  it('TH1-16 have 0, TH17-18 have 1', () => {
    const apt = gigaBomb().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 16)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 17)?.count).toBe(1);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(1);
  });
});
