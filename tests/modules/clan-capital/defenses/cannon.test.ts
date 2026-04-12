import { clanCapital, ClanCapitalDefenses } from '@/modules/clan-capital';
import { testQueryBaseContract } from '../../../helpers';

describe('Cannon [Clan Capital]', () => {
  const cannon = clanCapital().defenses().cannon().first()!;

  it('has correct identity', () => {
    expect(cannon.id).toBe('cannon');
    expect(cannon.name).toBe('Cannon');
    expect(cannon.base).toBe('clan_capital');
    expect(cannon.category).toBe('defense');
  });

  it('has correct root stats', () => {
    expect(cannon.targetType).toBe('ground');
    expect(cannon.size).toBe('2x2');
  });

  it('has correct normal mode', () => {
    expect(cannon.modes.normal.range).toBe(8);
    expect(cannon.modes.normal.attackSpeed).toBe(1.5);
    expect(cannon.modes.normal.damageType).toBe('single');
  });

  it('has 5 levels', () => {
    expect(cannon.levels).toHaveLength(5);
  });

  it('has correct first level stats (level 1)', () => {
    const lv1 = cannon.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(1250);
    expect(lv1.buildCost).toBe(2500);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.capitalHallRequired).toBe(1);
    expect(lv1.districtHallRequired).toBe(1);
    expect(lv1.stats.normal.dps).toBe(130);
    expect(lv1.stats.normal.damagePerShot).toBe(195);
  });

  it('has correct last level stats (level 5)', () => {
    const lv5 = cannon.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(2050);
    expect(lv5.buildCost).toBe(30000);
    expect(lv5.buildCostResource).toBe('Capital Gold');
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
    expect(lv5.stats.normal.dps).toBe(210);
    expect(lv5.stats.normal.damagePerShot).toBe(315);
  });

  it('all levels use Capital Gold as build resource', () => {
    cannon.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('each level has a normal image', () => {
    cannon.levels.forEach((l) => {
      expect(l.images.normal).toBe(
        `images/clan-capital/defenses/cannon/normal/level-${l.level}.png`,
      );
    });
  });

  it('has 10 availablePerCapitalHall entries (CH1–CH10)', () => {
    expect(cannon.availablePerCapitalHall).toHaveLength(10);
    expect(cannon.availablePerCapitalHall![0]).toEqual({ capitalHallLevel: 1, count: 4 });
    expect(cannon.availablePerCapitalHall![5]).toEqual({ capitalHallLevel: 6, count: 5 });
    expect(cannon.availablePerCapitalHall![9]).toEqual({ capitalHallLevel: 10, count: 6 });
  });

  it('has 8 availablePerDistrict entries (one per district)', () => {
    expect(cannon.availablePerDistrict).toHaveLength(8);
  });

  it('barbarianCamp has [4,6,8,9,9] counts by DH level', () => {
    const bc = cannon.availablePerDistrict.find((d) => d.district === 'barbarianCamp')!;
    expect(bc.countPerDistrictHall).toEqual([4, 6, 8, 9, 9]);
  });

  it('skeletonPark has only 4 DH levels', () => {
    const sp = cannon.availablePerDistrict.find((d) => d.district === 'skeletonPark')!;
    expect(sp.countPerDistrictHall).toHaveLength(4);
    expect(sp.countPerDistrictHall).toEqual([5, 5, 5, 6]);
  });

  it('goblinMines has [1,3,5,7] counts', () => {
    const gm = cannon.availablePerDistrict.find((d) => d.district === 'goblinMines')!;
    expect(gm.countPerDistrictHall).toEqual([1, 3, 5, 7]);
  });

  it('cannon() returns a ClanCapitalDefenses instance', () => {
    expect(clanCapital().defenses().cannon()).toBeInstanceOf(ClanCapitalDefenses);
  });
});

testQueryBaseContract('clanCapital().defenses().cannon()', () => clanCapital().defenses().cannon());
