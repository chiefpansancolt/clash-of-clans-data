import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { buildersHut } from '@/modules/home/defenses/builders-hut';
import { testFilterImmutability } from '../../../helpers';

// ── buildersHut() ─────────────────────────────────────────────────────────────

describe('buildersHut()', () => {
  it('returns a HomeDefense object', () => {
    const result = buildersHut();
    expect(result).toBeDefined();
    expect(result.id).toBe('builders-hut');
    expect(result.name).toBe("Builder's Hut");
  });

  it('has 7 levels', () => {
    expect(buildersHut().levels).toHaveLength(7);
  });

  it('targets both ground and air', () => {
    expect(buildersHut().targetType).toBe('both');
  });

  it('size is 2x2', () => {
    expect(buildersHut().size).toBe('2x2');
  });

  it('has no gear-up', () => {
    expect(buildersHut().gearUp).toBeUndefined();
  });

  // ── normal mode ───────────────────────────────────────────────────────────

  it('normal mode has range 7', () => {
    expect(buildersHut().modes.normal.range).toBe(7);
  });

  it('normal mode attack speed is 0.4', () => {
    expect(buildersHut().modes.normal.attackSpeed).toBe(0.4);
  });

  it('normal mode is single-target damage', () => {
    expect(buildersHut().modes.normal.damageType).toBe('single');
  });

  // ── builder mode ──────────────────────────────────────────────────────────

  it('has a builder mode', () => {
    expect(buildersHut().modes.builder).toBeDefined();
  });

  it('builder mode has range 7', () => {
    expect(buildersHut().modes.builder?.range).toBe(7);
  });

  it('builder mode repair speed is 0.75', () => {
    expect(buildersHut().modes.builder?.repairSpeed).toBe(0.75);
  });

  it('builder mode movement speed is 20', () => {
    expect(buildersHut().modes.builder?.movementSpeed).toBe(20);
  });

  // ── placement costs ───────────────────────────────────────────────────────

  it('has placement costs for all 5 builder instances', () => {
    expect(buildersHut().placementCosts).toHaveLength(5);
  });

  it('1st builder is free', () => {
    const first = buildersHut().placementCosts![0];
    expect(first.instance).toBe(1);
    expect(first.cost).toBe(0);
  });

  it('2nd builder costs 250 Gems', () => {
    const second = buildersHut().placementCosts![1];
    expect(second.instance).toBe(2);
    expect(second.cost).toBe(250);
    expect(second.costResource).toBe('Gems');
  });

  it('3rd builder costs 500 Gems', () => {
    const third = buildersHut().placementCosts![2];
    expect(third.instance).toBe(3);
    expect(third.cost).toBe(500);
    expect(third.costResource).toBe('Gems');
  });

  it('4th builder costs 1000 Gems', () => {
    const fourth = buildersHut().placementCosts![3];
    expect(fourth.instance).toBe(4);
    expect(fourth.cost).toBe(1000);
    expect(fourth.costResource).toBe('Gems');
  });

  it('5th builder costs 2000 Gems', () => {
    const fifth = buildersHut().placementCosts![4];
    expect(fifth.instance).toBe(5);
    expect(fifth.cost).toBe(2000);
    expect(fifth.costResource).toBe('Gems');
  });

  // ── level 1 (no combat stats) ─────────────────────────────────────────────

  it('level 1 has correct hitpoints', () => {
    expect(buildersHut().levels[0].hitpoints).toBe(250);
  });

  it('level 1 has no build cost (placed)', () => {
    expect(buildersHut().levels[0].buildCost).toBe(0);
  });

  it('level 1 has instant build time', () => {
    const bt = buildersHut().levels[0].buildTime;
    expect(bt.days).toBe(0);
    expect(bt.hours).toBe(0);
    expect(bt.minutes).toBe(0);
    expect(bt.seconds).toBe(0);
  });

  it('level 1 requires TH 1', () => {
    expect(buildersHut().levels[0].townHallRequired).toBe(1);
  });

  it('level 1 has no combat dps', () => {
    expect(buildersHut().levels[0].stats.normal.dps).toBeUndefined();
  });

  it('level 1 has no builder repair stats', () => {
    expect(buildersHut().levels[0].stats.builder).toBeUndefined();
  });

  it('level 1 has no active image', () => {
    expect(buildersHut().levels[0].images.active).toBeUndefined();
  });

  // ── level 2 stats ─────────────────────────────────────────────────────────

  it('level 2 dps is 80', () => {
    expect(buildersHut().levels[1].stats.normal.dps).toBe(80);
  });

  it('level 2 damage per shot is 32', () => {
    expect(buildersHut().levels[1].stats.normal.damagePerShot).toBe(32);
  });

  it('level 2 repair per second is 50', () => {
    expect(buildersHut().levels[1].stats.builder?.repairPerSecond).toBe(50);
  });

  it('level 2 repair per hit is 37.5', () => {
    expect(buildersHut().levels[1].stats.builder?.repairPerHit).toBe(37.5);
  });

  it('level 2 has correct hitpoints', () => {
    expect(buildersHut().levels[1].hitpoints).toBe(1000);
  });

  it('level 2 has active image', () => {
    expect(buildersHut().levels[1].images.active).toBe(
      'images/home/defenses/builders-hut/active/level-2.png',
    );
  });

  it('level 2 requires TH 14', () => {
    expect(buildersHut().levels[1].townHallRequired).toBe(14);
  });

  // ── level 7 stats ─────────────────────────────────────────────────────────

  it('level 7 dps is 165', () => {
    expect(buildersHut().levels[6].stats.normal.dps).toBe(165);
  });

  it('level 7 damage per shot is 66', () => {
    expect(buildersHut().levels[6].stats.normal.damagePerShot).toBe(66);
  });

  it('level 7 repair per second is 90', () => {
    expect(buildersHut().levels[6].stats.builder?.repairPerSecond).toBe(90);
  });

  it('level 7 repair per hit is 67.5', () => {
    expect(buildersHut().levels[6].stats.builder?.repairPerHit).toBe(67.5);
  });

  it('level 7 has correct hitpoints', () => {
    expect(buildersHut().levels[6].hitpoints).toBe(2000);
  });

  it('level 7 requires TH 17', () => {
    expect(buildersHut().levels[6].townHallRequired).toBe(17);
  });

  it('level 7 build cost is 15,500,000', () => {
    expect(buildersHut().levels[6].buildCost).toBe(15500000);
  });

  it('level 7 build time is 9d 12h', () => {
    const bt = buildersHut().levels[6].buildTime;
    expect(bt.days).toBe(9);
    expect(bt.hours).toBe(12);
    expect(bt.minutes).toBe(0);
    expect(bt.seconds).toBe(0);
  });

  // ── availablePerTownHall ──────────────────────────────────────────────────

  it('is available from TH1 with 5 per town hall', () => {
    const entry = buildersHut().availablePerTownHall.find((e) => e.townHallLevel === 1);
    expect(entry?.count).toBe(5);
  });

  it('has 5 per town hall at TH14', () => {
    const entry = buildersHut().availablePerTownHall.find((e) => e.townHallLevel === 14);
    expect(entry?.count).toBe(5);
  });

  it('has availability entries for all 18 town hall levels', () => {
    expect(buildersHut().availablePerTownHall).toHaveLength(18);
  });
});

// ── homeDefenses() ────────────────────────────────────────────────────────────

describe("homeDefenses() — Builder's Hut integration", () => {
  it("includes Builder's Hut in all home defenses", () => {
    const names = homeDefenses()
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it('byBuilding("Builder\'s Hut") returns 1 result', () => {
    expect(homeDefenses().byBuilding("Builder's Hut").count()).toBe(1);
  });

  it('byBuilding is case-insensitive', () => {
    expect(homeDefenses().byBuilding("builder's hut").count()).toBe(1);
  });

  it("byTownHall(14) includes Builder's Hut (level 2+ unlocks at TH14)", () => {
    const names = homeDefenses()
      .byTownHall(14)
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it("byTownHall(1) includes Builder's Hut (level 1 is TH1)", () => {
    const names = homeDefenses()
      .byTownHall(1)
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  it("hasGearUp() excludes Builder's Hut", () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain("Builder's Hut");
  });

  it('byDamageType("single") includes Builder\'s Hut', () => {
    const names = homeDefenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).toContain("Builder's Hut");
  });

  testFilterImmutability(
    'homeDefenses().byBuilding("Builder\'s Hut")',
    () => homeDefenses() as HomeDefenseQuery,
    (q) => (q as HomeDefenseQuery).byBuilding("Builder's Hut"),
  );
});
