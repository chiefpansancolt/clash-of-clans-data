import { BuilderBaseResourceBuildings } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().resourceBuildings()', () => builder().resourceBuildings());

testFilterImmutability(
  'builder().resourceBuildings().byBuilderHall()',
  () => builder().resourceBuildings(),
  (q) => (q as BuilderBaseResourceBuildings).byBuilderHall(5),
);

describe('BuilderBaseResourceBuildings', () => {
  it('returns 6 resource buildings total', () => {
    expect(builder().resourceBuildings().count()).toBe(6);
  });

  it('goldMine() returns 1 item', () => {
    expect(builder().resourceBuildings().goldMine().count()).toBe(1);
  });

  it('byBuilderHall(1) returns all resource buildings', () => {
    expect(builder().resourceBuildings().byBuilderHall(1).count()).toBe(2);
  });
});
