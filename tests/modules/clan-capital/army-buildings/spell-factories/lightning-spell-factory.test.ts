import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpellFactory } from '@/types';

describe('lightningSpellFactory() [Clan Capital]', () => {
  const sf = clanCapital()
    .armyBuildings()
    .spellFactories()
    .lightningSpellFactory()
    .first()! as ClanCapitalSpellFactory;

  it('has correct identity', () => {
    expect(sf.id).toBe('lightning-spell-factory');
    expect(sf.name).toBe('Lightning Spell Factory');
    expect(sf.base).toBe('clan_capital');
    expect(sf.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(sf.size).toBe('3x3');
  });

  it('spellUnlocked is Lightning Spell', () => {
    expect(sf.spellUnlocked).toBe('Lightning Spell');
  });

  it('has 5 levels', () => {
    expect(sf.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = sf.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(1000);
    expect(l1.buildCost).toBe(10000);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.districtHallRequired).toBe(2);
  });

  it('level 5 has correct stats', () => {
    const l5 = sf.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(1600);
    expect(l5.buildCost).toBe(160000);
    expect(l5.districtHallRequired).toBe(5);
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
        /^images\/clan-capital\/army-buildings\/spell-factories\/lightning-spell-factory\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerDistrict is balloonLagoon', () => {
    expect(sf.availablePerDistrict).toHaveLength(1);
    const d = sf.availablePerDistrict[0];
    expect(d.district).toBe('balloonLagoon');
    expect(d.countPerDistrictHall).toEqual([0, 1, 1, 1, 1]);
  });
});
