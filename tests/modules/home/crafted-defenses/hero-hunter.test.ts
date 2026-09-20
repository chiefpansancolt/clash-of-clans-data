import { home } from '@/modules/home';

describe('heroHunter()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().heroHunter().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hero-hunter');
    expect(result.name).toBe('Hero Hunter');
  });

  it('base is home', () => {
    expect(home().craftedDefenses().heroHunter().first()!.base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(home().craftedDefenses().heroHunter().first()!.category).toBe('crafted-defense');
  });

  it('size is 3x3', () => {
    expect(home().craftedDefenses().heroHunter().first()!.size).toBe('3x3');
  });

  it('craftingPhase is 4', () => {
    expect(home().craftedDefenses().heroHunter().first()!.craftingPhase).toBe(4);
  });

  it('isCurrent is true', () => {
    expect(home().craftedDefenses().heroHunter().first()!.isCurrent).toBe(true);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().heroHunter().first()!.targetType).toBe('both');
  });

  it('has fixed stats for range, attack speed, target preference and poison duration', () => {
    const stats = home().craftedDefenses().heroHunter().first()!.stats!;
    expect(stats['range']).toBe(9.5);
    expect(stats['attackSpeed']).toBe(0.6);
    expect(stats['damageType']).toBe('single');
    expect(stats['favoriteTarget']).toBe('Heroes');
    expect(stats['heroDamageMultiplier']).toBe(2);
    expect(stats['poisonDuration']).toBe(3);
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().heroHunter().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .heroHunter()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints, paid in Dark Elixir', () => {
    const mod = home().craftedDefenses().heroHunter().first()!.modules[0];
    expect(mod.name).toBe('Hitpoints');
    expect(mod.upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 1 level 1 stat (HP) is 1600 and level 10 is 6000', () => {
    const mod = home().craftedDefenses().heroHunter().first()!.modules[0];
    expect(mod.upgrades[0].stat).toBe(1600);
    expect(mod.upgrades[9].stat).toBe(6000);
  });

  it('Module 1 level 10 costs 120,000 Dark Elixir, 10d, 929 XP, 8 sparky stones', () => {
    const up = home().craftedDefenses().heroHunter().first()!.modules[0].upgrades[9];
    expect(up.buildCost).toBe(120000);
    expect(up.buildTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(929);
    expect(up.sparkyStones).toBe(8);
  });

  it('Module 2 is Damage, paid in Elixir', () => {
    const mod = home().craftedDefenses().heroHunter().first()!.modules[1];
    expect(mod.name).toBe('Damage');
    expect(mod.upgrades[1].buildCostResource).toBe('Elixir');
  });

  it('Module 2 level 1: 145 DPS, 87 per hit, 290 DPS on Heroes', () => {
    const up = home().craftedDefenses().heroHunter().first()!.modules[1].upgrades[0];
    expect(up.stat).toBe(145);
    expect(up.extraStats).toEqual({ damagePerHit: 87, dpsOnHeroes: 290 });
  });

  it('Module 2 level 10: 385 DPS, 231 per hit, 770 DPS on Heroes, 11,000,000 Elixir, 9d, 881 XP', () => {
    const up = home().craftedDefenses().heroHunter().first()!.modules[1].upgrades[9];
    expect(up.stat).toBe(385);
    expect(up.extraStats).toEqual({ damagePerHit: 231, dpsOnHeroes: 770 });
    expect(up.buildCost).toBe(11000000);
    expect(up.buildTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(881);
  });

  it('Module 3 is Poison Level, paid in Gold', () => {
    const mod = home().craftedDefenses().heroHunter().first()!.modules[2];
    expect(mod.name).toBe('Poison Level');
    expect(mod.upgrades[1].buildCostResource).toBe('Gold');
  });

  it('Module 3 poison spell level goes from 3 to 12', () => {
    const mod = home().craftedDefenses().heroHunter().first()!.modules[2];
    expect(mod.upgrades[0].stat).toBe(3);
    expect(mod.upgrades[9].stat).toBe(12);
  });

  it('Module 3 level 10 costs 13,000,000 Gold, 9d 12h, 905 XP', () => {
    const up = home().craftedDefenses().heroHunter().first()!.modules[2].upgrades[9];
    expect(up.buildCost).toBe(13000000);
    expect(up.buildTime).toEqual({ days: 9, hours: 12, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(905);
  });

  it('level 1 upgrades are free with no sparky stones', () => {
    home()
      .craftedDefenses()
      .heroHunter()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });

  it('has 4 image entries covering effective levels 3–11, 12–20, 21–29 and 30', () => {
    const images = home().craftedDefenses().heroHunter().first()!.images;
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
