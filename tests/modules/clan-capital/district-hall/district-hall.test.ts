import { clanCapital, ClanCapitalDistrictHall } from '@/modules/clan-capital';
import { testQueryBaseContract } from '../../../helpers';

describe('districtHall() [Clan Capital]', () => {
  const dh = clanCapital().districtHall().first()!;

  it('has correct identity', () => {
    expect(dh.id).toBe('district-hall');
    expect(dh.name).toBe('District Hall');
    expect(dh.base).toBe('clan_capital');
    expect(dh.category).toBe('district-hall');
  });

  it('size is 4x4', () => {
    expect(dh.size).toBe('4x4');
  });

  it('has 5 levels', () => {
    expect(dh.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = dh.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(6000);
    expect(l1.buildCost).toBe(0);
    expect(l1.capitalHallRequired.barbarianCamp).toBe(2);
    expect(l1.capitalHallRequired.wizardValley).toBe(3);
    expect(l1.capitalHallRequired.balloonLagoon).toBe(4);
    expect(l1.capitalHallRequired.buildersWorkshop).toBe(5);
    expect(l1.capitalHallRequired.dragonCliffs).toBe(6);
    expect(l1.capitalHallRequired.golemQuarry).toBe(7);
    expect(l1.capitalHallRequired.skeletonPark).toBe(8);
    expect(l1.capitalHallRequired.goblinMines).toBe(9);
  });

  it('level 5 has correct stats', () => {
    const l5 = dh.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(10000);
    expect(l5.buildCost).toBe(300000);
    expect(l5.capitalHallRequired.barbarianCamp).toBe(9);
    expect(l5.capitalHallRequired.wizardValley).toBe(10);
    expect(l5.capitalHallRequired.balloonLagoon).toBe(10);
    expect(l5.capitalHallRequired.buildersWorkshop).toBe(10);
    expect(l5.capitalHallRequired.dragonCliffs).toBe(10);
    expect(l5.capitalHallRequired.golemQuarry).toBe(10);
    expect(l5.capitalHallRequired.skeletonPark).toBeUndefined();
    expect(l5.capitalHallRequired.goblinMines).toBeUndefined();
  });

  it('all levels use Capital Gold as build resource', () => {
    dh.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of dh.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/halls\/district-hall\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('hitpoints increase monotonically', () => {
    for (let i = 1; i < dh.levels.length; i++) {
      expect(dh.levels[i].hitpoints).toBeGreaterThan(dh.levels[i - 1].hitpoints);
    }
  });

  it('districtHall() is a ClanCapitalDistrictHall instance', () => {
    expect(clanCapital().districtHall()).toBeInstanceOf(ClanCapitalDistrictHall);
  });
});

testQueryBaseContract('clanCapital().districtHall()', () => clanCapital().districtHall());
