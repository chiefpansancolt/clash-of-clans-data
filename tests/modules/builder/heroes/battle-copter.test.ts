import { builder, BuilderBaseHeroes } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

describe('Battle Copter [Builder Base]', () => {
  const hero = builder().heroes().battleCopter().first()!;

  it('has correct identity', () => {
    expect(hero.id).toBe('battle-copter');
    expect(hero.name).toBe('Battle Copter');
    expect(hero.base).toBe('builder');
    expect(hero.category).toBe('hero');
  });

  it('has correct root stats', () => {
    expect(hero.preferredTarget).toBe('None');
    expect(hero.attackType).toBe('Ranged (Ground & Air)');
    expect(hero.movementSpeed).toBe(14);
    expect(hero.attackSpeed).toBe(0.65);
    expect(hero.range).toBe(7);
    expect(hero.specialAbility).toBe('Bomb Rush');
  });

  it('has 21 levels', () => {
    expect(hero.levels).toHaveLength(21);
  });

  it('first level starts at level 15', () => {
    expect(hero.levels[0].level).toBe(15);
  });

  it('has correct first level stats (level 15)', () => {
    const lv15 = hero.levels[0];
    expect(lv15.level).toBe(15);
    expect(lv15.damagePerSecond).toBe(112);
    expect(lv15.damagePerHit).toBe(72.8);
    expect(lv15.hitpoints).toBe(2857);
    expect(lv15.abilityLevel).toBe(1);
    expect(lv15.builderHallLevelRequired).toBe(8);
    expect(lv15.upgradeCost).toBe(2500000);
    expect(lv15.upgradeCostResource).toBe('Builder Elixir');
    expect(lv15.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('has correct last level stats (level 35)', () => {
    const lv35 = hero.levels[20];
    expect(lv35.level).toBe(35);
    expect(lv35.damagePerSecond).toBe(193);
    expect(lv35.damagePerHit).toBe(125.45);
    expect(lv35.hitpoints).toBe(3456);
    expect(lv35.abilityLevel).toBe(5);
    expect(lv35.builderHallLevelRequired).toBe(10);
    expect(lv35.upgradeCost).toBe(4500000);
    expect(lv35.upgradeTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have an abilityLevel (never null)', () => {
    for (const lvl of hero.levels) {
      expect(lvl.abilityLevel).not.toBeNull();
    }
  });

  it('has Bomb Rush ability with 5 levels', () => {
    expect(hero.ability).toBeDefined();
    expect(hero.ability!.name).toBe('Bomb Rush');
    expect(hero.ability!.cooldownPerChargeLevel).toBe(14);
    expect(hero.ability!.movementSpeedDuringAbility).toBe(56);
    expect(hero.ability!.levels).toHaveLength(5);
  });

  it('ability level 1 charge level 1 is Splash 0.5 tiles', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.abilityLevel).toBe(1);
    expect(al1.chargeLevel1.attackType).toBe('Splash');
    expect(al1.chargeLevel1.damageRadius).toBe(0.5);
    expect(al1.chargeLevel1.damage).toBe(179);
    expect(al1.chargeLevel1.healthRecovery).toBe(550);
  });

  it('ability level 1 charge level 2 is Splash 2 tiles', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.chargeLevel2.attackType).toBe('Splash');
    expect(al1.chargeLevel2.damageRadius).toBe(2);
    expect(al1.chargeLevel2.damage).toBe(274);
    expect(al1.chargeLevel2.healthRecovery).toBe(1100);
  });

  it('ability level 1 charge level 3 is Splash 4 tiles', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.chargeLevel3.attackType).toBe('Splash');
    expect(al1.chargeLevel3.damageRadius).toBe(4);
    expect(al1.chargeLevel3.damage).toBe(368);
    expect(al1.chargeLevel3.healthRecovery).toBe(1650);
  });

  it('ability level 5 has max stats', () => {
    const al5 = hero.ability!.levels[4];
    expect(al5.abilityLevel).toBe(5);
    expect(al5.chargeLevel1.damage).toBe(319);
    expect(al5.chargeLevel1.healthRecovery).toBe(650);
    expect(al5.chargeLevel2.damage).toBe(487);
    expect(al5.chargeLevel2.healthRecovery).toBe(1300);
    expect(al5.chargeLevel3.damage).toBe(655);
    expect(al5.chargeLevel3.healthRecovery).toBe(1950);
  });

  it('has a valid icon image path', () => {
    expect(hero.images.icon).toMatch(/^images\/builder\/heroes\/battle-copter\/icon\.png$/);
  });

  it('returns a BuilderBaseHeroes instance', () => {
    expect(builder().heroes().battleCopter()).toBeInstanceOf(BuilderBaseHeroes);
  });
});

testQueryBaseContract('builder().heroes().battleCopter()', () => builder().heroes().battleCopter());
