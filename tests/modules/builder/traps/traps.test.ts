import { BuilderBaseTraps } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().traps()', () => builder().traps());

testFilterImmutability(
  'builder().traps().byBuilderHall()',
  () => builder().traps(),
  (q) => (q as BuilderBaseTraps).byBuilderHall(5),
);

describe('BuilderBaseTraps', () => {
  it('returns 4 traps total', () => {
    expect(builder().traps().count()).toBe(4);
  });

  it('pushTrap() returns 1 item', () => {
    expect(builder().traps().pushTrap().count()).toBe(1);
  });

  it('springTrap() returns 1 item', () => {
    expect(builder().traps().springTrap().count()).toBe(1);
  });

  it('byBuilderHall(2) includes push trap', () => {
    expect(builder().traps().byBuilderHall(2).count()).toBeGreaterThan(0);
  });

  it('byBuilderHall(1) returns 0 traps', () => {
    expect(builder().traps().byBuilderHall(1).count()).toBe(0);
  });
});
