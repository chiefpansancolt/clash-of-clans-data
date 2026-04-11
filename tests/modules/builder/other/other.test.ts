import { BuilderBaseOtherBuildings } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().otherBuildings()', () => builder().otherBuildings());

testFilterImmutability(
  'builder().otherBuildings().byBuilderHall()',
  () => builder().otherBuildings(),
  (q) => (q as BuilderBaseOtherBuildings).byBuilderHall(4),
);

describe('BuilderBaseOtherBuildings', () => {
  it('returns 1 other building total', () => {
    expect(builder().otherBuildings().count()).toBe(1);
  });

  it('clockTower() returns 1 item', () => {
    expect(builder().otherBuildings().clockTower().count()).toBe(1);
  });

  it('byBuilderHall(4) returns the clock tower', () => {
    expect(builder().otherBuildings().byBuilderHall(4).count()).toBe(1);
  });

  it('byBuilderHall(1) returns 0 buildings', () => {
    expect(builder().otherBuildings().byBuilderHall(1).count()).toBe(0);
  });
});
