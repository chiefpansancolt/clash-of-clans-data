import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalBarracksBuilding } from '@/types';

describe('superBarbarianBarracks() [Clan Capital]', () => {
  const sb = clanCapital()
    .armyBuildings()
    .barracks()
    .superBarbarianBarracks()
    .first()! as ClanCapitalBarracksBuilding;

  it('has correct identity', () => {
    expect(sb.id).toBe('super-barbarian-barracks');
    expect(sb.name).toBe('Super Barbarian Barracks');
    expect(sb.base).toBe('clan_capital');
    expect(sb.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(sb.size).toBe('3x3');
  });

  it('troopUnlocked is Super Barbarian', () => {
    expect(sb.troopUnlocked).toBe('Super Barbarian');
  });

  it('has 5 levels', () => {
    expect(sb.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = sb.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1200);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.xpGained).toBe(0);
  });

  it('level 5 has correct stats', () => {
    const l5 = sb.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(2000);
    expect(l5.buildCost).toBe(250000);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('all levels have instant build time', () => {
    sb.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels use Capital Gold', () => {
    sb.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of sb.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/barracks\/super-barbarian-barracks\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is barbarianCamp with [1,1,1,1,1]', () => {
    expect(sb.availablePerDistrict).toHaveLength(1);
    const bc = sb.availablePerDistrict[0];
    expect(bc.district).toBe('barbarianCamp');
    expect(bc.countPerDistrictHall).toEqual([1, 1, 1, 1, 1]);
  });
});
