import { home, HomeVillageTroops } from '@/modules/home';

describe('miner()', () => {
  it('returns a HomeTroop', () => {
    const m = home().troops().miner().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('miner');
    expect(m.name).toBe('Miner');
  });

  it('has 12 levels', () => {
    expect(home().troops().miner().first()!.levels).toHaveLength(12);
  });

  it('is a regular single-target troop targeting ground', () => {
    const m = home().troops().miner().first()!;
    expect(m.troopType).toBe('regular');
    expect(m.damageType).toBe('single');
    expect(m.targetType).toBe('ground');
  });

  it('has housing space 6, movement speed 32, attack speed 1.7, range 0.5', () => {
    const m = home().troops().miner().first()!;
    expect(m.housingSpace).toBe(6);
    expect(m.movementSpeed).toBe(32);
    expect(m.attackSpeed).toBe(1.7);
    expect(m.range).toBe(0.5);
  });

  it('requires Barracks level 12', () => {
    expect(home().troops().miner().first()!.barrackLevelRequired).toBe(12);
  });

  it('has an icon image', () => {
    expect(home().troops().miner().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 80, DPH 136, HP 550, no research', () => {
    const lvl = home().troops().miner().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(80);
    expect(lvl.stats.normal.damagePerShot).toBe(136);
    expect(lvl.hitpoints).toBe(550);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 8 (TH10), 1.5M Elixir / 1d', () => {
    const lvl = home().troops().miner().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.researchCost).toBe(1500000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(88);
    expect(lvl.stats.normal.damagePerShot).toBe(149.6);
    expect(lvl.hitpoints).toBe(610);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().miner().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 both require Lab 8 and Lab 9 respectively', () => {
    const lvl3 = home().troops().miner().first()!.levels[2];
    const lvl4 = home().troops().miner().first()!.levels[3];
    expect(lvl3.laboratoryRequired).toBe(8);
    expect(lvl3.townHallRequired).toBe(10);
    expect(lvl4.laboratoryRequired).toBe(9);
    expect(lvl4.townHallRequired).toBe(11);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().miner().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('levels 5 and 6 share the same sprite', () => {
    const levels = home().troops().miner().first()!.levels;
    expect(levels[4].images.normal).toBe(levels[5].images.normal);
  });

  it('level 7: Lab 11 (TH13), 6M / 4d, DPS 128, HP 1000', () => {
    const lvl = home().troops().miner().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(6000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(128);
    expect(lvl.hitpoints).toBe(1000);
  });

  it('level 11: Lab 15 (TH17), 16.5M / 9d 20h, DPS 175, HP 1750', () => {
    const lvl = home().troops().miner().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(16500000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 20, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(175);
    expect(lvl.hitpoints).toBe(1750);
  });

  it('level 12: DPS 195, DPH 331.5, HP 2050, Lab 16 (TH18), 28M / 14d 12h', () => {
    const lvl = home().troops().miner().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(195);
    expect(lvl.stats.normal.damagePerShot).toBe(331.5);
    expect(lvl.hitpoints).toBe(2050);
    expect(lvl.researchCost).toBe(28000000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().miner().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().miner()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Miner)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().miner().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-miner');
    expect(st.name).toBe('Super Miner');
  });

  it('has 6 levels (7-12)', () => {
    const st = home().troops().miner().first()!.superTroop!;
    expect(st.levels).toHaveLength(6);
    expect(st.levels[0].level).toBe(7);
    expect(st.levels[5].level).toBe(12);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 7', () => {
    const st = home().troops().miner().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(7);
  });

  it('combat stats: housing 24, speed 32, attack 0.25s, range 0.6', () => {
    const st = home().troops().miner().first()!.superTroop!;
    expect(st.housingSpace).toBe(24);
    expect(st.movementSpeed).toBe(32);
    expect(st.attackSpeed).toBe(0.25);
    expect(st.range).toBe(0.6);
  });

  it('special ability is Last Blast', () => {
    expect(home().troops().miner().first()!.superTroop!.specialAbility).toBe('Last Blast');
  });

  it('level 7: Initial DPS 170, After1.5s DPS 340, After3s DPS 520, Death Damage 1400, HP 3000, TH13', () => {
    const lvl = home().troops().miner().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.deathDamage).toBe(1400);
    expect(lvl.stats.stage2!.dps).toBe(340);
    expect(lvl.stats.stage3!.dps).toBe(520);
    expect(lvl.hitpoints).toBe(3000);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 10: Initial DPS 225, After1.5s DPS 440, After3s DPS 650, Death Damage 2000, HP 4000, TH16', () => {
    const lvl = home().troops().miner().first()!.superTroop!.levels[3];
    expect(lvl.level).toBe(10);
    expect(lvl.stats.normal.dps).toBe(225);
    expect(lvl.stats.normal.deathDamage).toBe(2000);
    expect(lvl.stats.stage2!.dps).toBe(440);
    expect(lvl.stats.stage3!.dps).toBe(650);
    expect(lvl.hitpoints).toBe(4000);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('level 12: Initial DPS 265, After1.5s DPS 510, After3s DPS 740, Death Damage 2400, HP 5000, TH18', () => {
    const lvl = home().troops().miner().first()!.superTroop!.levels[5];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(265);
    expect(lvl.stats.normal.deathDamage).toBe(2400);
    expect(lvl.stats.stage2!.dps).toBe(510);
    expect(lvl.stats.stage3!.dps).toBe(740);
    expect(lvl.hitpoints).toBe(5000);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().miner().first()!.superTroop!.levels;
    const firstImage = levels[0].images.normal;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBe(firstImage);
    });
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().miner().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with miner', () => {
  it('byType("regular") includes miner', () => {
    expect(home().troops().byType('regular').find('miner')).toBeDefined();
  });

  it('withSuperTroop() includes miner (has Super Miner super troop)', () => {
    expect(home().troops().withSuperTroop().find('miner')).toBeDefined();
  });

  it('byTownHall(1) includes miner (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('miner')).toBeDefined();
  });

  it('byTownHall(10) includes miner (level 2 at TH10)', () => {
    expect(home().troops().byTownHall(10).find('miner')).toBeDefined();
  });
});
