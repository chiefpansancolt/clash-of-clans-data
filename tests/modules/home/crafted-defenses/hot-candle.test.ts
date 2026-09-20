import { home } from '@/modules/home';

describe('hotCandle()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().hotCandle().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hot-candle');
    expect(result.name).toBe('Hot Candle');
  });

  it('base is home', () => {
    expect(home().craftedDefenses().hotCandle().first()!.base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(home().craftedDefenses().hotCandle().first()!.category).toBe('crafted-defense');
  });

  it('size is 3x3', () => {
    expect(home().craftedDefenses().hotCandle().first()!.size).toBe('3x3');
  });

  it('craftingPhase is 4', () => {
    expect(home().craftedDefenses().hotCandle().first()!.craftingPhase).toBe(4);
  });

  it('isCurrent is true', () => {
    expect(home().craftedDefenses().hotCandle().first()!.isCurrent).toBe(true);
  });

  it('is found by current()', () => {
    expect(home().craftedDefenses().current().find('hot-candle')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(home().craftedDefenses().former().find('hot-candle')).toBeUndefined();
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().hotCandle().first()!.targetType).toBe('both');
  });

  it('has fixed stats for range, attack speed and target counts', () => {
    const stats = home().craftedDefenses().hotCandle().first()!.stats!;
    expect(stats['range']).toBe(10.5);
    expect(stats['attackSpeed']).toBe(0.5);
    expect(stats['damageType']).toBe('single');
    expect(stats['targetsBaseForm']).toBe(6);
    expect(stats['targetsFirstDecay']).toBe(4);
    expect(stats['targetsSecondDecay']).toBe(3);
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().hotCandle().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .hotCandle()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints, paid in Elixir', () => {
    const mod = home().craftedDefenses().hotCandle().first()!.modules[0];
    expect(mod.name).toBe('Hitpoints');
    expect(mod.upgrades[1].buildCostResource).toBe('Elixir');
  });

  it('Module 1 level 1 stat (HP) is 1600 and level 10 is 6000', () => {
    const mod = home().craftedDefenses().hotCandle().first()!.modules[0];
    expect(mod.upgrades[0].stat).toBe(1600);
    expect(mod.upgrades[9].stat).toBe(6000);
  });

  it('Module 1 level 10 costs 13,000,000 Elixir, 9d 12h, 905 XP, 8 sparky stones', () => {
    const up = home().craftedDefenses().hotCandle().first()!.modules[0].upgrades[9];
    expect(up.buildCost).toBe(13000000);
    expect(up.buildTime).toEqual({ days: 9, hours: 12, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(905);
    expect(up.sparkyStones).toBe(8);
  });

  it('Module 2 is Damage, paid in Gold', () => {
    const mod = home().craftedDefenses().hotCandle().first()!.modules[1];
    expect(mod.name).toBe('Damage');
    expect(mod.upgrades[1].buildCostResource).toBe('Gold');
  });

  it('Module 2 level 1 is 80 DPS / 40 per hit and level 10 is 250 DPS / 125 per hit', () => {
    const mod = home().craftedDefenses().hotCandle().first()!.modules[1];
    expect(mod.upgrades[0].stat).toBe(80);
    expect(mod.upgrades[0].extraStats?.['damagePerHit']).toBe(40);
    expect(mod.upgrades[9].stat).toBe(250);
    expect(mod.upgrades[9].extraStats?.['damagePerHit']).toBe(125);
  });

  it('Module 3 is Seconds Active, paid in Dark Elixir', () => {
    const mod = home().craftedDefenses().hotCandle().first()!.modules[2];
    expect(mod.name).toBe('Seconds Active');
    expect(mod.upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 3 level 1: base form 59s, first decay 60-94s, second decay 95s+', () => {
    const up = home().craftedDefenses().hotCandle().first()!.modules[2].upgrades[0];
    expect(up.stat).toBe(59);
    expect(up.extraStats).toEqual({
      firstDecayStartSeconds: 60,
      firstDecayEndSeconds: 94,
      secondDecayStartSeconds: 95,
    });
  });

  it('Module 3 level 10: base form 77s, first decay 78-131s, second decay 132s+', () => {
    const up = home().craftedDefenses().hotCandle().first()!.modules[2].upgrades[9];
    expect(up.stat).toBe(77);
    expect(up.extraStats).toEqual({
      firstDecayStartSeconds: 78,
      firstDecayEndSeconds: 131,
      secondDecayStartSeconds: 132,
    });
    expect(up.buildCost).toBe(110000);
    expect(up.buildTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(881);
  });

  it('level 1 upgrades are free with no sparky stones', () => {
    home()
      .craftedDefenses()
      .hotCandle()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });

  it('has 4 image entries covering effective levels 3–11, 12–20, 21–29 and 30', () => {
    const images = home().craftedDefenses().hotCandle().first()!.images;
    expect(images).toHaveLength(4);
    expect(images.map((i) => [i.fromEffectiveLevel, i.toEffectiveLevel])).toEqual([
      [3, 11],
      [12, 20],
      [21, 29],
      [30, 30],
    ]);
    images.forEach((i) => expect(i.normal).toBeTruthy());
  });
});
