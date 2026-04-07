import { home } from '@/modules/home';

describe('giantBomb()', () => {
  it('returns a HomeTrap object', () => {
    const result = home().traps().giantBomb().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('giant-bomb');
    expect(result.name).toBe('Giant Bomb');
  });

  it('base is home, category is trap', () => {
    expect(home().traps().giantBomb().first()!.base).toBe('home');
    expect(home().traps().giantBomb().first()!.category).toBe('trap');
  });

  it('size is 2x2', () => {
    expect(home().traps().giantBomb().first()!.size).toBe('2x2');
  });

  it('has 11 levels', () => {
    expect(home().traps().giantBomb().first()!.levels).toHaveLength(11);
  });

  it('constants: triggerRadius 2, splash, ground', () => {
    const gb = home().traps().giantBomb().first()!;
    expect(gb.triggerRadius).toBe(2);
    expect(gb.damageType).toBe('splash');
    expect(gb.targetType).toBe('ground');
    expect(gb.damageRadius).toBeUndefined();
  });

  it('level 1 stats', () => {
    const l1 = home().traps().giantBomb().first()!.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(175);
    expect(l1.damageRadius).toBe(3);
    expect(l1.buildCost).toBe(12500);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(6);
  });

  it('damage radius increases: L1=3, L2-3=3.5, L4+=4', () => {
    const levels = home().traps().giantBomb().first()!.levels;
    expect(levels[0].damageRadius).toBe(3);
    expect(levels[1].damageRadius).toBe(3.5);
    expect(levels[2].damageRadius).toBe(3.5);
    expect(levels[3].damageRadius).toBe(4);
    expect(levels[10].damageRadius).toBe(4);
  });

  it('level 11 stats', () => {
    const l11 = home().traps().giantBomb().first()!.levels[10];
    expect(l11.level).toBe(11);
    expect(l11.damage).toBe(475);
    expect(l11.damageRadius).toBe(4);
    expect(l11.buildCost).toBe(10000000);
    expect(l11.buildTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
    expect(l11.xpGained).toBe(657);
    expect(l11.townHallRequired).toBe(17);
  });

  it('all levels use Gold', () => {
    home()
      .traps()
      .giantBomb()
      .first()!
      .levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    home()
      .traps()
      .giantBomb()
      .first()!
      .levels.forEach((l, i) => {
        expect(l.images.normal).toBe(`images/home/traps/giant-bomb/normal/level-${i + 1}.png`);
      });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(home().traps().giantBomb().first()!.availablePerTownHall).toHaveLength(18);
  });

  it('TH1-5 have 0, TH6 has 1, TH9 has 4, TH17 has 8', () => {
    const apt = home().traps().giantBomb().first()!.availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 5)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 6)?.count).toBe(1);
    expect(apt.find((e) => e.townHallLevel === 9)?.count).toBe(4);
    expect(apt.find((e) => e.townHallLevel === 17)?.count).toBe(8);
  });
});
