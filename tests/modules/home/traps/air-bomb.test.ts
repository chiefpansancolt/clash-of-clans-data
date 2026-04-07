import { home } from '@/modules/home';

describe('airBomb()', () => {
  it('returns a HomeTrap object', () => {
    const result = home().traps().airBomb().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('air-bomb');
    expect(result.name).toBe('Air Bomb');
  });

  it('base is home, category is trap', () => {
    expect(home().traps().airBomb().first()!.base).toBe('home');
    expect(home().traps().airBomb().first()!.category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(home().traps().airBomb().first()!.size).toBe('1x1');
  });

  it('has 13 levels', () => {
    expect(home().traps().airBomb().first()!.levels).toHaveLength(13);
  });

  it('constants: triggerRadius 4, damageRadius 3, splash, air', () => {
    const ab = home().traps().airBomb().first()!;
    expect(ab.triggerRadius).toBe(4);
    expect(ab.damageRadius).toBe(3);
    expect(ab.damageType).toBe('splash');
    expect(ab.targetType).toBe('air');
  });

  it('level 1 stats', () => {
    const l1 = home().traps().airBomb().first()!.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(100);
    expect(l1.buildCost).toBe(4000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(5);
  });

  it('level 13 stats', () => {
    const l13 = home().traps().airBomb().first()!.levels[12];
    expect(l13.level).toBe(13);
    expect(l13.damage).toBe(425);
    expect(l13.buildCost).toBe(15000000);
    expect(l13.buildTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(l13.xpGained).toBe(881);
    expect(l13.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    home()
      .traps()
      .airBomb()
      .first()!
      .levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    home()
      .traps()
      .airBomb()
      .first()!
      .levels.forEach((l, i) => {
        expect(l.images.normal).toBe(`images/home/traps/air-bomb/normal/level-${i + 1}.png`);
      });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(home().traps().airBomb().first()!.availablePerTownHall).toHaveLength(18);
  });

  it('TH1-4 have 0, TH5 has 2, TH8 has 4, TH10 has 5, TH12 has 6, TH14 has 7', () => {
    const apt = home().traps().airBomb().first()!.availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 4)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 5)?.count).toBe(2);
    expect(apt.find((e) => e.townHallLevel === 8)?.count).toBe(4);
    expect(apt.find((e) => e.townHallLevel === 10)?.count).toBe(5);
    expect(apt.find((e) => e.townHallLevel === 12)?.count).toBe(6);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(7);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(7);
  });
});
