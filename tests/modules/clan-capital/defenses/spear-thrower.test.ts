import { clanCapital, ClanCapitalDefenses } from '@/modules/clan-capital';
import { testQueryBaseContract } from '../../../helpers';

describe('Spear Thrower [Clan Capital]', () => {
  const st = clanCapital().defenses().spearThrower().first()!;

  it('has correct identity', () => {
    expect(st.id).toBe('spear-thrower');
    expect(st.name).toBe('Spear Thrower');
    expect(st.base).toBe('clan_capital');
    expect(st.category).toBe('defense');
  });

  it('has correct root stats', () => {
    expect(st.targetType).toBe('both');
    expect(st.size).toBe('2x2');
  });

  it('has correct normal mode', () => {
    expect(st.modes.normal.range).toBe(9);
    expect(st.modes.normal.attackSpeed).toBe(0.9);
    expect(st.modes.normal.damageType).toBe('single');
  });

  it('has 5 levels', () => {
    expect(st.levels).toHaveLength(5);
  });

  it('has correct first level stats (level 1)', () => {
    const lv1 = st.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(1200);
    expect(lv1.buildCost).toBe(3000);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.capitalHallRequired).toBe(1);
    expect(lv1.districtHallRequired).toBe(1);
    expect(lv1.stats.normal.dps).toBe(90);
    expect(lv1.stats.normal.damagePerShot).toBe(81);
  });

  it('has correct last level stats (level 5)', () => {
    const lv5 = st.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(1800);
    expect(lv5.buildCost).toBe(35000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
    expect(lv5.stats.normal.dps).toBe(150);
    expect(lv5.stats.normal.damagePerShot).toBe(135);
  });

  it('each level has a normal image', () => {
    st.levels.forEach((l) => {
      expect(l.images.normal).toBe(
        `images/clan-capital/defenses/spear-thrower/normal/level-${l.level}.png`,
      );
    });
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(st.availablePerCapitalHall).toHaveLength(10);
    expect(st.availablePerCapitalHall![0]).toEqual({ capitalHallLevel: 1, count: 4 });
    expect(st.availablePerCapitalHall![9]).toEqual({ capitalHallLevel: 10, count: 6 });
  });

  it('has 8 availablePerDistrict entries', () => {
    expect(st.availablePerDistrict).toHaveLength(8);
  });

  it('wizardValley has [11,12,13,14,14] counts', () => {
    const wv = st.availablePerDistrict.find((d) => d.district === 'wizardValley')!;
    expect(wv.countPerDistrictHall).toEqual([11, 12, 13, 14, 14]);
  });

  it('skeletonPark has [3,4,6,7] counts (4 DH levels)', () => {
    const sp = st.availablePerDistrict.find((d) => d.district === 'skeletonPark')!;
    expect(sp.countPerDistrictHall).toEqual([3, 4, 6, 7]);
  });

  it('spearThrower() returns a ClanCapitalDefenses instance', () => {
    expect(clanCapital().defenses().spearThrower()).toBeInstanceOf(ClanCapitalDefenses);
  });
});

testQueryBaseContract('clanCapital().defenses().spearThrower()', () =>
  clanCapital().defenses().spearThrower(),
);
