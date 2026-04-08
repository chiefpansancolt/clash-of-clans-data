import { home, HomeVillageTroops } from '@/modules/home';

// ─── Meteor Golem troop ───────────────────────────────────────────────────────

describe('meteorGolem()', () => {
  it('returns a HomeTroop', () => {
    const mg = home().troops().meteorGolem().first()!;
    expect(mg).toBeDefined();
    expect(mg.id).toBe('meteor-golem');
    expect(mg.name).toBe('Meteor Golem');
  });

  it('has 3 levels', () => {
    expect(home().troops().meteorGolem().first()!.levels).toHaveLength(3);
  });

  it('is a regular splash troop targeting ground and air', () => {
    const mg = home().troops().meteorGolem().first()!;
    expect(mg.troopType).toBe('regular');
    expect(mg.damageType).toBe('splash');
    expect(mg.targetType).toBe('both');
  });

  it('has housing space 40, movement speed 12, attack speed 1, range 5', () => {
    const mg = home().troops().meteorGolem().first()!;
    expect(mg.housingSpace).toBe(40);
    expect(mg.movementSpeed).toBe(12);
    expect(mg.attackSpeed).toBe(1);
    expect(mg.range).toBe(5);
  });

  it('requires Barracks level 19', () => {
    expect(home().troops().meteorGolem().first()!.barrackLevelRequired).toBe(19);
  });

  it('has an icon image', () => {
    expect(home().troops().meteorGolem().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 450, DPH 450, HP 13000, no research', () => {
    const lvl = home().troops().meteorGolem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(450);
    expect(lvl.stats.normal.damagePerShot).toBe(450);
    expect(lvl.hitpoints).toBe(13000);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 15 (TH17), 28M Elixir / 14d, DPS 500, HP 14500', () => {
    const lvl = home().troops().meteorGolem().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(28000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(500);
    expect(lvl.hitpoints).toBe(14500);
  });

  it('level 3: Lab 16 (TH18), 30M Elixir / 16d, DPS 550, DPH 550, HP 16000', () => {
    const lvl = home().troops().meteorGolem().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.researchCost).toBe(30000000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(550);
    expect(lvl.stats.normal.damagePerShot).toBe(550);
    expect(lvl.hitpoints).toBe(16000);
  });

  it('has no super troop', () => {
    expect(home().troops().meteorGolem().first()!.superTroop).toBeUndefined();
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().meteorGolem().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(3);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().meteorGolem()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with meteorGolem', () => {
  it('byType("regular") includes meteor-golem', () => {
    expect(home().troops().byType('regular').find('meteor-golem')).toBeDefined();
  });

  it('withSuperTroop() does not include meteor-golem', () => {
    expect(home().troops().withSuperTroop().find('meteor-golem')).toBeUndefined();
  });

  it('byTownHall(1) includes meteor-golem (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('meteor-golem')).toBeDefined();
  });

  it('byTownHall(17) includes meteor-golem (level 2 at TH17)', () => {
    expect(home().troops().byTownHall(17).find('meteor-golem')).toBeDefined();
  });
});
