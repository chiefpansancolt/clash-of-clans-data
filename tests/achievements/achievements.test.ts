import { achievements } from '@/achievements';

describe('achievements()', () => {
  const all = achievements();

  it('count() returns 58', () => {
    expect(all.count()).toBe(58);
  });

  it('get() returns all 58 achievements', () => {
    expect(all.get()).toHaveLength(58);
  });

  it('find() locates by id', () => {
    expect(all.find('gold-grab')?.name).toBe('Gold Grab');
  });

  it('findByName() locates case-insensitively', () => {
    expect(all.findByName('war hero')?.id).toBe('war-hero');
  });

  it('all achievements have a non-empty id', () => {
    for (const a of all.get()) {
      expect(a.id.length).toBeGreaterThan(0);
    }
  });

  it('all achievements have at least one tier', () => {
    for (const a of all.get()) {
      expect(a.tiers.length).toBeGreaterThan(0);
    }
  });

  it('all tier numbers are sequential from 1', () => {
    for (const a of all.get()) {
      a.tiers.forEach((t, i) => {
        expect(t.tier).toBe(i + 1);
      });
    }
  });
});

describe('achievements().byBase()', () => {
  it('home returns 50 achievements', () => {
    expect(achievements().byBase('home').count()).toBe(50);
  });

  it('builder returns 6 achievements', () => {
    expect(achievements().byBase('builder').count()).toBe(6);
  });

  it('clan-capital returns 2 achievements', () => {
    expect(achievements().byBase('clan-capital').count()).toBe(2);
  });
});

describe('achievements().byTierCount()', () => {
  it('single-tier achievements exist', () => {
    const singles = achievements().byTierCount(1);
    expect(singles.count()).toBeGreaterThan(0);
    for (const a of singles.get()) {
      expect(a.tiers).toHaveLength(1);
    }
  });

  it('most achievements have 3 tiers', () => {
    expect(achievements().byTierCount(3).count()).toBeGreaterThan(40);
  });
});

describe('achievements().byDataInvolved()', () => {
  it('finds gold loot achievements', () => {
    const result = achievements().byDataInvolved('gold');
    expect(result.count()).toBeGreaterThan(0);
  });
});

describe('individual achievement tiers', () => {
  it('Gold Grab tier 1 requires 20000', () => {
    const a = achievements().find('gold-grab')!;
    expect(a.tiers[0].requirement).toBe(20000);
    expect(a.tiers[0].gemsRewarded).toBe(5);
  });

  it('Bigger & Better has 3 tiers with correct requirements', () => {
    const a = achievements().find('bigger-and-better')!;
    expect(a.tiers).toHaveLength(3);
    expect(a.tiers[0].requirement).toBe(3);
    expect(a.tiers[1].requirement).toBe(5);
    expect(a.tiers[2].requirement).toBe(8);
  });

  it('Heroic Heist has 5 tiers', () => {
    expect(achievements().find('heroic-heist')!.tiers).toHaveLength(5);
  });

  it('Master Engineering is a builder achievement', () => {
    const a = achievements().find('master-engineering')!;
    expect(a.base).toBe('builder');
  });

  it('Aggressive Capitalism is a clan-capital achievement', () => {
    const a = achievements().find('aggressive-capitalism')!;
    expect(a.base).toBe('clan-capital');
  });
});
