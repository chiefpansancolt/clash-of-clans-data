import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { archerTower } from '@/modules/home/defenses/archer-tower';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('archerTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = archerTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('archer-tower');
    expect(result.name).toBe('Archer Tower');
  });

  it('has 21 levels', () => {
    expect(archerTower().levels).toHaveLength(21);
  });

  it('level 1 has correct hitpoints', () => {
    expect(archerTower().levels[0].hitpoints).toBe(380);
  });

  it('level 1 has correct build cost', () => {
    expect(archerTower().levels[0].buildCost).toBe(1000);
  });

  it('level 1 normal dps is 11', () => {
    expect(archerTower().levels[0].stats.normal.dps).toBe(11);
  });

  it('targets both ground and air', () => {
    expect(archerTower().targetType).toBe('both');
  });

  it('has normal mode with range 10', () => {
    expect(archerTower().modes.normal!.range).toBe(10);
  });

  it('has gearedUpFastAttack mode with range 8', () => {
    expect(archerTower().modes.gearedUpFastAttack?.range).toBe(8);
  });

  it('has gearedUpFastAttack mode with attack speed 0.25', () => {
    expect(archerTower().modes.gearedUpFastAttack?.attackSpeed).toBe(0.25);
  });

  it('levels 1-9 have no gearedUpFastAttack stats', () => {
    const earlyLevels = archerTower().levels.slice(0, 9);
    earlyLevels.forEach((l) => expect(l.stats.gearedUpFastAttack).toBeUndefined());
  });

  it('levels 10+ have gearedUpFastAttack stats', () => {
    const lateLevels = archerTower().levels.slice(9);
    lateLevels.forEach((l) => expect(l.stats.gearedUpFastAttack).toBeDefined());
  });

  it('level 10 gearedUpFastAttack dps is 126', () => {
    const level10 = archerTower().levels.find((l) => l.level === 10);
    expect(level10?.stats.gearedUpFastAttack?.dps).toBe(126);
  });

  it('levels 1-9 have no gearedUpNormal or gearedUpFastAttack images', () => {
    const earlyLevels = archerTower().levels.slice(0, 9);
    earlyLevels.forEach((l) => {
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('levels 10+ have all three image variants', () => {
    const lateLevels = archerTower().levels.slice(9);
    lateLevels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeDefined();
      expect(l.images.gearedUpFastAttack).toBeDefined();
    });
  });

  it('has gearUp info', () => {
    expect(archerTower().gearUp).toBeDefined();
    expect(archerTower().gearUp?.requiresLevel).toBe(10);
  });

  it('every level has xpGained', () => {
    archerTower().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 3', () => {
    expect(archerTower().levels[0].xpGained).toBe(3);
  });

  it('xpGained increases with level', () => {
    const xp = archerTower().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('has availablePerTownHall entries', () => {
    const avail = archerTower().availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH2 has 1 archer tower available', () => {
    const th2 = archerTower().availablePerTownHall.find((a) => a.townHallLevel === 2);
    expect(th2?.count).toBe(1);
  });

  it('TH11 has 8 archer towers available', () => {
    const th11 = archerTower().availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(8);
  });
});

testQueryBaseContract('homeDefenses', () => homeDefenses());

describe('HomeDefenseQuery#byBuilding', () => {
  it('finds archer-tower by name', () => {
    expect(homeDefenses().byBuilding('archer tower').count()).toBe(1);
    expect(homeDefenses().byBuilding('Archer Tower').count()).toBe(1);
  });

  it('homeDefenses has at least 2 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(2);
  });
});

describe('HomeDefenseQuery#byTownHall', () => {
  it('TH1 returns cannon but not archer tower', () => {
    const th1 = homeDefenses().byTownHall(1);
    expect(th1.findByName('Cannon')).toBeDefined();
    expect(th1.findByName('Archer Tower')).toBeUndefined();
  });

  it('TH2 includes archer tower', () => {
    expect(homeDefenses().byTownHall(2).findByName('Archer Tower')).toBeDefined();
  });
});

describe('HomeDefenseQuery#hasGearUp', () => {
  it('includes archer tower', () => {
    expect(homeDefenses().hasGearUp().findByName('Archer Tower')).toBeDefined();
  });

  it('returns all gearable buildings (at least 2)', () => {
    expect(homeDefenses().hasGearUp().count()).toBeGreaterThanOrEqual(2);
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Archer Tower'),
);
testFilterImmutability(
  'hasGearUp',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).hasGearUp(),
);
