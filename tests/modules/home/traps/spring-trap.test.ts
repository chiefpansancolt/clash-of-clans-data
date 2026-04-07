import { springTrap } from '@/modules/home/traps/spring-trap';

describe('springTrap()', () => {
  it('returns a HomeTrap object', () => {
    const result = springTrap();
    expect(result).toBeDefined();
    expect(result.id).toBe('spring-trap');
    expect(result.name).toBe('Spring Trap');
  });

  it('base is home, category is trap', () => {
    expect(springTrap().base).toBe('home');
    expect(springTrap().category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(springTrap().size).toBe('1x1');
  });

  it('has 13 levels', () => {
    expect(springTrap().levels).toHaveLength(13);
  });

  it('constants: triggerRadius 1, single target, ground, has specialAbility', () => {
    const st = springTrap();
    expect(st.triggerRadius).toBe(1);
    expect(st.damageRadius).toBeUndefined();
    expect(st.damageType).toBe('single');
    expect(st.targetType).toBe('ground');
    expect(st.favoriteTarget).toBe('Highest housing space troop');
    expect(st.specialAbility).toBe('Powerful Push');
  });

  it('level 1 stats', () => {
    const l1 = springTrap().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.springCapacity).toBe(10);
    expect(l1.damage).toBe(0);
    expect(l1.buildCost).toBe(2000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(4);
  });

  it('level 5 reaches max spring capacity of 18', () => {
    const l5 = springTrap().levels[4];
    expect(l5.springCapacity).toBe(18);
  });

  it('levels 5-13 all have spring capacity 18', () => {
    springTrap()
      .levels.slice(4)
      .forEach((l) => expect(l.springCapacity).toBe(18));
  });

  it('level 13 stats', () => {
    const l13 = springTrap().levels[12];
    expect(l13.level).toBe(13);
    expect(l13.springCapacity).toBe(18);
    expect(l13.damage).toBe(1400);
    expect(l13.buildCost).toBe(16000000);
    expect(l13.buildTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
    expect(l13.xpGained).toBe(974);
    expect(l13.townHallRequired).toBe(18);
  });

  it('all levels use Gold', () => {
    springTrap().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    springTrap().levels.forEach((l, i) => {
      expect(l.images.normal).toBe(`images/home/traps/spring-trap/normal/level-${i + 1}.png`);
    });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(springTrap().availablePerTownHall).toHaveLength(18);
  });

  it('TH1-3 have 0, TH4 has 2, TH8 has 6, TH12 has 8, TH13 has 9', () => {
    const apt = springTrap().availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 4)?.count).toBe(2);
    expect(apt.find((e) => e.townHallLevel === 8)?.count).toBe(6);
    expect(apt.find((e) => e.townHallLevel === 12)?.count).toBe(8);
    expect(apt.find((e) => e.townHallLevel === 13)?.count).toBe(9);
  });
});
