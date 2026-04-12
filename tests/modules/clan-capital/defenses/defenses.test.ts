import { clanCapital, ClanCapitalDefenses } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('clanCapital().defenses()', () => clanCapital().defenses());

testFilterImmutability(
  'clanCapital().defenses().byTargetType()',
  () => clanCapital().defenses(),
  (q) => (q as ClanCapitalDefenses).byTargetType('ground'),
);

testFilterImmutability(
  'clanCapital().defenses().byCapitalHall()',
  () => clanCapital().defenses(),
  (q) => (q as ClanCapitalDefenses).byCapitalHall(1),
);

describe('ClanCapitalDefenses', () => {
  it('returns 21 defenses total', () => {
    expect(clanCapital().defenses().count()).toBe(21);
  });

  it('cannon() returns 1 item', () => {
    expect(clanCapital().defenses().cannon().count()).toBe(1);
  });

  it('spearThrower() returns 1 item', () => {
    expect(clanCapital().defenses().spearThrower().count()).toBe(1);
  });

  it('airDefense() returns 1 item', () => {
    expect(clanCapital().defenses().airDefense().count()).toBe(1);
  });

  it('multiCannon() returns 1 item', () => {
    expect(clanCapital().defenses().multiCannon().count()).toBe(1);
  });

  it('bombTower() returns 1 item', () => {
    expect(clanCapital().defenses().bombTower().count()).toBe(1);
  });

  it('multiMortar() returns 1 item', () => {
    expect(clanCapital().defenses().multiMortar().count()).toBe(1);
  });

  it('airBombs() returns 1 item', () => {
    expect(clanCapital().defenses().airBombs().count()).toBe(1);
  });

  it('rapidRockets() returns 1 item', () => {
    expect(clanCapital().defenses().rapidRockets().count()).toBe(1);
  });

  it('crusher() returns 1 item', () => {
    expect(clanCapital().defenses().crusher().count()).toBe(1);
  });

  it('hiddenMegaTesla() returns 1 item', () => {
    expect(clanCapital().defenses().hiddenMegaTesla().count()).toBe(1);
  });

  it('giantCannon() returns 1 item', () => {
    expect(clanCapital().defenses().giantCannon().count()).toBe(1);
  });

  it('superWizardTower() returns 1 item', () => {
    expect(clanCapital().defenses().superWizardTower().count()).toBe(1);
  });

  it('rocketArtillery() returns 1 item', () => {
    expect(clanCapital().defenses().rocketArtillery().count()).toBe(1);
  });

  it('infernoTower() returns 1 item', () => {
    expect(clanCapital().defenses().infernoTower().count()).toBe(1);
  });

  it('blastBow() returns 1 item', () => {
    expect(clanCapital().defenses().blastBow().count()).toBe(1);
  });

  it('miniMinionHive() returns 1 item', () => {
    expect(clanCapital().defenses().miniMinionHive().count()).toBe(1);
  });

  it('reflector() returns 1 item', () => {
    expect(clanCapital().defenses().reflector().count()).toBe(1);
  });

  it('goblinThrower() returns 1 item', () => {
    expect(clanCapital().defenses().goblinThrower().count()).toBe(1);
  });

  it('superGiantPost() returns 1 item', () => {
    expect(clanCapital().defenses().superGiantPost().count()).toBe(1);
  });

  it('raidCartPost() returns 1 item', () => {
    expect(clanCapital().defenses().raidCartPost().count()).toBe(1);
  });

  it('superDragonPost() returns 1 item', () => {
    expect(clanCapital().defenses().superDragonPost().count()).toBe(1);
  });

  it('byTargetType("ground") returns 9 defenses (Cannon, Multi Cannon, Bomb Tower, Multi Mortar, Crusher, Giant Cannon, Goblin Thrower, Super Giant Post, Raid Cart Post)', () => {
    expect(clanCapital().defenses().byTargetType('ground').count()).toBe(9);
  });

  it('byTargetType("both") returns 9 defenses (Spear Thrower, Super Wizard Tower, Hidden Mega Tesla, Rocket Artillery, Inferno Tower, Blast Bow, Mini-Minion Hive, Reflector, Super Dragon Post)', () => {
    expect(clanCapital().defenses().byTargetType('both').count()).toBe(9);
  });

  it('byTargetType("air") returns 3 defenses (Air Defense, Air Bombs, Rapid Rockets)', () => {
    expect(clanCapital().defenses().byTargetType('air').count()).toBe(3);
  });

  it('byCapitalHall(1) returns 3 defenses', () => {
    expect(clanCapital().defenses().byCapitalHall(1).count()).toBe(3);
  });

  it('defenses() returns a ClanCapitalDefenses instance', () => {
    expect(clanCapital().defenses()).toBeInstanceOf(ClanCapitalDefenses);
  });
});
