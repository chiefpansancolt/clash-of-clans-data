import { magicItems } from '@/magic-items';
import { TimeReductionEffect, UnitLevelBoostEffect } from '@/types';

describe('magicItems().potions()', () => {
  const potions = magicItems().potions();

  it('count() returns 8', () => {
    expect(potions.count()).toBe(8);
  });

  it('get() returns all 8 potions', () => {
    expect(potions.get()).toHaveLength(8);
  });

  it('find() locates by id', () => {
    expect(potions.find('builder-potion')?.name).toBe('Builder Potion');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(potions.findByName('hero potion')?.id).toBe('hero-potion');
  });

  it('byEffectType("time-reduction") returns 3 potions', () => {
    expect(potions.byEffectType('time-reduction').count()).toBe(3);
  });

  it('byEffectType("unit-level-boost") returns 2 potions', () => {
    expect(potions.byEffectType('unit-level-boost').count()).toBe(2);
  });

  it('byEffectType("resource-collector-boost") returns 1 potion', () => {
    expect(potions.byEffectType('resource-collector-boost').count()).toBe(1);
  });

  it('byEffectType("clock-tower-boost") returns 1 potion', () => {
    expect(potions.byEffectType('clock-tower-boost').count()).toBe(1);
  });

  it('byEffectType("super-troop") returns 1 potion', () => {
    expect(potions.byEffectType('super-troop').count()).toBe(1);
  });

  it('all potions have itemType "potion"', () => {
    for (const p of potions.get()) {
      expect(p.itemType).toBe('potion');
    }
  });

  it('all potions have a non-empty description', () => {
    for (const p of potions.get()) {
      expect(p.description.length).toBeGreaterThan(0);
    }
  });

  it('all potions have a valid image path', () => {
    for (const p of potions.get()) {
      expect(p.image).toMatch(/^images\/magic-items\/potions\/.+\.png$/);
    }
  });
});

// ── builderPotion ─────────────────────────────────────────────────────────────

describe('potions().builderPotion()', () => {
  const item = magicItems().potions().builderPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('builder-potion');
    expect(item.name).toBe('Builder Potion');
    expect(item.itemType).toBe('potion');
  });

  it('has time-reduction effect with 10x multiplier on builders', () => {
    const e = item.effect as TimeReductionEffect;
    expect(e.type).toBe('time-reduction');
    expect(e.multiplier).toBe(10);
    expect(e.durationHours).toBe(1);
    expect(e.appliesTo).toBe('builders');
  });
});

// ── researchPotion ────────────────────────────────────────────────────────────

describe('potions().researchPotion()', () => {
  const item = magicItems().potions().researchPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('research-potion');
    expect(item.name).toBe('Research Potion');
  });

  it('has time-reduction effect with 24x multiplier on research', () => {
    const e = item.effect as TimeReductionEffect;
    expect(e.type).toBe('time-reduction');
    expect(e.multiplier).toBe(24);
    expect(e.appliesTo).toBe('research');
  });
});

// ── petPotion ─────────────────────────────────────────────────────────────────

describe('potions().petPotion()', () => {
  const item = magicItems().potions().petPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('pet-potion');
    expect(item.name).toBe('Pet Potion');
  });

  it('has time-reduction effect with 24x multiplier on pets', () => {
    const e = item.effect as TimeReductionEffect;
    expect(e.type).toBe('time-reduction');
    expect(e.multiplier).toBe(24);
    expect(e.appliesTo).toBe('pets');
  });
});

// ── heroPotion ────────────────────────────────────────────────────────────────

describe('potions().heroPotion()', () => {
  const item = magicItems().potions().heroPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('hero-potion');
    expect(item.name).toBe('Hero Potion');
  });

  it('has unit-level-boost effect for 1h on heroes and pets', () => {
    const e = item.effect as UnitLevelBoostEffect;
    expect(e.type).toBe('unit-level-boost');
    expect(e.boostTo).toBe('max-town-hall-level');
    expect(e.durationHours).toBe(1);
    expect(e.appliesTo).toEqual(['heroes', 'pets']);
  });
});

// ── powerPotion ───────────────────────────────────────────────────────────────

describe('potions().powerPotion()', () => {
  const item = magicItems().potions().powerPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('power-potion');
    expect(item.name).toBe('Power Potion');
  });

  it('has unit-level-boost effect for 1h on troops/spells/siege-machines', () => {
    const e = item.effect as UnitLevelBoostEffect;
    expect(e.type).toBe('unit-level-boost');
    expect(e.durationHours).toBe(1);
    expect(e.appliesTo).toEqual(['troops', 'spells', 'siege-machines']);
  });
});

// ── resourcePotion ────────────────────────────────────────────────────────────

describe('potions().resourcePotion()', () => {
  const item = magicItems().potions().resourcePotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('resource-potion');
    expect(item.name).toBe('Resource Potion');
  });

  it('has resource-collector-boost effect for 1 day at 2x', () => {
    expect(item.effect.type).toBe('resource-collector-boost');
    const e = item.effect as { type: string; multiplier: number; durationDays: number };
    expect(e.multiplier).toBe(2);
    expect(e.durationDays).toBe(1);
  });
});

// ── clockTowerPotion ──────────────────────────────────────────────────────────

describe('potions().clockTowerPotion()', () => {
  const item = magicItems().potions().clockTowerPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('clock-tower-potion');
    expect(item.name).toBe('Clock Tower Potion');
  });

  it('has clock-tower-boost effect for 30 minutes', () => {
    expect(item.effect.type).toBe('clock-tower-boost');
    const e = item.effect as { type: string; durationMinutes: number };
    expect(e.durationMinutes).toBe(30);
  });
});

// ── superPotion ───────────────────────────────────────────────────────────────

describe('potions().superPotion()', () => {
  const item = magicItems().potions().superPotion().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('super-potion');
    expect(item.name).toBe('Super Potion');
  });

  it('has super-troop effect for 3 days', () => {
    expect(item.effect.type).toBe('super-troop');
    const e = item.effect as { type: string; durationDays: number };
    expect(e.durationDays).toBe(3);
  });
});
