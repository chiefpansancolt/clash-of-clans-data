import { tornadoTrap } from '@/modules/home/traps/tornado-trap';

describe('tornadoTrap()', () => {
  it('returns a HomeTrap object', () => {
    const result = tornadoTrap();
    expect(result).toBeDefined();
    expect(result.id).toBe('tornado-trap');
    expect(result.name).toBe('Tornado Trap');
  });

  it('base is home, category is trap', () => {
    expect(tornadoTrap().base).toBe('home');
    expect(tornadoTrap().category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(tornadoTrap().size).toBe('1x1');
  });

  it('has 3 levels', () => {
    expect(tornadoTrap().levels).toHaveLength(3);
  });

  it('constants: triggerRadius 3, damageRadius 3, splash, both', () => {
    const tt = tornadoTrap();
    expect(tt.triggerRadius).toBe(3);
    expect(tt.damageRadius).toBe(3);
    expect(tt.damageType).toBe('splash');
    expect(tt.targetType).toBe('both');
    expect(tt.specialAbility).toBe('Pulls in troops');
  });

  it('level 1 stats', () => {
    const l1 = tornadoTrap().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(39);
    expect(l1.duration).toBe(5);
    expect(l1.buildCost).toBe(1800000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(11);
  });

  it('level 3 stats', () => {
    const l3 = tornadoTrap().levels[2];
    expect(l3.level).toBe(3);
    expect(l3.damage).toBe(55);
    expect(l3.duration).toBe(7);
    expect(l3.buildCost).toBe(2500000);
    expect(l3.buildTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(l3.xpGained).toBe(415);
    expect(l3.townHallRequired).toBe(12);
  });

  it('duration increases each level: 5, 6, 7', () => {
    const levels = tornadoTrap().levels;
    expect(levels[0].duration).toBe(5);
    expect(levels[1].duration).toBe(6);
    expect(levels[2].duration).toBe(7);
  });

  it('all levels use Gold', () => {
    tornadoTrap().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    tornadoTrap().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/traps/tornado-trap/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(tornadoTrap().availablePerTownHall).toHaveLength(18);
  });

  it('TH1-10 have 0, TH11-18 have 1', () => {
    const apt = tornadoTrap().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 10)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 11)?.count).toBe(1);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(1);
  });
});
