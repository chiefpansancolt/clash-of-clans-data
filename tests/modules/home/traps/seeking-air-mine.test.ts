import { seekingAirMine } from '@/modules/home/traps/seeking-air-mine';

describe('seekingAirMine()', () => {
  it('returns a HomeTrap object', () => {
    const result = seekingAirMine();
    expect(result).toBeDefined();
    expect(result.id).toBe('seeking-air-mine');
    expect(result.name).toBe('Seeking Air Mine');
  });

  it('base is home, category is trap', () => {
    expect(seekingAirMine().base).toBe('home');
    expect(seekingAirMine().category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(seekingAirMine().size).toBe('1x1');
  });

  it('has 8 levels', () => {
    expect(seekingAirMine().levels).toHaveLength(8);
  });

  it('constants: triggerRadius 4, single, air, no damageRadius', () => {
    const sam = seekingAirMine();
    expect(sam.triggerRadius).toBe(4);
    expect(sam.damageType).toBe('single');
    expect(sam.targetType).toBe('air');
    expect(sam.damageRadius).toBeUndefined();
  });

  it('level 1 stats', () => {
    const l1 = seekingAirMine().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(1500);
    expect(l1.buildCost).toBe(12000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(7);
  });

  it('level 8 stats', () => {
    const l8 = seekingAirMine().levels[7];
    expect(l8.level).toBe(8);
    expect(l8.damage).toBe(3350);
    expect(l8.buildCost).toBe(19000000);
    expect(l8.buildTime).toEqual({ days: 11, hours: 12, minutes: 0, seconds: 0 });
    expect(l8.xpGained).toBe(996);
    expect(l8.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    seekingAirMine().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    seekingAirMine().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/traps/seeking-air-mine/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(seekingAirMine().availablePerTownHall).toHaveLength(18);
  });

  it('TH1-6 have 0, TH7 has 1, TH8 has 2, TH9 has 4, TH14 has 8, TH17 has 9', () => {
    const apt = seekingAirMine().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 6)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 7)?.count).toBe(1);
    expect(apt.find((e) => e.townHallLevel === 8)?.count).toBe(2);
    expect(apt.find((e) => e.townHallLevel === 9)?.count).toBe(4);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(8);
    expect(apt.find((e) => e.townHallLevel === 17)?.count).toBe(9);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(9);
  });
});
