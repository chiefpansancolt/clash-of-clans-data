import { home } from '@/modules/home';

describe('wall()', () => {
  it('returns a HomeWall object', () => {
    const result = home().walls().wall().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('wall');
    expect(result.name).toBe('Wall');
  });

  it('base is home, category is wall', () => {
    expect(home().walls().wall().first()!.base).toBe('home');
    expect(home().walls().wall().first()!.category).toBe('wall');
  });

  it('size is 1x1', () => {
    expect(home().walls().wall().first()!.size).toBe('1x1');
  });

  it('has 19 levels', () => {
    expect(home().walls().wall().first()!.levels).toHaveLength(19);
  });

  it('level 1 stats', () => {
    const l1 = home().walls().wall().first()!.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(100);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.wallRings).toBe(0);
    expect(l1.townHallRequired).toBe(2);
    expect(l1.xpGained).toBe(0);
  });

  it('level 19 stats', () => {
    const l19 = home().walls().wall().first()!.levels[18];
    expect(l19.level).toBe(19);
    expect(l19.hitpoints).toBe(14000);
    expect(l19.buildCost).toBe(10000000);
    expect(l19.buildCostResource).toBe('Gold or Elixir');
    expect(l19.wallRings).toBe(10);
    expect(l19.townHallRequired).toBe(18);
  });

  it('levels 1-4 are Gold only', () => {
    home()
      .walls()
      .wall()
      .first()!
      .levels.slice(0, 4)
      .forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('levels 5-19 accept Gold or Elixir', () => {
    home()
      .walls()
      .wall()
      .first()!
      .levels.slice(4)
      .forEach((l) => expect(l.buildCostResource).toBe('Gold or Elixir'));
  });

  it('all levels have instant build time', () => {
    home()
      .walls()
      .wall()
      .first()!
      .levels.forEach((l) => {
        expect(l.buildTime.days).toBe(0);
        expect(l.buildTime.hours).toBe(0);
        expect(l.buildTime.minutes).toBe(0);
        expect(l.buildTime.seconds).toBe(0);
      });
  });

  it('all levels have 0 xpGained', () => {
    home()
      .walls()
      .wall()
      .first()!
      .levels.forEach((l) => expect(l.xpGained).toBe(0));
  });

  it('each level has a normal image', () => {
    home()
      .walls()
      .wall()
      .first()!
      .levels.forEach((l, i) => {
        expect(l.images.normal).toBe(`images/home/defenses/wall/normal/level-${i + 1}.png`);
      });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(home().walls().wall().first()!.availablePerTownHall).toHaveLength(18);
  });

  it('TH1 has 0 walls, TH2 has 25, TH14 has 325', () => {
    const apt = home().walls().wall().first()!.availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 2)?.count).toBe(25);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(325);
  });

  it('max wall count is 325 (TH14+)', () => {
    const counts = home()
      .walls()
      .wall()
      .first()!
      .availablePerTownHall.map((e) => e.count);
    expect(Math.max(...counts)).toBe(325);
  });
});
