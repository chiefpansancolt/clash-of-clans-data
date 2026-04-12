import { magicItems } from '@/magic-items';
import { InstantCompleteEffect } from '@/types';

describe('magicItems().books()', () => {
  const books = magicItems().books();

  it('count() returns 5', () => {
    expect(books.count()).toBe(5);
  });

  it('get() returns all 5 books', () => {
    expect(books.get()).toHaveLength(5);
  });

  it('find() locates by id', () => {
    expect(books.find('book-of-heroes')?.name).toBe('Book of Heroes');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(books.findByName('book of spells')?.id).toBe('book-of-spells');
  });

  it('byAppliesTo("troops") returns Book of Fighting and Book of Everything', () => {
    const result = books.byAppliesTo('troops');
    expect(result.count()).toBe(2);
    const ids = result.get().map((b) => b.id);
    expect(ids).toContain('book-of-fighting');
    expect(ids).toContain('book-of-everything');
  });

  it('byAppliesTo("any") returns Book of Everything', () => {
    const result = books.byAppliesTo('any');
    expect(result.count()).toBe(1);
    expect(result.first()!.id).toBe('book-of-everything');
  });

  it('all books have itemType "book"', () => {
    for (const b of books.get()) {
      expect(b.itemType).toBe('book');
    }
  });

  it('all books have effect type "instant-complete"', () => {
    for (const b of books.get()) {
      expect(b.effect.type).toBe('instant-complete');
    }
  });

  it('all books have a valid image path', () => {
    for (const b of books.get()) {
      expect(b.image).toMatch(/^images\/magic-items\/books\/.+\.png$/);
    }
  });
});

// ── Individual books ──────────────────────────────────────────────────────────

describe('books().bookOfFighting()', () => {
  const item = magicItems().books().bookOfFighting().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('book-of-fighting');
    expect(item.name).toBe('Book of Fighting');
  });

  it('applies to troops', () => {
    const e = item.effect as InstantCompleteEffect;
    expect(e.appliesTo).toBe('troops');
  });
});

describe('books().bookOfBuilding()', () => {
  const item = magicItems().books().bookOfBuilding().first()!;

  it('has correct identity and applies to buildings', () => {
    expect(item.id).toBe('book-of-building');
    const e = item.effect as InstantCompleteEffect;
    expect(e.appliesTo).toBe('buildings');
  });
});

describe('books().bookOfSpells()', () => {
  const item = magicItems().books().bookOfSpells().first()!;

  it('has correct identity and applies to spells', () => {
    expect(item.id).toBe('book-of-spells');
    const e = item.effect as InstantCompleteEffect;
    expect(e.appliesTo).toBe('spells');
  });
});

describe('books().bookOfHeroes()', () => {
  const item = magicItems().books().bookOfHeroes().first()!;

  it('has correct identity and applies to heroes-and-pets', () => {
    expect(item.id).toBe('book-of-heroes');
    const e = item.effect as InstantCompleteEffect;
    expect(e.appliesTo).toBe('heroes-and-pets');
  });
});

describe('books().bookOfEverything()', () => {
  const item = magicItems().books().bookOfEverything().first()!;

  it('has correct identity and applies to any', () => {
    expect(item.id).toBe('book-of-everything');
    const e = item.effect as InstantCompleteEffect;
    expect(e.appliesTo).toBe('any');
  });
});
