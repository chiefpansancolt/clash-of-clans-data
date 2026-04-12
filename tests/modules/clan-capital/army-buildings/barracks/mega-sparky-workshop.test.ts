import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalBarracksBuilding } from '@/types';

describe('megaSparkyWorkshop() [Clan Capital]', () => {
  const b = clanCapital()
    .armyBuildings()
    .barracks()
    .megaSparkyWorkshop()
    .first()! as ClanCapitalBarracksBuilding;

  it('has correct identity', () => {
    expect(b.id).toBe('mega-sparky-workshop');
    expect(b.name).toBe('Mega Sparky Workshop');
    expect(b.base).toBe('clan_capital');
    expect(b.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(b.size).toBe('3x3');
  });

  it('troopUnlocked is Mega Sparky', () => {
    expect(b.troopUnlocked).toBe('Mega Sparky');
  });

  it('has 4 levels', () => {
    expect(b.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = b.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1500);
    expect(l1.buildCost).toBe(37500);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(2);
  });

  it('level 4 has correct stats', () => {
    const l4 = b.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(2250);
    expect(l4.buildCost).toBe(400000);
    expect(l4.districtHallRequired).toBe(4);
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
        /^images\/clan-capital\/army-buildings\/barracks\/mega-sparky-workshop\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is goblinMines', () => {
    expect(b.availablePerDistrict).toHaveLength(1);
    const d = b.availablePerDistrict[0];
    expect(d.district).toBe('goblinMines');
    expect(d.countPerDistrictHall).toEqual([0, 1, 1, 1]);
  });
});
