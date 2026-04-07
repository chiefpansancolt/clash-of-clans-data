import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('cannon()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().cannon().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('cannon');
    expect(result.name).toBe('Cannon');
  });

  it('has 21 levels', () => {
    expect(home().defenses().cannon().first()!.levels).toHaveLength(21);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().cannon().first()!.levels[0].hitpoints).toBe(300);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().cannon().first()!.levels[0].buildCost).toBe(250);
  });

  it('level 1 normal dps is 7', () => {
    expect(home().defenses().cannon().first()!.levels[0].stats.normal.dps).toBe(7);
  });

  it('has normal mode with range 9', () => {
    expect(home().defenses().cannon().first()!.modes.normal!.range).toBe(9);
  });

  it('has gearedUpBurst mode with range 7', () => {
    expect(home().defenses().cannon().first()!.modes.gearedUpBurst?.range).toBe(7);
  });

  it('levels 1-6 have no gearedUpBurst stats', () => {
    const earlyLevels = home().defenses().cannon().first()!.levels.slice(0, 6);
    earlyLevels.forEach((l) => expect(l.stats.gearedUpBurst).toBeUndefined());
  });

  it('levels 7+ have gearedUpBurst stats', () => {
    const lateLevels = home().defenses().cannon().first()!.levels.slice(6);
    lateLevels.forEach((l) => expect(l.stats.gearedUpBurst).toBeDefined());
  });

  it('level 7 gearedUpBurst dps is 80', () => {
    const level7 = home()
      .defenses()
      .cannon()
      .first()!
      .levels.find((l) => l.level === 7);
    expect(level7?.stats.gearedUpBurst?.dps).toBe(80);
  });

  it('levels 1-6 have no gearedUpNormal or gearedUpBurst images', () => {
    const earlyLevels = home().defenses().cannon().first()!.levels.slice(0, 6);
    earlyLevels.forEach((l) => {
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpBurst).toBeUndefined();
    });
  });

  it('levels 7+ have all three image variants', () => {
    const lateLevels = home().defenses().cannon().first()!.levels.slice(6);
    lateLevels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeDefined();
      expect(l.images.gearedUpBurst).toBeDefined();
    });
  });

  it('has gearUp info', () => {
    expect(home().defenses().cannon().first()!.gearUp).toBeDefined();
    expect(home().defenses().cannon().first()!.gearUp?.requiresLevel).toBe(7);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .cannon()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 2', () => {
    expect(home().defenses().cannon().first()!.levels[0].xpGained).toBe(2);
  });

  it('xpGained increases with level', () => {
    const xp = home()
      .defenses()
      .cannon()
      .first()!
      .levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('has availablePerTownHall for all TH levels', () => {
    const avail = home().defenses().cannon().first()!.availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH1 has 2 cannons available', () => {
    const th1 = home()
      .defenses()
      .cannon()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(2);
  });

  it('TH11 has 7 cannons available', () => {
    const th11 = home()
      .defenses()
      .cannon()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(7);
  });
});

testQueryBaseContract('homeDefenses', () => home().defenses());

describe('HomeVillageDefenses#byBuilding', () => {
  it('filters by name case-insensitively', () => {
    expect(home().defenses().byBuilding('cannon').count()).toBe(1);
    expect(home().defenses().byBuilding('CANNON').count()).toBe(1);
  });

  it('returns empty for unknown building', () => {
    expect(home().defenses().byBuilding('unknown').count()).toBe(0);
  });
});

describe('HomeVillageDefenses#byTownHall', () => {
  it('includes buildings available at TH1', () => {
    expect(home().defenses().byTownHall(1).count()).toBeGreaterThan(0);
  });

  it('returns a new HomeVillageDefenses instance', () => {
    const q = home().defenses();
    expect(q.byTownHall(10)).not.toBe(q);
  });
});

describe('HomeVillageDefenses#hasGearUp', () => {
  it('includes cannon', () => {
    expect(home().defenses().hasGearUp().findByName('Cannon')).toBeDefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Cannon'),
);
testFilterImmutability(
  'byTownHall',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byTownHall(10),
);
testFilterImmutability(
  'hasGearUp',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).hasGearUp(),
);
