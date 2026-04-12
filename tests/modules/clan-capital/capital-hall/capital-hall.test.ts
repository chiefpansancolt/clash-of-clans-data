import { clanCapital, ClanCapitalCapitalHall } from '@/modules/clan-capital';
import { testQueryBaseContract } from '../../../helpers';

describe('capitalHall() [Clan Capital]', () => {
  const ch = clanCapital().capitalHall().first()!;

  it('has correct identity', () => {
    expect(ch.id).toBe('capital-hall');
    expect(ch.name).toBe('Capital Hall');
    expect(ch.base).toBe('clan_capital');
    expect(ch.category).toBe('capital-hall');
  });

  it('size is 6x6', () => {
    expect(ch.size).toBe('6x6');
  });

  it('has correct weapon mode', () => {
    expect(ch.weaponMode.range).toBe(15);
    expect(ch.weaponMode.attackSpeed).toBe(8);
    expect(ch.weaponMode.damageType).toBe('splash');
    expect(ch.weaponMode.targetType).toBe('both');
  });

  it('has 10 levels', () => {
    expect(ch.levels).toHaveLength(10);
  });

  it('level 1 has correct stats', () => {
    const l1 = ch.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(10000);
    expect(l1.buildCost).toBe(0);
    expect(l1.maxBuildings).toBe(63);
    expect(l1.dps).toBeUndefined();
    expect(l1.damagePerShot).toBeUndefined();
    expect(l1.capitalUpgradesRequired).toBeUndefined();
    expect(l1.newCapitalUpgradesRequired).toBeUndefined();
  });

  it('level 2 has correct stats', () => {
    const l2 = ch.levels[1];
    expect(l2.level).toBe(2);
    expect(l2.hitpoints).toBe(14000);
    expect(l2.buildCost).toBe(50000);
    expect(l2.capitalUpgradesRequired).toBe(15);
    expect(l2.newCapitalUpgradesRequired).toBe(15);
    expect(l2.maxBuildings).toBe(66);
    expect(l2.dps).toBe(80);
    expect(l2.damagePerShot).toBe(640);
  });

  it('level 10 has correct stats', () => {
    const l10 = ch.levels[9];
    expect(l10.level).toBe(10);
    expect(l10.hitpoints).toBe(40000);
    expect(l10.buildCost).toBe(1000000);
    expect(l10.capitalUpgradesRequired).toBe(2000);
    expect(l10.newCapitalUpgradesRequired).toBe(500);
    expect(l10.maxBuildings).toBe(100);
    expect(l10.dps).toBe(280);
    expect(l10.damagePerShot).toBe(2240);
  });

  it('all levels use Capital Gold as build resource', () => {
    ch.levels.forEach((l) => expect(l.buildCostResource).toBe('Capital Gold'));
  });

  it('all levels have a valid normal image path', () => {
    for (const lvl of ch.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/halls\/capital-hall\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('levels 2-10 have a valid active image path', () => {
    for (const lvl of ch.levels.slice(1)) {
      expect(lvl.images.active).toMatch(
        /^images\/clan-capital\/halls\/capital-hall\/active\/level-\d+\.png$/,
      );
    }
  });

  it('level 1 has no active image', () => {
    expect(ch.levels[0].images.active).toBeUndefined();
  });

  it('maxBuildings increases monotonically', () => {
    for (let i = 1; i < ch.levels.length; i++) {
      expect(ch.levels[i].maxBuildings).toBeGreaterThanOrEqual(ch.levels[i - 1].maxBuildings);
    }
  });

  it('capitalHall() is a ClanCapitalCapitalHall instance', () => {
    expect(clanCapital().capitalHall()).toBeInstanceOf(ClanCapitalCapitalHall);
  });
});

testQueryBaseContract('clanCapital().capitalHall()', () => clanCapital().capitalHall());
