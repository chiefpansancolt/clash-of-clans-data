import { BuilderBaseTroops } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().troops()', () => builder().troops());

testFilterImmutability(
  'builder().troops().byDamageType()',
  () => builder().troops(),
  (q) => (q as BuilderBaseTroops).byDamageType('single'),
);

describe('BuilderBaseTroops', () => {
  it('returns 12 troops total', () => {
    expect(builder().troops().count()).toBe(12);
  });

  it('babyDragon() returns 1 item', () => {
    expect(builder().troops().babyDragon().count()).toBe(1);
  });

  it('cannonCart() returns 1 item', () => {
    expect(builder().troops().cannonCart().count()).toBe(1);
  });

  it('nightWitch() returns 1 item', () => {
    expect(builder().troops().nightWitch().count()).toBe(1);
  });

  it('dropShip() returns 1 item', () => {
    expect(builder().troops().dropShip().count()).toBe(1);
  });

  it('powerPekka() returns 1 item', () => {
    expect(builder().troops().powerPekka().count()).toBe(1);
  });

  it('hogGlider() returns 1 item', () => {
    expect(builder().troops().hogGlider().count()).toBe(1);
  });

  it('electrofireWizard() returns 1 item', () => {
    expect(builder().troops().electrofireWizard().count()).toBe(1);
  });

  it('betaMinion() returns 1 item', () => {
    expect(builder().troops().betaMinion().count()).toBe(1);
  });

  it('bomber() returns 1 item', () => {
    expect(builder().troops().bomber().count()).toBe(1);
  });

  it('boxerGiant() returns 1 item', () => {
    expect(builder().troops().boxerGiant().count()).toBe(1);
  });

  it('ragedBarbarian() returns 1 item', () => {
    expect(builder().troops().ragedBarbarian().count()).toBe(1);
  });

  it('sneakyArcher() returns 1 item', () => {
    expect(builder().troops().sneakyArcher().count()).toBe(1);
  });

  it('byDamageType("single") returns 8 troops', () => {
    expect(builder().troops().byDamageType('single').count()).toBe(8);
  });

  it('byDamageType("splash") returns bomber, baby dragon, night witch, and drop ship', () => {
    expect(builder().troops().byDamageType('splash').count()).toBe(4);
  });

  it('byTargetType("both") returns sneaky archer, beta minion, baby dragon, night witch, and electrofire wizard', () => {
    expect(builder().troops().byTargetType('both').count()).toBe(5);
  });

  it('byTargetType("ground") returns raged barbarian, boxer giant, bomber, cannon cart, drop ship, power pekka, and hog glider', () => {
    expect(builder().troops().byTargetType('ground').count()).toBe(7);
  });
});
