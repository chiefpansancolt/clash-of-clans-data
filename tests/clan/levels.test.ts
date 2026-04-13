import { clan } from '@/clan';

describe('clan().levels()', () => {
  const levels = clan().levels();

  it('count() returns 20', () => {
    expect(levels.count()).toBe(20);
  });

  it('get() returns all 20 levels', () => {
    expect(levels.get()).toHaveLength(20);
  });

  it('atLevel(1) returns level 1 with null XP', () => {
    const l = levels.atLevel(1)!;
    expect(l.level).toBe(1);
    expect(l.xpRequired).toBeNull();
    expect(l.cumulativeXp).toBeNull();
    expect(l.badge).toBe('bronze');
  });

  it('atLevel(10) has correct XP and gold badge', () => {
    const l = levels.atLevel(10)!;
    expect(l.xpRequired).toBe(7900);
    expect(l.cumulativeXp).toBe(34000);
    expect(l.badge).toBe('gold');
  });

  it('atLevel(20) is the legend tier with correct cumulative XP', () => {
    const l = levels.atLevel(20)!;
    expect(l.badge).toBe('legend');
    expect(l.cumulativeXp).toBe(181600);
  });

  it('atLevel(99) returns undefined', () => {
    expect(levels.atLevel(99)).toBeUndefined();
  });

  it('byBadge("silver") returns levels 5–9', () => {
    const silver = levels.byBadge('silver');
    expect(silver.count()).toBe(5);
    const nums = silver.get().map((l) => l.level);
    expect(nums).toEqual([5, 6, 7, 8, 9]);
  });

  it('all levels have a valid image path', () => {
    for (const l of levels.get()) {
      expect(l.image).toMatch(/^images\/clan\/badges\/level-\d+\.png$/);
    }
  });

  it('all levels have a perks object', () => {
    for (const l of levels.get()) {
      expect(l.perks).toBeDefined();
      expect(l.perks.donationLimit).toBeDefined();
    }
  });

  it('level 5 unlocks 1 donation upgrade level', () => {
    expect(levels.atLevel(5)!.perks.donationUpgradeLevels).toBe(1);
  });

  it('level 10 has max perks', () => {
    const l = levels.atLevel(10)!;
    expect(l.perks.donationUpgradeLevels).toBe(2);
    expect(l.perks.treasuryExtraStorage).toBe(50);
    expect(l.perks.warBonusExtraLoot).toBe(25);
  });
});

describe('clan().labels()', () => {
  const labels = clan().labels();

  it('count() returns 17', () => {
    expect(labels.count()).toBe(17);
  });

  it('find() locates by id', () => {
    expect(labels.find('clan-wars')?.name).toBe('Clan Wars');
  });

  it('findByName() locates case-insensitively', () => {
    expect(labels.findByName('donations')?.id).toBe('donations');
  });

  it('all labels have a valid image path', () => {
    for (const l of labels.get()) {
      expect(l.image).toMatch(/^images\/clan\/labels\/.+\.png$/);
    }
  });
});
