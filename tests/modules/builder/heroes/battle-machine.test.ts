import { builder, BuilderBaseHeroes } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

describe('Battle Machine [Builder Base]', () => {
  const hero = builder().heroes().battleMachine().first()!;

  it('has correct identity', () => {
    expect(hero.id).toBe('battle-machine');
    expect(hero.name).toBe('Battle Machine');
    expect(hero.base).toBe('builder');
    expect(hero.category).toBe('hero');
  });

  it('has correct root stats', () => {
    expect(hero.preferredTarget).toBe('None');
    expect(hero.attackType).toBe('Melee (Ground Only)');
    expect(hero.movementSpeed).toBe(16);
    expect(hero.attackSpeed).toBe(1.2);
    expect(hero.range).toBe(1.25);
    expect(hero.specialAbility).toBe('Electric Hammer');
  });

  it('has 35 levels', () => {
    expect(hero.levels).toHaveLength(35);
  });

  it('first level starts at level 1', () => {
    expect(hero.levels[0].level).toBe(1);
  });

  it('has correct first level stats (level 1)', () => {
    const lv1 = hero.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damagePerSecond).toBe(125);
    expect(lv1.damagePerHit).toBe(150);
    expect(lv1.hitpoints).toBe(3000);
    expect(lv1.abilityLevel).toBeNull();
    expect(lv1.builderHallLevelRequired).toBe(5);
    expect(lv1.upgradeCost).toBe(900000);
    expect(lv1.upgradeCostResource).toBe('Builder Elixir');
    expect(lv1.upgradeTime).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
  });

  it('has correct last level stats (level 35)', () => {
    const lv35 = hero.levels[34];
    expect(lv35.level).toBe(35);
    expect(lv35.damagePerSecond).toBe(290);
    expect(lv35.damagePerHit).toBe(348);
    expect(lv35.hitpoints).toBe(5380);
    expect(lv35.abilityLevel).toBe(7);
    expect(lv35.builderHallLevelRequired).toBe(10);
    expect(lv35.upgradeCost).toBe(4500000);
    expect(lv35.upgradeTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('levels 1-4 have null abilityLevel (no ability yet)', () => {
    for (let i = 0; i < 4; i++) {
      expect(hero.levels[i].abilityLevel).toBeNull();
    }
  });

  it('level 5 unlocks ability level 1', () => {
    expect(hero.levels[4].abilityLevel).toBe(1);
  });

  it('has Electric Hammer ability with 7 levels', () => {
    expect(hero.ability).toBeDefined();
    expect(hero.ability!.name).toBe('Electric Hammer');
    expect(hero.ability!.cooldownPerChargeLevel).toBe(13);
    expect(hero.ability!.durationHits).toBe(3);
    expect(hero.ability!.levels).toHaveLength(7);
  });

  it('ability level 1 charge level 1 is Melee with correct stats', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.abilityLevel).toBe(1);
    expect(al1.chargeLevel1.attackType).toBe('Melee');
    expect(al1.chargeLevel1.chainDamageDecay).toBe(0);
    expect(al1.chargeLevel1.dps).toBe(360);
    expect(al1.chargeLevel1.dph).toBe(432);
    expect(al1.chargeLevel1.healthRecovery).toBe(800);
    expect(al1.chargeLevel1.targets).toBe(1);
  });

  it('ability level 1 charge level 2 is Chain Lightning with -50% decay', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.chargeLevel2.attackType).toBe('Chain Lightning');
    expect(al1.chargeLevel2.chainDamageDecay).toBe(-0.5);
    expect(al1.chargeLevel2.dps).toBe(585);
    expect(al1.chargeLevel2.dph).toBe(702);
    expect(al1.chargeLevel2.healthRecovery).toBe(1600);
    expect(al1.chargeLevel2.targets).toBe(1);
  });

  it('ability level 1 charge level 3 is Chain Lightning with -30% decay', () => {
    const al1 = hero.ability!.levels[0];
    expect(al1.chargeLevel3.attackType).toBe('Chain Lightning');
    expect(al1.chargeLevel3.chainDamageDecay).toBe(-0.3);
    expect(al1.chargeLevel3.dps).toBe(810);
    expect(al1.chargeLevel3.dph).toBe(972);
    expect(al1.chargeLevel3.healthRecovery).toBe(2400);
    expect(al1.chargeLevel3.targets).toBe(1);
  });

  it('ability level 7 has max stats', () => {
    const al7 = hero.ability!.levels[6];
    expect(al7.abilityLevel).toBe(7);
    expect(al7.chargeLevel1.dps).toBe(600);
    expect(al7.chargeLevel2.dps).toBe(975);
    expect(al7.chargeLevel2.targets).toBe(2);
    expect(al7.chargeLevel3.dps).toBe(1350);
    expect(al7.chargeLevel3.targets).toBe(3);
    expect(al7.chargeLevel3.healthRecovery).toBe(3300);
  });

  it('has a valid icon image path', () => {
    expect(hero.images.icon).toMatch(/^images\/builder\/heroes\/battle-machine\/icon\.png$/);
  });

  it('returns a BuilderBaseHeroes instance', () => {
    expect(builder().heroes().battleMachine()).toBeInstanceOf(BuilderBaseHeroes);
  });
});

testQueryBaseContract('builder().heroes().battleMachine()', () =>
  builder().heroes().battleMachine(),
);
