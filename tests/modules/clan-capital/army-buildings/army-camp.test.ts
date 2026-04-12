import { clanCapital, ClanCapitalArmyBuildings } from '@/modules/clan-capital';
import { ClanCapitalArmyBuilding } from '@/types';
import { testQueryBaseContract } from '../../../helpers';

describe('armyCamp() [Clan Capital]', () => {
  const ac = clanCapital().armyBuildings().armyCamp().first()! as ClanCapitalArmyBuilding;

  it('has correct identity', () => {
    expect(ac.id).toBe('army-camp');
    expect(ac.name).toBe('Army Camp');
    expect(ac.base).toBe('clan_capital');
    expect(ac.category).toBe('army');
  });

  it('size is 4x4', () => {
    expect(ac.size).toBe('4x4');
  });

  it('has 5 levels', () => {
    expect(ac.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = ac.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.housingSpace).toBe(30);
    expect(l1.hitpoints).toBe(600);
    expect(l1.buildCost).toBe(10000);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.xpGained).toBe(0);
  });

  it('level 5 has correct stats', () => {
    const l5 = ac.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.housingSpace).toBe(50);
    expect(l5.hitpoints).toBe(1200);
    expect(l5.buildCost).toBe(150000);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('all levels have instant build time', () => {
    ac.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels use Capital Gold', () => {
    ac.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of ac.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/army-camp\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict has 3 entries', () => {
    expect(ac.availablePerDistrict).toHaveLength(3);
  });

  it('barbarianCamp has 3 army camps at every DH level', () => {
    const bc = ac.availablePerDistrict.find((d) => d.district === 'barbarianCamp')!;
    expect(bc.countPerDistrictHall).toEqual([3, 3, 3, 3, 3]);
  });

  it('wizardValley has 0 at DH1, 1 from DH2 onwards', () => {
    const wv = ac.availablePerDistrict.find((d) => d.district === 'wizardValley')!;
    expect(wv.countPerDistrictHall).toEqual([0, 1, 1, 1, 1]);
  });

  it('dragonCliffs has 1 army camp at every DH level', () => {
    const dc = ac.availablePerDistrict.find((d) => d.district === 'dragonCliffs')!;
    expect(dc.countPerDistrictHall).toEqual([1, 1, 1, 1, 1]);
  });

  it('armyBuildings() is a ClanCapitalArmyBuildings instance', () => {
    expect(clanCapital().armyBuildings()).toBeInstanceOf(ClanCapitalArmyBuildings);
  });

  it('byDistrict("barbarianCamp") includes the army camp', () => {
    expect(clanCapital().armyBuildings().byDistrict('barbarianCamp').count()).toBe(1);
  });

  it('byDistrict("goblinMines") returns empty', () => {
    expect(clanCapital().armyBuildings().byDistrict('goblinMines').count()).toBe(0);
  });
});

testQueryBaseContract('clanCapital().armyBuildings()', () => clanCapital().armyBuildings());
