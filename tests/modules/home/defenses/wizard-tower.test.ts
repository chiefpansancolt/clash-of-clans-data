import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { wizardTower } from '@/modules/home/defenses/wizard-tower';
import { testFilterImmutability } from '../../../helpers';

// ── wizardTower() ─────────────────────────────────────────────────────────────

describe('wizardTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = wizardTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('wizard-tower');
    expect(result.name).toBe('Wizard Tower');
  });

  it('has 17 levels', () => {
    expect(wizardTower().levels).toHaveLength(17);
  });

  it('level 1 has correct hitpoints', () => {
    expect(wizardTower().levels[0].hitpoints).toBe(620);
  });

  it('level 1 has correct build cost', () => {
    expect(wizardTower().levels[0].buildCost).toBe(100000);
  });

  it('level 1 normal dps is 11', () => {
    expect(wizardTower().levels[0].stats.normal.dps).toBe(11);
  });

  it('level 1 damagePerShot is 14.3', () => {
    expect(wizardTower().levels[0].stats.normal.damagePerShot).toBe(14.3);
  });

  it('targets both ground and air', () => {
    expect(wizardTower().targetType).toBe('both');
  });

  it('has normal mode with range 7', () => {
    expect(wizardTower().modes.normal!.range).toBe(7);
  });

  it('normal mode attack speed is 1.3', () => {
    expect(wizardTower().modes.normal!.attackSpeed).toBe(1.3);
  });

  it('normal mode is splash damage', () => {
    expect(wizardTower().modes.normal!.damageType).toBe('splash');
  });

  it('normal mode has splash radius 1', () => {
    expect(wizardTower().modes.normal!.splashRadius).toBe(1);
  });

  it('has no gear-up', () => {
    expect(wizardTower().gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    wizardTower().levels.forEach((l) => {
      expect(l.stats.gearedUpBurst).toBeUndefined();
      expect(l.stats.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('all levels have only normal images', () => {
    wizardTower().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeUndefined();
    });
  });

  it('level 17 has correct hitpoints', () => {
    expect(wizardTower().levels[16].hitpoints).toBe(3300);
  });

  it('level 17 normal dps is 110', () => {
    expect(wizardTower().levels[16].stats.normal.dps).toBe(110);
  });

  it('every level has xpGained', () => {
    wizardTower().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 60', () => {
    expect(wizardTower().levels[0].xpGained).toBe(60);
  });

  it('xpGained increases with level', () => {
    const xp = wizardTower().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('TH5 has 1 wizard tower available', () => {
    expect(wizardTower().availablePerTownHall.find((a) => a.townHallLevel === 5)?.count).toBe(1);
  });

  it('TH11 has 5 wizard towers available', () => {
    expect(wizardTower().availablePerTownHall.find((a) => a.townHallLevel === 11)?.count).toBe(5);
  });

  it('TH18 has 6 wizard towers with countAfterMerges 2', () => {
    const th18 = wizardTower().availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(6);
    expect(th18?.countAfterMerges).toBe(2);
  });

  it('is not available at TH1-4', () => {
    expect(wizardTower().availablePerTownHall.find((a) => a.townHallLevel <= 4)).toBeUndefined();
  });
});

// ── homeDefenses() with wizard tower ─────────────────────────────────────────

describe('HomeDefenseQuery with wizard tower', () => {
  it('homeDefenses has at least 5 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(5);
  });

  it('byBuilding finds wizard-tower by name', () => {
    expect(homeDefenses().byBuilding('wizard tower').count()).toBe(1);
    expect(homeDefenses().byBuilding('Wizard Tower').count()).toBe(1);
  });

  it('byTownHall(4) does not include wizard tower', () => {
    expect(homeDefenses().byTownHall(4).findByName('Wizard Tower')).toBeUndefined();
  });

  it('byTownHall(5) includes wizard tower', () => {
    expect(homeDefenses().byTownHall(5).findByName('Wizard Tower')).toBeDefined();
  });

  it('byDamageType("splash") includes wizard tower and mortar', () => {
    const splash = homeDefenses().byDamageType('splash');
    expect(splash.findByName('Wizard Tower')).toBeDefined();
    expect(splash.findByName('Mortar')).toBeDefined();
  });

  it('hasGearUp does not include wizard tower', () => {
    expect(homeDefenses().hasGearUp().findByName('Wizard Tower')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Wizard Tower'),
);
