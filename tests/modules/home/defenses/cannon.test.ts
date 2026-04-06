import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { cannon } from '@/modules/home/defenses/cannon';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('cannon()', () => {
  it('returns a HomeDefense object', () => {
    const result = cannon();
    expect(result).toBeDefined();
    expect(result.id).toBe('cannon');
    expect(result.name).toBe('Cannon');
  });

  it('has 21 levels', () => {
    expect(cannon().levels).toHaveLength(21);
  });

  it('level 1 has correct hitpoints', () => {
    expect(cannon().levels[0].hitpoints).toBe(300);
  });

  it('level 1 has correct build cost', () => {
    expect(cannon().levels[0].buildCost).toBe(250);
  });

  it('level 1 normal dps is 7', () => {
    expect(cannon().levels[0].stats.normal.dps).toBe(7);
  });

  it('has normal mode with range 9', () => {
    expect(cannon().modes.normal!.range).toBe(9);
  });

  it('has gearedUpBurst mode with range 7', () => {
    expect(cannon().modes.gearedUpBurst?.range).toBe(7);
  });

  it('levels 1-6 have no gearedUpBurst stats', () => {
    const earlyLevels = cannon().levels.slice(0, 6);
    earlyLevels.forEach((l) => expect(l.stats.gearedUpBurst).toBeUndefined());
  });

  it('levels 7+ have gearedUpBurst stats', () => {
    const lateLevels = cannon().levels.slice(6);
    lateLevels.forEach((l) => expect(l.stats.gearedUpBurst).toBeDefined());
  });

  it('level 7 gearedUpBurst dps is 80', () => {
    const level7 = cannon().levels.find((l) => l.level === 7);
    expect(level7?.stats.gearedUpBurst?.dps).toBe(80);
  });

  it('levels 1-6 have no gearedUpNormal or gearedUpBurst images', () => {
    const earlyLevels = cannon().levels.slice(0, 6);
    earlyLevels.forEach((l) => {
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpBurst).toBeUndefined();
    });
  });

  it('levels 7+ have all three image variants', () => {
    const lateLevels = cannon().levels.slice(6);
    lateLevels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeDefined();
      expect(l.images.gearedUpBurst).toBeDefined();
    });
  });

  it('has gearUp info', () => {
    expect(cannon().gearUp).toBeDefined();
    expect(cannon().gearUp?.requiresLevel).toBe(7);
  });

  it('every level has xpGained', () => {
    cannon().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 2', () => {
    expect(cannon().levels[0].xpGained).toBe(2);
  });

  it('xpGained increases with level', () => {
    const xp = cannon().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('has availablePerTownHall for all TH levels', () => {
    const avail = cannon().availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH1 has 2 cannons available', () => {
    const th1 = cannon().availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(2);
  });

  it('TH11 has 7 cannons available', () => {
    const th11 = cannon().availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(7);
  });
});

testQueryBaseContract('homeDefenses', () => homeDefenses());

describe('HomeDefenseQuery#byBuilding', () => {
  it('filters by name case-insensitively', () => {
    expect(homeDefenses().byBuilding('cannon').count()).toBe(1);
    expect(homeDefenses().byBuilding('CANNON').count()).toBe(1);
  });

  it('returns empty for unknown building', () => {
    expect(homeDefenses().byBuilding('unknown').count()).toBe(0);
  });
});

describe('HomeDefenseQuery#byTownHall', () => {
  it('includes buildings available at TH1', () => {
    expect(homeDefenses().byTownHall(1).count()).toBeGreaterThan(0);
  });

  it('returns a new HomeDefenseQuery instance', () => {
    const q = homeDefenses();
    expect(q.byTownHall(10)).not.toBe(q);
  });
});

describe('HomeDefenseQuery#hasGearUp', () => {
  it('includes cannon', () => {
    expect(homeDefenses().hasGearUp().findByName('Cannon')).toBeDefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Cannon'),
);
testFilterImmutability(
  'byTownHall',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byTownHall(10),
);
testFilterImmutability(
  'hasGearUp',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).hasGearUp(),
);
