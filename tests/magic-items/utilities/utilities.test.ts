import { magicItems } from '@/magic-items';
import { ObstacleMoveEffect, StarBonusResetEffect, WallUpgradeEffect } from '@/types';

describe('magicItems().utilities()', () => {
  const utilities = magicItems().utilities();

  it('count() returns 3', () => {
    expect(utilities.count()).toBe(3);
  });

  it('find() locates by id', () => {
    expect(utilities.find('shovel-of-obstacles')?.name).toBe('Shovel of Obstacles');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(utilities.findByName('builder star jar')?.id).toBe('builder-star-jar');
  });

  it('byEffectType("obstacle-move") returns 1 item', () => {
    expect(utilities.byEffectType('obstacle-move').count()).toBe(1);
  });

  it('byEffectType("star-bonus-reset") returns 1 item', () => {
    expect(utilities.byEffectType('star-bonus-reset').count()).toBe(1);
  });

  it('byEffectType("wall-upgrade") returns 1 item', () => {
    expect(utilities.byEffectType('wall-upgrade').count()).toBe(1);
  });

  it('all utilities have itemType "utility"', () => {
    for (const u of utilities.get()) {
      expect(u.itemType).toBe('utility');
    }
  });

  it('all utilities have a valid image path', () => {
    for (const u of utilities.get()) {
      expect(u.image).toMatch(/^images\/magic-items\/utilities\/.+\.png$/);
    }
  });
});

// ── shovelOfObstacles ─────────────────────────────────────────────────────────

describe('utilities().shovelOfObstacles()', () => {
  const item = magicItems().utilities().shovelOfObstacles().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('shovel-of-obstacles');
    expect(item.name).toBe('Shovel of Obstacles');
    expect(item.itemType).toBe('utility');
  });

  it('has obstacle-move effect targeting single-obstacle', () => {
    const e = item.effect as ObstacleMoveEffect;
    expect(e.type).toBe('obstacle-move');
    expect(e.targets).toBe('single-obstacle');
  });
});

// ── builderStarJar ────────────────────────────────────────────────────────────

describe('utilities().builderStarJar()', () => {
  const item = magicItems().utilities().builderStarJar().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('builder-star-jar');
    expect(item.name).toBe('Builder Star Jar');
    expect(item.itemType).toBe('utility');
  });

  it('has star-bonus-reset effect for builder-base-star-bonus', () => {
    const e = item.effect as StarBonusResetEffect;
    expect(e.type).toBe('star-bonus-reset');
    expect(e.appliesTo).toBe('builder-base-star-bonus');
  });
});

// ── wallRing ──────────────────────────────────────────────────────────────────

describe('utilities().wallRing()', () => {
  const item = magicItems().utilities().wallRing().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('wall-ring');
    expect(item.name).toBe('Wall Ring');
    expect(item.itemType).toBe('utility');
  });

  it('has wall-upgrade effect with correct equivalents', () => {
    const e = item.effect as WallUpgradeEffect;
    expect(e.type).toBe('wall-upgrade');
    expect(e.homeVillageGoldEquivalent).toBe(1_000_000);
    expect(e.builderBaseGoldEquivalent).toBe(500_000);
  });

  it('has a valid image path', () => {
    expect(item.image).toMatch(/^images\/magic-items\/utilities\/.+\.png$/);
  });
});
