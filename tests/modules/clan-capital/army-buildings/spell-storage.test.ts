import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpellStorageBuilding } from '@/types';
import { testQueryBaseContract } from '../../../helpers';

describe('spellStorage() [Clan Capital]', () => {
  const ss = clanCapital()
    .armyBuildings()
    .spellStorage()
    .first()! as ClanCapitalSpellStorageBuilding;

  it('has correct identity', () => {
    expect(ss.id).toBe('spell-storage');
    expect(ss.name).toBe('Spell Storage');
    expect(ss.base).toBe('clan_capital');
    expect(ss.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(ss.size).toBe('3x3');
  });

  it('has 5 levels', () => {
    expect(ss.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = ss.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.spellCapacity).toBe(3);
    expect(l1.hitpoints).toBe(1000);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.xpGained).toBe(0);
  });

  it('level 5 has correct stats', () => {
    const l5 = ss.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.spellCapacity).toBe(7);
    expect(l5.hitpoints).toBe(1750);
    expect(l5.buildCost).toBe(400000);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('all levels have instant build time', () => {
    ss.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels use Capital Gold', () => {
    ss.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of ss.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/spell-storage\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict has 1 entry (wizardValley only)', () => {
    expect(ss.availablePerDistrict).toHaveLength(1);
    expect(ss.availablePerDistrict[0].district).toBe('wizardValley');
    expect(ss.availablePerDistrict[0].countPerDistrictHall).toEqual([1, 1, 1, 1, 1]);
  });

  it('byDistrict("wizardValley") includes spell storage', () => {
    expect(clanCapital().armyBuildings().byDistrict('wizardValley').count()).toBeGreaterThan(0);
  });

  it('armyBuildings() count is 2', () => {
    expect(clanCapital().armyBuildings().count()).toBe(2);
  });
});

testQueryBaseContract('clanCapital().armyBuildings().spellStorage()', () =>
  clanCapital().armyBuildings().spellStorage(),
);
