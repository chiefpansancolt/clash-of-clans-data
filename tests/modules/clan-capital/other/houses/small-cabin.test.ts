import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalHouse } from '@/types';

describe('smallCabin() [Clan Capital]', () => {
  const h = clanCapital().other().houses().smallCabin().first()! as ClanCapitalHouse;

  it('has correct identity', () => {
    expect(h.id).toBe('small-cabin');
    expect(h.name).toBe('Small Cabin');
    expect(h.base).toBe('clan_capital');
    expect(h.category).toBe('other');
  });

  it('size is 2x2', () => {
    expect(h.size).toBe('2x2');
  });

  it('has 1 level', () => {
    expect(h.levels).toHaveLength(1);
  });

  it('level 1 has correct stats', () => {
    const l1 = h.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(400);
    expect(l1.buildCost).toBe(250);
    expect(l1.buildCostResource).toBe('Capital Gold');
    expect(l1.xpGained).toBe(0);
  });

  it('level 1 has instant build time', () => {
    const l1 = h.levels[0];
    expect(l1.buildTime.days).toBe(0);
    expect(l1.buildTime.hours).toBe(0);
    expect(l1.buildTime.minutes).toBe(0);
    expect(l1.buildTime.seconds).toBe(0);
  });

  it('has valid normal and ruin image paths', () => {
    const l1 = h.levels[0];
    expect(l1.images.normal).toMatch(
      /^images\/clan-capital\/other\/houses\/small-cabin\/normal\/level-1\.png$/,
    );
    expect(l1.images.ruin).toMatch(
      /^images\/clan-capital\/other\/houses\/small-cabin\/ruin\/level-1\.png$/,
    );
  });

  it('is available in 4 districts', () => {
    expect(h.availablePerDistrict).toHaveLength(4);
  });

  it('availablePerDistrict includes barbarianCamp with [3,5,5,5,5]', () => {
    const bc = h.availablePerDistrict.find((d) => d.district === 'barbarianCamp')!;
    expect(bc).toBeDefined();
    expect(bc.countPerDistrictHall).toEqual([3, 5, 5, 5, 5]);
  });
});
