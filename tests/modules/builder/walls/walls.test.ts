import { BuilderBaseWalls } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().walls()', () => builder().walls());

testFilterImmutability(
  'builder().walls().byBuilderHall()',
  () => builder().walls(),
  (q) => (q as BuilderBaseWalls).byBuilderHall(5),
);

describe('BuilderBaseWalls', () => {
  it('returns 1 wall total', () => {
    expect(builder().walls().count()).toBe(1);
  });

  it('wall() returns 1 item', () => {
    expect(builder().walls().wall().count()).toBe(1);
  });

  it('byBuilderHall(1) includes wall', () => {
    expect(builder().walls().byBuilderHall(1).count()).toBeGreaterThan(0);
  });
});
