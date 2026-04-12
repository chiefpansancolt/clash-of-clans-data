import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalHouse } from '@/types';

describe('goblinHall() [Clan Capital]', () => {
  const h = clanCapital().other().houses().goblinHall().first()! as ClanCapitalHouse;

  it('has correct identity', () => {
    expect(h.id).toBe('goblin-hall');
    expect(h.name).toBe('Goblin Hall');
    expect(h.base).toBe('clan_capital');
    expect(h.category).toBe('other');
  });

  it('size is 3x3', () => {
    expect(h.size).toBe('3x3');
  });

  it('has 1 level', () => {
    expect(h.levels).toHaveLength(1);
  });

  it('level 1 has correct stats', () => {
    const l1 = h.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(900);
    expect(l1.buildCost).toBe(1000);
    expect(l1.buildCostResource).toBe('Capital Gold');
  });

  it('has valid normal and ruin image paths', () => {
    const l1 = h.levels[0];
    expect(l1.images.normal).toMatch(
      /^images\/clan-capital\/other\/houses\/goblin-hall\/normal\/level-1\.png$/,
    );
    expect(l1.images.ruin).toMatch(
      /^images\/clan-capital\/other\/houses\/goblin-hall\/ruin\/level-1\.png$/,
    );
  });

  it('availablePerDistrict is goblinMines with [1,1,1,1]', () => {
    expect(h.availablePerDistrict).toHaveLength(1);
    const d = h.availablePerDistrict[0];
    expect(d.district).toBe('goblinMines');
    expect(d.countPerDistrictHall).toEqual([1, 1, 1, 1]);
  });
});
