import { clanCapital } from '@/modules/clan-capital';

describe('troops() [Clan Capital]', () => {
  it('returns all troops', () => {
    expect(clanCapital().troops().count()).toBe(17);
  });

  it('superBarbarian() returns 1 troop', () => {
    expect(clanCapital().troops().superBarbarian().count()).toBe(1);
  });

  it('sneakyArcher() returns 1 troop', () => {
    expect(clanCapital().troops().sneakyArcher().count()).toBe(1);
  });

  it('superGiant() returns 1 troop', () => {
    expect(clanCapital().troops().superGiant().count()).toBe(1);
  });

  it('battleRam() returns 1 troop', () => {
    expect(clanCapital().troops().battleRam().count()).toBe(1);
  });

  it('minionHorde() returns 1 troop', () => {
    expect(clanCapital().troops().minionHorde().count()).toBe(1);
  });

  it('superWizard() returns 1 troop', () => {
    expect(clanCapital().troops().superWizard().count()).toBe(1);
  });

  it('rocketBalloon() returns 1 troop', () => {
    expect(clanCapital().troops().rocketBalloon().count()).toBe(1);
  });

  it('skeletonBarrels() returns 1 troop', () => {
    expect(clanCapital().troops().skeletonBarrels().count()).toBe(1);
  });

  it('flyingFortress() returns 1 troop', () => {
    expect(clanCapital().troops().flyingFortress().count()).toBe(1);
  });

  it('raidCart() returns 1 troop', () => {
    expect(clanCapital().troops().raidCart().count()).toBe(1);
  });

  it('powerPekka() returns 1 troop', () => {
    expect(clanCapital().troops().powerPekka().count()).toBe(1);
  });

  it('hogRaiders() returns 1 troop', () => {
    expect(clanCapital().troops().hogRaiders().count()).toBe(1);
  });

  it('infernoDragon() returns 1 troop', () => {
    expect(clanCapital().troops().infernoDragon().count()).toBe(1);
  });

  it('megaSparky() returns 1 troop', () => {
    expect(clanCapital().troops().megaSparky().count()).toBe(1);
  });

  it('mountainGolem() returns 1 troop', () => {
    expect(clanCapital().troops().mountainGolem().count()).toBe(1);
  });

  it('superDragon() returns 1 troop', () => {
    expect(clanCapital().troops().superDragon().count()).toBe(1);
  });

  it('superMiner() returns 1 troop', () => {
    expect(clanCapital().troops().superMiner().count()).toBe(1);
  });
});
