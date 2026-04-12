import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpellFactory } from '@/types';

describe('graveyardSpellFactory() [Clan Capital]', () => {
  const sf = clanCapital()
    .armyBuildings()
    .spellFactories()
    .graveyardSpellFactory()
    .first()! as ClanCapitalSpellFactory;

  it('has correct identity', () => {
    expect(sf.id).toBe('graveyard-spell-factory');
    expect(sf.name).toBe('Graveyard Spell Factory');
    expect(sf.base).toBe('clan_capital');
    expect(sf.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(sf.size).toBe('3x3');
  });

  it('spellUnlocked is Graveyard Spell', () => {
    expect(sf.spellUnlocked).toBe('Graveyard Spell');
  });

  it('has 4 levels', () => {
    expect(sf.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = sf.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1000);
    expect(l1.buildCost).toBe(20000);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(2);
    expect(l1.xpGained).toBe(0);
  });

  it('level 4 has correct stats', () => {
    const l4 = sf.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(1450);
    expect(l4.buildCost).toBe(150000);
    expect(l4.districtHallRequired).toBe(4);
  });

  it('all levels have instant build time', () => {
    sf.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of sf.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/spell-factories\/graveyard-spell-factory\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is skeletonPark with [0,1,1,1]', () => {
    expect(sf.availablePerDistrict).toHaveLength(1);
    const d = sf.availablePerDistrict[0];
    expect(d.district).toBe('skeletonPark');
    expect(d.countPerDistrictHall).toEqual([0, 1, 1, 1]);
  });
});
