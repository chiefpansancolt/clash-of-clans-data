import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('spellTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().spellTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('spell-tower');
    expect(result.name).toBe('Spell Tower');
  });

  it('has 4 levels', () => {
    expect(home().defenses().spellTower().first()!.levels).toHaveLength(4);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().spellTower().first()!.targetType).toBe('both');
  });

  it('size is 2x2', () => {
    expect(home().defenses().spellTower().first()!.size).toBe('2x2');
  });

  it('has no normal attack mode', () => {
    expect(home().defenses().spellTower().first()!.modes.normal).toBeUndefined();
  });

  it('has no gear-up', () => {
    expect(home().defenses().spellTower().first()!.gearUp).toBeUndefined();
  });

  it('has a rage spell mode', () => {
    expect(home().defenses().spellTower().first()!.modes.rage).toBeDefined();
  });

  it('rage mode range is 9', () => {
    expect(home().defenses().spellTower().first()!.modes.rage?.range).toBe(9);
  });

  it('rage mode spell radius is 5', () => {
    expect(home().defenses().spellTower().first()!.modes.rage?.spellRadius).toBe(5);
  });

  it('rage mode spell duration is 18s', () => {
    expect(home().defenses().spellTower().first()!.modes.rage?.spellDuration).toBe(18);
  });

  it('rage mode damage increase is 60%', () => {
    expect(home().defenses().spellTower().first()!.modes.rage?.damageIncrease).toBe(60);
  });

  it('rage mode recharge time is 70s', () => {
    expect(home().defenses().spellTower().first()!.modes.rage?.rechargeTime).toBe(70);
  });

  it('has a poison spell mode', () => {
    expect(home().defenses().spellTower().first()!.modes.poison).toBeDefined();
  });

  it('poison mode range is 9', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.range).toBe(9);
  });

  it('poison mode spell radius is 5', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.spellRadius).toBe(5);
  });

  it('poison mode spell duration is 12s', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.spellDuration).toBe(12);
  });

  it('poison mode max dps is 60', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.maxDps).toBe(60);
  });

  it('poison mode speed decrease is 35%', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.speedDecrease).toBe(35);
  });

  it('poison mode attack rate decrease is 25%', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.attackRateDecrease).toBe(25);
  });

  it('poison mode recharge time is 70s', () => {
    expect(home().defenses().spellTower().first()!.modes.poison?.rechargeTime).toBe(70);
  });

  it('has an invisibility spell mode', () => {
    expect(home().defenses().spellTower().first()!.modes.invisibility).toBeDefined();
  });

  it('invisibility mode range is 4.5', () => {
    expect(home().defenses().spellTower().first()!.modes.invisibility?.range).toBe(4.5);
  });

  it('invisibility mode spell radius is 4.5', () => {
    expect(home().defenses().spellTower().first()!.modes.invisibility?.spellRadius).toBe(4.5);
  });

  it('invisibility mode spell duration is 4.5s', () => {
    expect(home().defenses().spellTower().first()!.modes.invisibility?.spellDuration).toBe(4.5);
  });

  it('invisibility mode recharge time is 50s', () => {
    expect(home().defenses().spellTower().first()!.modes.invisibility?.rechargeTime).toBe(50);
  });

  it('has an earthquake spell mode', () => {
    expect(home().defenses().spellTower().first()!.modes.earthquake).toBeDefined();
  });

  it('earthquake mode range is 9', () => {
    expect(home().defenses().spellTower().first()!.modes.earthquake?.range).toBe(9);
  });

  it('earthquake mode spell radius is 4.7', () => {
    expect(home().defenses().spellTower().first()!.modes.earthquake?.spellRadius).toBe(4.7);
  });

  it('earthquake mode troop damage is 30%', () => {
    expect(home().defenses().spellTower().first()!.modes.earthquake?.troopDamagePercent).toBe(30);
  });

  it('earthquake mode recharge time is 50s', () => {
    expect(home().defenses().spellTower().first()!.modes.earthquake?.rechargeTime).toBe(50);
  });

  it('level 1 unlocks Rage Spell', () => {
    expect(home().defenses().spellTower().first()!.levels[0].unlocksSpell).toBe('Rage Spell');
  });

  it('level 2 unlocks Poison Spell', () => {
    expect(home().defenses().spellTower().first()!.levels[1].unlocksSpell).toBe('Poison Spell');
  });

  it('level 3 unlocks Invisibility Spell', () => {
    expect(home().defenses().spellTower().first()!.levels[2].unlocksSpell).toBe(
      'Invisibility Spell',
    );
  });

  it('level 4 unlocks Earthquake Spell', () => {
    expect(home().defenses().spellTower().first()!.levels[3].unlocksSpell).toBe('Earthquake Spell');
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().spellTower().first()!.levels[0].hitpoints).toBe(2500);
  });

  it('level 1 build cost is 9,000,000', () => {
    expect(home().defenses().spellTower().first()!.levels[0].buildCost).toBe(9000000);
  });

  it('level 1 build time is 7d', () => {
    const bt = home().defenses().spellTower().first()!.levels[0].buildTime;
    expect(bt.days).toBe(7);
    expect(bt.hours).toBe(0);
  });

  it('level 1 requires TH 15', () => {
    expect(home().defenses().spellTower().first()!.levels[0].townHallRequired).toBe(15);
  });

  it('level 4 requires TH 17', () => {
    expect(home().defenses().spellTower().first()!.levels[3].townHallRequired).toBe(17);
  });

  it('level 4 has correct hitpoints', () => {
    expect(home().defenses().spellTower().first()!.levels[3].hitpoints).toBe(3200);
  });

  it('level 4 build cost is 27,000,000', () => {
    expect(home().defenses().spellTower().first()!.levels[3].buildCost).toBe(27000000);
  });

  it('level 4 build time is 14d', () => {
    const bt = home().defenses().spellTower().first()!.levels[3].buildTime;
    expect(bt.days).toBe(14);
    expect(bt.hours).toBe(0);
  });

  it('level 1 has only a normal image', () => {
    expect(home().defenses().spellTower().first()!.levels[0].images.normal).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[0].images.poison).toBeUndefined();
  });

  it('level 2 has normal and poison images', () => {
    expect(home().defenses().spellTower().first()!.levels[1].images.normal).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[1].images.poison).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[1].images.invisibility).toBeUndefined();
  });

  it('level 3 has normal, poison, and invisibility images', () => {
    expect(home().defenses().spellTower().first()!.levels[2].images.normal).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[2].images.poison).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[2].images.invisibility).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[2].images.earthquake).toBeUndefined();
  });

  it('level 4 has all four image variants', () => {
    expect(home().defenses().spellTower().first()!.levels[3].images.normal).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[3].images.poison).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[3].images.invisibility).toBeDefined();
    expect(home().defenses().spellTower().first()!.levels[3].images.earthquake).toBeDefined();
  });

  it('is available from TH15 with count 2', () => {
    const entry = home()
      .defenses()
      .spellTower()
      .first()!
      .availablePerTownHall.find((e) => e.townHallLevel === 15);
    expect(entry?.count).toBe(2);
  });

  it('has availability entries for TH15-18 only', () => {
    expect(home().defenses().spellTower().first()!.availablePerTownHall).toHaveLength(4);
  });
});

describe('homeDefenses() — Spell Tower integration', () => {
  it('includes Spell Tower in all home defenses', () => {
    const names = home()
      .defenses()
      .get()
      .map((d) => d.name);
    expect(names).toContain('Spell Tower');
  });

  it('byBuilding("Spell Tower") returns 1 result', () => {
    expect(home().defenses().byBuilding('Spell Tower').count()).toBe(1);
  });

  it('byTownHall(15) includes Spell Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Spell Tower');
  });

  it('byTownHall(14) excludes Spell Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(14)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Spell Tower');
  });

  it('byDamageType("single") excludes Spell Tower (no normal mode)', () => {
    const names = home()
      .defenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Spell Tower');
  });

  it('hasGearUp() excludes Spell Tower', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Spell Tower');
  });

  testFilterImmutability(
    'homeDefenses().byBuilding("Spell Tower")',
    () => home().defenses() as HomeVillageDefenses,
    (q) => (q as HomeVillageDefenses).byBuilding('Spell Tower'),
  );
});
