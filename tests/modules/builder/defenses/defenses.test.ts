import { BuilderBaseDefenses } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses()', () => builder().defenses());

testFilterImmutability(
  'builder().defenses().byBuilderHall()',
  () => builder().defenses(),
  (q) => (q as BuilderBaseDefenses).byBuilderHall(5),
);

testFilterImmutability(
  'builder().defenses().byDamageType()',
  () => builder().defenses(),
  (q) => (q as BuilderBaseDefenses).byDamageType('single'),
);

describe('BuilderBaseDefenses', () => {
  it('returns 15 defenses total', () => {
    expect(builder().defenses().count()).toBe(15);
  });

  it('cannon() returns 1 item', () => {
    expect(builder().defenses().cannon().count()).toBe(1);
  });

  it('byBuilderHall(1) includes cannon', () => {
    expect(builder().defenses().byBuilderHall(1).count()).toBeGreaterThan(0);
  });

  it('byDamageType("single") includes cannon', () => {
    expect(builder().defenses().byDamageType('single').findByName('Cannon')).toBeDefined();
  });
});
