import { home } from '@/modules/home';

describe('cakeAPult()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().cakeAPult().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('cake-a-pult');
    expect(result.name).toBe('Cake-A-Pult');
  });

  it('base is home', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.category).toBe('crafted-defense');
  });

  it('size is 3x3', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.size).toBe('3x3');
  });

  it('craftingPhase is 4', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.craftingPhase).toBe(4);
  });

  it('isCurrent is true', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.isCurrent).toBe(true);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.targetType).toBe('both');
  });

  it('has fixed stats for range, attack speed, splash and bomb', () => {
    const stats = home().craftedDefenses().cakeAPult().first()!.stats!;
    expect(stats['minRange']).toBe(3);
    expect(stats['range']).toBe(12);
    expect(stats['attackSpeed']).toBe(3);
    expect(stats['damageType']).toBe('splash');
    expect(stats['splashRadius']).toBe(2.5);
    expect(stats['bombExplosionRadius']).toBe(2.5);
    expect(stats['bombDetonationDelay']).toBe(3);
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().cakeAPult().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .cakeAPult()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints, paid in Gold', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[0];
    expect(mod.name).toBe('Hitpoints');
    expect(mod.upgrades[1].buildCostResource).toBe('Gold');
  });

  it('Module 1 level 1 stat (HP) is 1600 and level 10 is 5800', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[0];
    expect(mod.upgrades[0].stat).toBe(1600);
    expect(mod.upgrades[9].stat).toBe(5800);
  });

  it('Module 1 level 10 costs 11,000,000 Gold, 9d, 881 XP, 8 sparky stones', () => {
    const up = home().craftedDefenses().cakeAPult().first()!.modules[0].upgrades[9];
    expect(up.buildCost).toBe(11000000);
    expect(up.buildTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(881);
    expect(up.sparkyStones).toBe(8);
  });

  it('Module 2 is Damage, paid in Dark Elixir', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[1];
    expect(mod.name).toBe('Damage');
    expect(mod.upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 2 level 1 damage per hit is 195 and level 10 is 375', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[1];
    expect(mod.upgrades[0].stat).toBe(195);
    expect(mod.upgrades[9].stat).toBe(375);
  });

  it('Module 2 level 10 costs 115,000 Dark Elixir, 9d 12h, 905 XP', () => {
    const up = home().craftedDefenses().cakeAPult().first()!.modules[1].upgrades[9];
    expect(up.buildCost).toBe(115000);
    expect(up.buildTime).toEqual({ days: 9, hours: 12, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(905);
  });

  it('Module 3 is Explosion Damage, paid in Elixir', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[2];
    expect(mod.name).toBe('Explosion Damage');
    expect(mod.upgrades[1].buildCostResource).toBe('Elixir');
  });

  it('Module 3 level 1 explosion damage is 400 and level 10 is 950', () => {
    const mod = home().craftedDefenses().cakeAPult().first()!.modules[2];
    expect(mod.upgrades[0].stat).toBe(400);
    expect(mod.upgrades[9].stat).toBe(950);
  });

  it('Module 3 level 10 costs 15,000,000 Elixir, 10d, 929 XP', () => {
    const up = home().craftedDefenses().cakeAPult().first()!.modules[2].upgrades[9];
    expect(up.buildCost).toBe(15000000);
    expect(up.buildTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
    expect(up.xpGained).toBe(929);
  });

  it('level 1 upgrades are free with no sparky stones', () => {
    home()
      .craftedDefenses()
      .cakeAPult()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });

  it('has 4 image entries covering effective levels 3–11, 12–20, 21–29 and 30', () => {
    const images = home().craftedDefenses().cakeAPult().first()!.images;
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
