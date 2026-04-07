import { wall } from '@/modules/home/walls/wall';

describe('wall()', () => {
  it('returns a HomeWall object', () => {
    const result = wall();
    expect(result).toBeDefined();
    expect(result.id).toBe('wall');
    expect(result.name).toBe('Wall');
  });

  it('base is home, category is wall', () => {
    expect(wall().base).toBe('home');
    expect(wall().category).toBe('wall');
  });

  it('size is 1x1', () => {
    expect(wall().size).toBe('1x1');
  });

  it('has 19 levels', () => {
    expect(wall().levels).toHaveLength(19);
  });

  it('level 1 stats', () => {
    const l1 = wall().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(100);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.wallRings).toBe(0);
    expect(l1.townHallRequired).toBe(2);
    expect(l1.xpGained).toBe(0);
  });

  it('level 19 stats', () => {
    const l19 = wall().levels[18];
    expect(l19.level).toBe(19);
    expect(l19.hitpoints).toBe(14000);
    expect(l19.buildCost).toBe(10000000);
    expect(l19.buildCostResource).toBe('Gold or Elixir');
    expect(l19.wallRings).toBe(10);
    expect(l19.townHallRequired).toBe(18);
  });

  it('levels 1-4 are Gold only', () => {
    wall()
      .levels.slice(0, 4)
      .forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('levels 5-19 accept Gold or Elixir', () => {
    wall()
      .levels.slice(4)
      .forEach((l) => expect(l.buildCostResource).toBe('Gold or Elixir'));
  });

  it('all levels have instant build time', () => {
    wall().levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels have 0 xpGained', () => {
    wall().levels.forEach((l) => expect(l.xpGained).toBe(0));
  });

  it('each level has a normal image', () => {
    wall().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/defenses/wall/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(wall().availablePerTownHall).toHaveLength(18);
  });

  it('TH1 has 0 walls, TH2 has 25, TH14 has 325', () => {
    const apt = wall().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 2)?.count).toBe(25);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(325);
  });

  it('max wall count is 325 (TH14+)', () => {
    const counts = wall().availablePerTownHall.map((e) => e.count);
    expect(Math.max(...counts)).toBe(325);
  });
});
