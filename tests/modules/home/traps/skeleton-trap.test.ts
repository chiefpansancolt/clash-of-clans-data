import { home } from '@/modules/home';

describe('skeletonTrap()', () => {
  it('returns a HomeTrap object', () => {
    const result = home().traps().skeletonTrap().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('skeleton-trap');
    expect(result.name).toBe('Skeleton Trap');
  });

  it('base is home, category is trap', () => {
    expect(home().traps().skeletonTrap().first()!.base).toBe('home');
    expect(home().traps().skeletonTrap().first()!.category).toBe('trap');
  });

  it('size is 1x1', () => {
    expect(home().traps().skeletonTrap().first()!.size).toBe('1x1');
  });

  it('has 5 levels', () => {
    expect(home().traps().skeletonTrap().first()!.levels).toHaveLength(5);
  });

  it('constants: triggerRadius 5, single, both (configurable), specialAbility Spawns Skeletons', () => {
    const st = home().traps().skeletonTrap().first()!;
    expect(st.triggerRadius).toBe(5);
    expect(st.damageType).toBe('single');
    expect(st.targetType).toBe('both');
    expect(st.specialAbility).toBe('Spawns Skeletons');
    expect(st.damageRadius).toBeUndefined();
  });

  it('level 1 stats', () => {
    const l1 = home().traps().skeletonTrap().first()!.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.damage).toBe(0);
    expect(l1.spawnedUnits).toBe(2);
    expect(l1.skeletonLevel).toBe(1);
    expect(l1.buildCost).toBe(6000);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.townHallRequired).toBe(8);
  });

  it('level 5 stats', () => {
    const l5 = home().traps().skeletonTrap().first()!.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.damage).toBe(0);
    expect(l5.spawnedUnits).toBe(5);
    expect(l5.skeletonLevel).toBe(2);
    expect(l5.buildCost).toBe(18000000);
    expect(l5.buildTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
    expect(l5.xpGained).toBe(777);
    expect(l5.townHallRequired).toBe(18);
  });

  it('spawnedUnits increases L1-4, stays 5 at L5', () => {
    const levels = home().traps().skeletonTrap().first()!.levels;
    expect(levels[0].spawnedUnits).toBe(2);
    expect(levels[1].spawnedUnits).toBe(3);
    expect(levels[2].spawnedUnits).toBe(4);
    expect(levels[3].spawnedUnits).toBe(5);
    expect(levels[4].spawnedUnits).toBe(5);
  });

  it('skeletonLevel is 1 for L1-4, 2 for L5', () => {
    const levels = home().traps().skeletonTrap().first()!.levels;
    levels.slice(0, 4).forEach((l) => expect(l.skeletonLevel).toBe(1));
    expect(levels[4].skeletonLevel).toBe(2);
  });

  it('all levels use Gold', () => {
    home()
      .traps()
      .skeletonTrap()
      .first()!
      .levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has normal and air images', () => {
    home()
      .traps()
      .skeletonTrap()
      .first()!
      .levels.forEach((l, i) => {
        expect(l.images.normal).toBe(`images/home/traps/skeleton-trap/normal/level-${i + 1}.png`);
        expect(l.images.air).toBe(`images/home/traps/skeleton-trap/air/level-${i + 1}.png`);
      });
  });

  it('availablePerTownHall has 18 entries', () => {
    expect(home().traps().skeletonTrap().first()!.availablePerTownHall).toHaveLength(18);
  });

  it('TH1-7 have 0, TH8 has 2, TH10 has 3, TH14 has 4', () => {
    const apt = home().traps().skeletonTrap().first()!.availablePerTownHall;
    expect(apt.find((e) => e.townHallLevel === 7)?.count).toBe(0);
    expect(apt.find((e) => e.townHallLevel === 8)?.count).toBe(2);
    expect(apt.find((e) => e.townHallLevel === 10)?.count).toBe(3);
    expect(apt.find((e) => e.townHallLevel === 14)?.count).toBe(4);
    expect(apt.find((e) => e.townHallLevel === 18)?.count).toBe(4);
  });
});
