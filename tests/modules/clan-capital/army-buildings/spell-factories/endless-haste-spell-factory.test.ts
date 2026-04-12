import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpellFactory } from '@/types';

describe('endlessHasteSpellFactory() [Clan Capital]', () => {
  const sf = clanCapital()
    .armyBuildings()
    .spellFactories()
    .endlessHasteSpellFactory()
    .first()! as ClanCapitalSpellFactory;

  it('has correct identity', () => {
    expect(sf.id).toBe('endless-haste-spell-factory');
    expect(sf.name).toBe('Endless Haste Spell Factory');
    expect(sf.base).toBe('clan_capital');
    expect(sf.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(sf.size).toBe('3x3');
  });

  it('spellUnlocked is Endless Haste Spell', () => {
    expect(sf.spellUnlocked).toBe('Endless Haste Spell');
  });

  it('has 4 levels', () => {
    expect(sf.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = sf.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1000);
    expect(l1.buildCost).toBe(25000);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(2);
  });

  it('level 4 has correct stats', () => {
    const l4 = sf.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(1450);
    expect(l4.buildCost).toBe(250000);
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

  it('all levels use Capital Gold', () => {
    sf.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of sf.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/army-buildings\/spell-factories\/endless-haste-spell-factory\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is goblinMines', () => {
    expect(sf.availablePerDistrict).toHaveLength(1);
    const d = sf.availablePerDistrict[0];
    expect(d.district).toBe('goblinMines');
    expect(d.countPerDistrictHall).toEqual([0, 1, 1, 1]);
  });
});
