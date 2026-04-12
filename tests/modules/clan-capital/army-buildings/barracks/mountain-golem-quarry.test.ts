import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalBarracksBuilding } from '@/types';

describe('mountainGolemQuarry() [Clan Capital]', () => {
  const mq = clanCapital()
    .armyBuildings()
    .barracks()
    .mountainGolemQuarry()
    .first()! as ClanCapitalBarracksBuilding;

  it('has correct identity', () => {
    expect(mq.id).toBe('mountain-golem-quarry');
    expect(mq.name).toBe('Mountain Golem Quarry');
    expect(mq.base).toBe('clan_capital');
    expect(mq.category).toBe('army');
  });

  it('size is 5x5 (unique among barracks)', () => {
    expect(mq.size).toBe('5x5');
  });

  it('troopUnlocked is Mountain Golem', () => {
    expect(mq.troopUnlocked).toBe('Mountain Golem');
  });

  it('has 5 levels', () => {
    expect(mq.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = mq.levels[0];
    expect(l1.hitpoints).toBe(1500);
    expect(l1.buildCost).toBe(0);
    expect(l1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const l5 = mq.levels[4];
    expect(l5.hitpoints).toBe(2500);
    expect(l5.buildCost).toBe(600000);
    expect(l5.districtHallRequired).toBe(5);
  });

  it('availablePerDistrict is golemQuarry with [1,1,1,1,1]', () => {
    expect(mq.availablePerDistrict).toHaveLength(1);
    const gq = mq.availablePerDistrict[0];
    expect(gq.district).toBe('golemQuarry');
    expect(gq.countPerDistrictHall).toEqual([1, 1, 1, 1, 1]);
  });
});
