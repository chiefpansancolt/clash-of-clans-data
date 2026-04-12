import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalHouse } from '@/types';

describe('goblinHut() [Clan Capital]', () => {
  const h = clanCapital().other().houses().goblinHut().first()! as ClanCapitalHouse;

  it('has correct identity', () => {
    expect(h.id).toBe('goblin-hut');
    expect(h.name).toBe('Goblin Hut');
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
    expect(l1.hitpoints).toBe(650);
    expect(l1.buildCost).toBe(500);
    expect(l1.buildCostResource).toBe('Capital Gold');
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
      /^images\/clan-capital\/other\/houses\/goblin-hut\/normal\/level-1\.png$/,
    );
    expect(l1.images.ruin).toMatch(
      /^images\/clan-capital\/other\/houses\/goblin-hut\/ruin\/level-1\.png$/,
    );
  });

  it('is available in 1 district', () => {
    expect(h.availablePerDistrict).toHaveLength(1);
  });

  it('availablePerDistrict includes goblinMines', () => {
    const d = h.availablePerDistrict[0];
    expect(d.district).toBe('goblinMines');
    expect(d.countPerDistrictHall).toEqual([11, 11, 11, 11]);
  });
});
