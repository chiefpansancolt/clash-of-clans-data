import { BuilderBaseArmyBuildings } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().armyBuildings()', () => builder().armyBuildings());

testFilterImmutability(
  'builder().armyBuildings().byBuilderHall()',
  () => builder().armyBuildings(),
  (q) => (q as BuilderBaseArmyBuildings).byBuilderHall(5),
);

describe('BuilderBaseArmyBuildings', () => {
  it('returns 7 army buildings total', () => {
    expect(builder().armyBuildings().count()).toBe(7);
  });

  it('builderBarracks() returns 1 item', () => {
    expect(builder().armyBuildings().builderBarracks().count()).toBe(1);
  });

  it('byBuilderHall(1) returns all army buildings', () => {
    expect(builder().armyBuildings().byBuilderHall(1).count()).toBe(3);
  });
});
