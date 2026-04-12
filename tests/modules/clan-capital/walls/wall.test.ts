import { clanCapital, ClanCapitalWalls } from '@/modules/clan-capital';
import { testQueryBaseContract } from '../../../helpers';

describe('wall() [Clan Capital]', () => {
  const w = clanCapital().walls().wall().first()!;

  it('has correct identity', () => {
    expect(w.id).toBe('wall');
    expect(w.name).toBe('Wall');
    expect(w.base).toBe('clan_capital');
    expect(w.category).toBe('wall');
  });

  it('size is 1x1', () => {
    expect(w.size).toBe('1x1');
  });

  it('has 5 levels', () => {
    expect(w.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = w.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(5000);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.capitalHallRequired).toBe(1);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.xpGained).toBe(0);
  });

  it('level 5 has correct stats', () => {
    const l5 = w.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(11000);
    expect(l5.buildCost).toBe(6000);
    expect(l5.capitalHallRequired).toBe(9);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('all levels have instant build time', () => {
    w.levels.forEach((l) => {
      expect(l.buildTime.days).toBe(0);
      expect(l.buildTime.hours).toBe(0);
      expect(l.buildTime.minutes).toBe(0);
      expect(l.buildTime.seconds).toBe(0);
    });
  });

  it('all levels use Capital Gold', () => {
    w.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('capitalHallRequired increases monotonically', () => {
    for (let i = 1; i < w.levels.length; i++) {
      expect(w.levels[i].capitalHallRequired).toBeGreaterThan(w.levels[i - 1].capitalHallRequired);
    }
  });

  it('all levels have valid normal and corner image paths', () => {
    for (const lvl of w.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/walls\/wall\/normal\/level-\d+\.png$/,
      );
      expect(lvl.images.corner).toMatch(
        /^images\/clan-capital\/walls\/wall\/corner\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerCapitalHall has 10 entries', () => {
    expect(w.availablePerCapitalHall).toHaveLength(10);
  });

  it('CH1 has 80 walls, CH9 has 280', () => {
    const apt = w.availablePerCapitalHall;
    expect(apt.find((e) => e.capitalHallLevel === 1)?.count).toBe(80);
    expect(apt.find((e) => e.capitalHallLevel === 9)?.count).toBe(280);
  });

  it('availablePerDistrict has 8 entries', () => {
    expect(w.availablePerDistrict).toHaveLength(8);
  });

  it('barbarianCamp has 5 district-hall levels with correct counts', () => {
    const bc = w.availablePerDistrict.find((d) => d.district === 'barbarianCamp')!;
    expect(bc.countPerDistrictHall).toEqual([50, 100, 140, 180, 200]);
  });

  it('skeletonPark has only 4 district-hall levels', () => {
    const sp = w.availablePerDistrict.find((d) => d.district === 'skeletonPark')!;
    expect(sp.countPerDistrictHall).toHaveLength(4);
  });

  it('walls() is a ClanCapitalWalls instance', () => {
    expect(clanCapital().walls()).toBeInstanceOf(ClanCapitalWalls);
  });

  it('byCapitalHall(1) includes the wall', () => {
    expect(clanCapital().walls().byCapitalHall(1).count()).toBe(1);
  });
});

testQueryBaseContract('clanCapital().walls()', () => clanCapital().walls());
