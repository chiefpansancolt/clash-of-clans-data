import { bomb } from '@/modules/home/traps/bomb';

describe('bomb()', () => {
  it('returns a HomeTrap object', () => {
    const result = bomb();
    expect(result).toBeDefined();
    expect(result.id).toBe('bomb');
    expect(result.name).toBe('Bomb');
  });

  it('base is home, category is trap', () => {
    expect(bomb().base).toBe('home');
    expect(bomb().category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(bomb().size).toBe('1x1');
  });

  it('has 14 levels', () => {
    expect(bomb().levels).toHaveLength(14);
  });

  it('constants: triggerRadius 1.5, damageRadius 3, splash, ground', () => {
    const b = bomb();
    expect(b.triggerRadius).toBe(1.5);
    expect(b.damageRadius).toBe(3);
    expect(b.damageType).toBe('splash');
    expect(b.targetType).toBe('ground');
  });

  it('level 1 stats', () => {
    const l1 = bomb().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(20);
    expect(l1.buildCost).toBe(400);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(3);
  });

  it('level 14 stats', () => {
    const l14 = bomb().levels[13];
    expect(l14.level).toBe(14);
    expect(l14.damage).toBe(200);
    expect(l14.buildCost).toBe(14000000);
    expect(l14.buildTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
    expect(l14.xpGained).toBe(831);
    expect(l14.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    bomb().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    bomb().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/traps/bomb/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(bomb().availablePerTownHall).toHaveLength(18);
  });

  it('TH1-2 have 0 bombs, TH3 has 2, TH7 has 6, TH14 has 8', () => {
    const apt = bomb().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 2)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 3)?.count).toBe(2);
    expect(apt.find((e) => e.townHallLevel === 7)?.count).toBe(6);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(8);
  });

  it('max count is 8 (TH14+)', () => {
    const counts = bomb().availablePerTownHall.map((e) => e.count);
    expect(Math.max(...counts)).toBe(8);
  });
});
