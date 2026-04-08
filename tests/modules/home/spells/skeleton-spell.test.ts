import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Skeleton Spell ───────────────────────────────────────────────────────────

describe('skeletonSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().skeletonSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('skeleton-spell');
    expect(s.name).toBe('Skeleton Spell');
  });

  it('has 8 levels', () => {
    expect(home().spells().skeletonSpell().first()!.levels).toHaveLength(8);
  });

  it('is a dark spell', () => {
    expect(home().spells().skeletonSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 1, targetType ground, radius 3.5', () => {
    const s = home().spells().skeletonSpell().first()!;
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('ground');
    expect(s.radius).toBe(3.5);
  });

  it('requires Dark Spell Factory level 4', () => {
    expect(home().spells().skeletonSpell().first()!.spellFactoryLevelRequired).toBe(4);
  });

  it('has an icon image', () => {
    expect(home().spells().skeletonSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: skeletonsGenerated 12, no research, TH9', () => {
    const lvl = home().spells().skeletonSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.skeletonsGenerated).toBe(12);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: skeletonsGenerated 15, Lab 9, TH11, 25000 Dark Elixir, 2d', () => {
    const lvl = home().spells().skeletonSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.skeletonsGenerated).toBe(15);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(25000);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 8: skeletonsGenerated 19, Lab 13, TH15, 135000 Dark Elixir, 6d 12h', () => {
    const lvl = home().spells().skeletonSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.skeletonsGenerated).toBe(19);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(135000);
    expect(lvl.researchTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('has skeletonStats with correct values', () => {
    const s = home().spells().skeletonSpell().first()!;
    expect(s.skeletonStats).toBeDefined();
    expect(s.skeletonStats!.movementSpeed).toBe(24);
    expect(s.skeletonStats!.attackSpeed).toBe(1);
    expect(s.skeletonStats!.range).toBe(0.4);
    expect(s.skeletonStats!.damagePerSecond).toBe(25);
    expect(s.skeletonStats!.hitpoints).toBe(30);
    expect(s.skeletonStats!.armorHitpoints).toBe(30);
    expect(s.skeletonStats!.preferredTarget).toBe('None');
    expect(s.skeletonStats!.attackType).toBe('Melee (Ground Only)');
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().skeletonSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().skeletonSpell()', () => home().spells().skeletonSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with skeleton spell', () => {
  it('has 14 spells total', () => {
    expect(home().spells().count()).toBe(14);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 4 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(4);
  });

  it('byTownHall(9) includes skeleton spell', () => {
    expect(home().spells().byTownHall(9).find('skeleton-spell')).toBeDefined();
  });

  it('byTownHall(8) does not include skeleton spell', () => {
    expect(home().spells().byTownHall(8).find('skeleton-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("dark")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('dark'),
);

testFilterImmutability(
  'byTownHall(9)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(9),
);
