import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalBarracksBuilding } from '@/types';

describe('infernoDragonBarracks() [Clan Capital]', () => {
  const ib = clanCapital()
    .armyBuildings()
    .barracks()
    .infernoDragonBarracks()
    .first()! as ClanCapitalBarracksBuilding;

  it('has correct identity', () => {
    expect(ib.id).toBe('inferno-dragon-barracks');
    expect(ib.name).toBe('Inferno Dragon Barracks');
    expect(ib.base).toBe('clan_capital');
    expect(ib.category).toBe('army');
  });

  it('troopUnlocked is Inferno Dragon', () => {
    expect(ib.troopUnlocked).toBe('Inferno Dragon');
  });

  it('has 4 levels (skeletonPark district only has 4 DH levels)', () => {
    expect(ib.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = ib.levels[0];
    expect(l1.hitpoints).toBe(1200);
    expect(l1.buildCost).toBe(0);
    expect(l1.districtHallRequired).toBe(1);
  });

  it('level 4 has correct stats', () => {
    const l4 = ib.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(1800);
    expect(l4.buildCost).toBe(275000);
    expect(l4.districtHallRequired).toBe(4);
  });

  it('availablePerDistrict is skeletonPark with [1,1,1,1]', () => {
    expect(ib.availablePerDistrict).toHaveLength(1);
    const sp = ib.availablePerDistrict[0];
    expect(sp.district).toBe('skeletonPark');
    expect(sp.countPerDistrictHall).toEqual([1, 1, 1, 1]);
  });
});
