import { magicItems } from '@/magic-items';
import { InstantUpgradeEffect } from '@/types';

describe('magicItems().hammers()', () => {
  const hammers = magicItems().hammers();

  it('count() returns 4', () => {
    expect(hammers.count()).toBe(4);
  });

  it('get() returns all 4 hammers', () => {
    expect(hammers.get()).toHaveLength(4);
  });

  it('find() locates by id', () => {
    expect(hammers.find('hammer-of-heroes')?.name).toBe('Hammer of Heroes');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(hammers.findByName('hammer of building')?.id).toBe('hammer-of-building');
  });

  it('byAppliesTo("troops") returns Hammer of Fighting', () => {
    const result = hammers.byAppliesTo('troops');
    expect(result.count()).toBe(1);
    expect(result.first()!.id).toBe('hammer-of-fighting');
  });

  it('byAppliesTo("heroes-and-pets") returns Hammer of Heroes', () => {
    const result = hammers.byAppliesTo('heroes-and-pets');
    expect(result.count()).toBe(1);
    expect(result.first()!.id).toBe('hammer-of-heroes');
  });

  it('all hammers have itemType "hammer"', () => {
    for (const h of hammers.get()) {
      expect(h.itemType).toBe('hammer');
    }
  });

  it('all hammers have effect type "instant-upgrade"', () => {
    for (const h of hammers.get()) {
      expect(h.effect.type).toBe('instant-upgrade');
    }
  });

  it('all hammers have a valid image path', () => {
    for (const h of hammers.get()) {
      expect(h.image).toMatch(/^images\/magic-items\/hammers\/.+\.png$/);
    }
  });
});

// ── Individual hammers ────────────────────────────────────────────────────────

describe('hammers().hammerOfFighting()', () => {
  const item = magicItems().hammers().hammerOfFighting().first()!;

  it('has correct identity and applies to troops', () => {
    expect(item.id).toBe('hammer-of-fighting');
    const e = item.effect as InstantUpgradeEffect;
    expect(e.appliesTo).toBe('troops');
  });
});

describe('hammers().hammerOfBuilding()', () => {
  const item = magicItems().hammers().hammerOfBuilding().first()!;

  it('has correct identity and applies to buildings', () => {
    expect(item.id).toBe('hammer-of-building');
    const e = item.effect as InstantUpgradeEffect;
    expect(e.appliesTo).toBe('buildings');
  });
});

describe('hammers().hammerOfSpells()', () => {
  const item = magicItems().hammers().hammerOfSpells().first()!;

  it('has correct identity and applies to spells', () => {
    expect(item.id).toBe('hammer-of-spells');
    const e = item.effect as InstantUpgradeEffect;
    expect(e.appliesTo).toBe('spells');
  });
});

describe('hammers().hammerOfHeroes()', () => {
  const item = magicItems().hammers().hammerOfHeroes().first()!;

  it('has correct identity and applies to heroes-and-pets', () => {
    expect(item.id).toBe('hammer-of-heroes');
    const e = item.effect as InstantUpgradeEffect;
    expect(e.appliesTo).toBe('heroes-and-pets');
  });
});
