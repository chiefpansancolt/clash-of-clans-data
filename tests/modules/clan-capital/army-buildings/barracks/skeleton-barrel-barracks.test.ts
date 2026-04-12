import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalBarracksBuilding } from '@/types';

describe('skeletonBarrelBarracks() [Clan Capital]', () => {
  const b = clanCapital()
    .armyBuildings()
    .barracks()
    .skeletonBarrelBarracks()
    .first()! as ClanCapitalBarracksBuilding;

  it('has correct identity', () => {
    expect(b.id).toBe('skeleton-barrel-barracks');
    expect(b.name).toBe('Skeleton Barrel Barracks');
    expect(b.base).toBe('clan_capital');
    expect(b.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(b.size).toBe('3x3');
  });

  it('troopUnlocked is Skeleton Barrel', () => {
    expect(b.troopUnlocked).toBe('Skeleton Barrel');
  });

  it('has 5 levels', () => {
    expect(b.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = b.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1200);
    expect(l1.buildCost).toBe(10000);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const l5 = b.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(2000);
    expect(l5.buildCost).toBe(500000);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('all levels have instant build time', () => {
    b.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels use Capital Gold', () => {
    b.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of b.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/barracks\/skeleton-barrel-barracks\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is balloonLagoon with [1,1,1,1,1]', () => {
    expect(b.availablePerDistrict).toHaveLength(1);
    const d = b.availablePerDistrict[0];
    expect(d.district).toBe('balloonLagoon');
    expect(d.countPerDistrictHall).toEqual([1, 1, 1, 1, 1]);
  });
});
