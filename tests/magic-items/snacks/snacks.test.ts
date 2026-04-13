import { magicItems } from '@/magic-items';
import { ClanCastleEffect, CombatBoostEffect, MagicSnack, TimeReductionEffect } from '@/types';

describe('magicItems().snacks()', () => {
  const snacks = magicItems().snacks();

  it('count() returns 5', () => {
    expect(snacks.count()).toBe(5);
  });

  it('get() returns all 5 snacks', () => {
    expect(snacks.get()).toHaveLength(5);
  });

  it('find() locates by id', () => {
    expect(snacks.find('builder-bite')?.name).toBe('Builder Bite');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(snacks.findByName('study soup')?.id).toBe('study-soup');
  });

  it('byEffectType("time-reduction") returns 2 snacks', () => {
    expect(snacks.byEffectType('time-reduction').count()).toBe(2);
  });

  it('byEffectType("combat-boost") returns 2 snacks', () => {
    expect(snacks.byEffectType('combat-boost').count()).toBe(2);
  });

  it('byEffectType("clan-castle") returns 1 snack', () => {
    expect(snacks.byEffectType('clan-castle').count()).toBe(1);
  });

  it('all snacks have itemType "snack"', () => {
    for (const s of snacks.get()) {
      expect(s.itemType).toBe('snack');
    }
  });

  it('all snacks have a non-empty description', () => {
    for (const s of snacks.get()) {
      expect(s.description.length).toBeGreaterThan(0);
    }
  });

  it('all snacks have a valid image path', () => {
    for (const s of snacks.get()) {
      expect(s.image).toMatch(/^images\/magic-items\/snacks\/.+\.png$/);
    }
  });
});

// ── builderBite ──────────────────────────────────────────────────────────────

describe('snacks().builderBite()', () => {
  const item = magicItems().snacks().builderBite().first()! as MagicSnack;

  it('has correct identity', () => {
    expect(item.id).toBe('builder-bite');
    expect(item.name).toBe('Builder Bite');
    expect(item.itemType).toBe('snack');
  });

  it('has time-reduction effect', () => {
    expect(item.effect.type).toBe('time-reduction');
    const e = item.effect as TimeReductionEffect;
    expect(e.multiplier).toBe(2);
    expect(e.durationHours).toBe(1);
    expect(e.appliesTo).toBe('builders');
  });
});

// ── studySoup ────────────────────────────────────────────────────────────────

describe('snacks().studySoup()', () => {
  const item = magicItems().snacks().studySoup().first()! as MagicSnack;

  it('has correct identity', () => {
    expect(item.id).toBe('study-soup');
    expect(item.name).toBe('Study Soup');
  });

  it('has time-reduction effect with 4x multiplier on research', () => {
    const e = item.effect as TimeReductionEffect;
    expect(e.type).toBe('time-reduction');
    expect(e.multiplier).toBe(4);
    expect(e.appliesTo).toBe('research');
  });
});

// ── mightyMorsel ─────────────────────────────────────────────────────────────

describe('snacks().mightyMorsel()', () => {
  const item = magicItems().snacks().mightyMorsel().first()! as MagicSnack;

  it('has correct identity', () => {
    expect(item.id).toBe('mighty-morsel');
    expect(item.name).toBe('Mighty Morsel');
  });

  it('has combat-boost effect for 3 battles on heroes/pets/equipment', () => {
    const e = item.effect as CombatBoostEffect;
    expect(e.type).toBe('combat-boost');
    expect(e.boostTo).toBe('max-town-hall-level');
    expect(e.battles).toBe(3);
    expect(e.appliesTo).toEqual(['heroes', 'pets', 'equipment']);
  });
});

// ── powerPancakes ─────────────────────────────────────────────────────────────

describe('snacks().powerPancakes()', () => {
  const item = magicItems().snacks().powerPancakes().first()! as MagicSnack;

  it('has correct identity', () => {
    expect(item.id).toBe('power-pancakes');
    expect(item.name).toBe('Power Pancakes');
  });

  it('has combat-boost effect for 3 battles on troops/spells/siege-machines', () => {
    const e = item.effect as CombatBoostEffect;
    expect(e.type).toBe('combat-boost');
    expect(e.battles).toBe(3);
    expect(e.appliesTo).toEqual(['troops', 'spells', 'siege-machines']);
  });
});

// ── clanCastleCake ────────────────────────────────────────────────────────────

describe('snacks().clanCastleCake()', () => {
  const item = magicItems().snacks().clanCastleCake().first()! as MagicSnack;

  it('has correct identity', () => {
    expect(item.id).toBe('clan-castle-cake');
    expect(item.name).toBe('Clan Castle Cake');
  });

  it('has clan-castle effect for 12 hours', () => {
    const e = item.effect as ClanCastleEffect;
    expect(e.type).toBe('clan-castle');
    expect(e.durationHours).toBe(12);
    expect(e.appliesTo).toBe('clan-castle-reinforcements');
  });
});
