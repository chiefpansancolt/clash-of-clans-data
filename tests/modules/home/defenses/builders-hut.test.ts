import { home } from '@/modules/home';

describe('buildersHut()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().buildersHut().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('builders-hut');
    expect(result.name).toBe("Builder's Hut");
  });

  it('has 9 levels', () => {
    expect(home().defenses().buildersHut().first()!.levels).toHaveLength(9);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().buildersHut().first()!.targetType).toBe('both');
  });

  it('size is 2x2', () => {
    expect(home().defenses().buildersHut().first()!.size).toBe('2x2');
  });

  it('has no gear-up', () => {
    expect(home().defenses().buildersHut().first()!.gearUp).toBeUndefined();
  });

  it('normal mode has range 7', () => {
    expect(home().defenses().buildersHut().first()!.modes.normal!.range).toBe(7);
  });

  it('normal mode attack speed is 0.4', () => {
    expect(home().defenses().buildersHut().first()!.modes.normal!.attackSpeed).toBe(0.4);
  });

  it('normal mode is single-target damage', () => {
    expect(home().defenses().buildersHut().first()!.modes.normal!.damageType).toBe('single');
  });

  it('has a builder mode', () => {
    expect(home().defenses().buildersHut().first()!.modes.builder).toBeDefined();
  });

  it('builder mode has range 7', () => {
    expect(home().defenses().buildersHut().first()!.modes.builder?.range).toBe(7);
  });

  it('builder mode repair speed is 0.75', () => {
    expect(home().defenses().buildersHut().first()!.modes.builder?.repairSpeed).toBe(0.75);
  });

  it('builder mode movement speed is 20', () => {
    expect(home().defenses().buildersHut().first()!.modes.builder?.movementSpeed).toBe(20);
  });

  it('has placement costs for all 5 builder instances', () => {
    expect(home().defenses().buildersHut().first()!.placementCosts).toHaveLength(5);
  });

  it('1st builder is free', () => {
    const first = home().defenses().buildersHut().first()!.placementCosts![0];
    expect(first.instance).toBe(1);
    expect(first.cost).toBe(0);
  });

  it('2nd builder costs 250 Gems', () => {
    const second = home().defenses().buildersHut().first()!.placementCosts![1];
    expect(second.instance).toBe(2);
    expect(second.cost).toBe(250);
    expect(second.costResource).toBe('Gems');
  });

  it('3rd builder costs 500 Gems', () => {
    const third = home().defenses().buildersHut().first()!.placementCosts![2];
    expect(third.instance).toBe(3);
    expect(third.cost).toBe(500);
    expect(third.costResource).toBe('Gems');
  });

  it('4th builder costs 1000 Gems', () => {
    const fourth = home().defenses().buildersHut().first()!.placementCosts![3];
    expect(fourth.instance).toBe(4);
    expect(fourth.cost).toBe(1000);
    expect(fourth.costResource).toBe('Gems');
  });

  it('5th builder costs 2000 Gems', () => {
    const fifth = home().defenses().buildersHut().first()!.placementCosts![4];
    expect(fifth.instance).toBe(5);
    expect(fifth.cost).toBe(2000);
    expect(fifth.costResource).toBe('Gems');
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].hitpoints).toBe(250);
  });

  it('level 1 has no build cost (placed)', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].buildCost).toBe(0);
  });

  it('level 1 has instant build time', () => {
    const bt = home().defenses().buildersHut().first()!.levels[0].buildTime;
    expect(bt.days).toBe(0);
    expect(bt.hours).toBe(0);
    expect(bt.minutes).toBe(0);
    expect(bt.seconds).toBe(0);
  });

  it('level 1 requires TH 1', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].townHallRequired).toBe(1);
  });

  it('level 1 has no combat dps', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].stats.normal.dps).toBeUndefined();
  });

  it('level 1 has no builder repair stats', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].stats.builder).toBeUndefined();
  });

  it('level 1 has no active image', () => {
    expect(home().defenses().buildersHut().first()!.levels[0].images.active).toBeUndefined();
  });

  it('level 2 dps is 80', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].stats.normal.dps).toBe(80);
  });

  it('level 2 damage per shot is 32', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].stats.normal.damagePerShot).toBe(32);
  });

  it('level 2 repair per second is 50', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].stats.builder?.repairPerSecond).toBe(
      50,
    );
  });

  it('level 2 repair per hit is 37.5', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].stats.builder?.repairPerHit).toBe(
      37.5,
    );
  });

  it('level 2 has correct hitpoints', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].hitpoints).toBe(1000);
  });

  it('level 2 has active image', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].images.active).toBe(
      'images/home/defenses/builders-hut/active/level-2.png',
    );
  });

  it('level 2 requires TH 14', () => {
    expect(home().defenses().buildersHut().first()!.levels[1].townHallRequired).toBe(14);
  });

  it('level 7 dps is 165', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].stats.normal.dps).toBe(165);
  });

  it('level 7 damage per shot is 66', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].stats.normal.damagePerShot).toBe(66);
  });

  it('level 7 repair per second is 90', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].stats.builder?.repairPerSecond).toBe(
      90,
    );
  });

  it('level 7 repair per hit is 67.5', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].stats.builder?.repairPerHit).toBe(
      67.5,
    );
  });

  it('level 7 has correct hitpoints', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].hitpoints).toBe(2000);
  });

  it('level 7 requires TH 17', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].townHallRequired).toBe(17);
  });

  it('level 7 build cost is 15,500,000', () => {
    expect(home().defenses().buildersHut().first()!.levels[6].buildCost).toBe(15500000);
  });

  it('level 7 build time is 9d 12h', () => {
    const bt = home().defenses().buildersHut().first()!.levels[6].buildTime;
    expect(bt.days).toBe(9);
    expect(bt.hours).toBe(12);
    expect(bt.minutes).toBe(0);
    expect(bt.seconds).toBe(0);
  });

  it('is available from TH1 with 5 per town hall', () => {
    const entry = home()
      .defenses()
      .buildersHut()
      .first()!
      .availablePerTownHall.find((e) => e.townHallLevel === 1);
    expect(entry?.count).toBe(5);
  });

  it('has 5 per town hall at TH14', () => {
    const entry = home()
      .defenses()
      .buildersHut()
      .first()!
      .availablePerTownHall.find((e) => e.townHallLevel === 14);
    expect(entry?.count).toBe(5);
  });

  it('has availability entries for all 18 town hall levels', () => {
    expect(home().defenses().buildersHut().first()!.availablePerTownHall).toHaveLength(18);
  });
});

describe("homeDefenses() — Builder's Hut integration", () => {
  it("includes Builder's Hut in all home defenses", () => {
    const names = home()
      .defenses()
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it('byBuilding("Builder\'s Hut") returns 1 result', () => {
    expect(home().defenses().byBuilding("Builder's Hut").count()).toBe(1);
  });

  it('byBuilding is case-insensitive', () => {
    expect(home().defenses().byBuilding("builder's hut").count()).toBe(1);
  });

  it("byTownHall(14) includes Builder's Hut (level 2+ unlocks at TH14)", () => {
    const names = home()
      .defenses()
      .byTownHall(14)
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it("byTownHall(1) includes Builder's Hut (level 1 is TH1)", () => {
    const names = home()
      .defenses()
      .byTownHall(1)
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it("hasGearUp() excludes Builder's Hut", () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain("Builder's Hut");
  });

  it('byDamageType("single") includes Builder\'s Hut', () => {
    const names = home()
      .defenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });
});

describe('buildersHut() supercharge levels', () => {
  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].supercharge).toBe(true);
    expect(home().defenses().buildersHut().first()!.levels[7].level).toBe(1);
    expect(home().defenses().buildersHut().first()!.levels[8].supercharge).toBe(true);
    expect(home().defenses().buildersHut().first()!.levels[8].level).toBe(2);
  });

  it('supercharge 1 turret dps is 172', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].stats.normal.dps).toBe(172);
  });

  it('supercharge 1 turret damagePerShot is 68.8', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].stats.normal.damagePerShot).toBe(
      68.8,
    );
  });

  it('supercharge levels keep builder stats unchanged', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].stats.builder?.repairPerSecond).toBe(
      90,
    );
    expect(home().defenses().buildersHut().first()!.levels[7].stats.builder?.repairPerHit).toBe(
      67.5,
    );
    expect(home().defenses().buildersHut().first()!.levels[8].stats.builder?.repairPerSecond).toBe(
      90,
    );
    expect(home().defenses().buildersHut().first()!.levels[8].stats.builder?.repairPerHit).toBe(
      67.5,
    );
  });

  it('supercharge 1 hp matches max regular level', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].hitpoints).toBe(2000);
  });

  it('supercharge 2 hp increased to 2050', () => {
    expect(home().defenses().buildersHut().first()!.levels[8].hitpoints).toBe(2050);
  });

  it('supercharge levels require TH17', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].townHallRequired).toBe(17);
    expect(home().defenses().buildersHut().first()!.levels[8].townHallRequired).toBe(17);
  });

  it('supercharge levels have normal and active images', () => {
    expect(home().defenses().buildersHut().first()!.levels[7].images.normal).toBeTruthy();
    expect(home().defenses().buildersHut().first()!.levels[7].images.active).toBeTruthy();
    expect(home().defenses().buildersHut().first()!.levels[8].images.normal).toBeTruthy();
    expect(home().defenses().buildersHut().first()!.levels[8].images.active).toBeTruthy();
  });
});
