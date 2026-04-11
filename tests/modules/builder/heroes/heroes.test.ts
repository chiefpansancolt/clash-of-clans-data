import { BuilderBaseHeroes } from '@/modules/builder';
import { builder } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().heroes()', () => builder().heroes());

testFilterImmutability(
  'builder().heroes().byBuilderHall()',
  () => builder().heroes(),
  (q) => (q as BuilderBaseHeroes).byBuilderHall(5),
);

describe('BuilderBaseHeroes', () => {
  it('returns 2 heroes total', () => {
    expect(builder().heroes().count()).toBe(2);
  });

  it('battleMachine() returns 1 item', () => {
    expect(builder().heroes().battleMachine().count()).toBe(1);
  });

  it('battleCopter() returns 1 item', () => {
    expect(builder().heroes().battleCopter().count()).toBe(1);
  });

  it('byBuilderHall(5) returns 1 hero (Battle Machine)', () => {
    expect(builder().heroes().byBuilderHall(5).count()).toBe(1);
  });

  it('byBuilderHall(8) returns 2 heroes', () => {
    expect(builder().heroes().byBuilderHall(8).count()).toBe(2);
  });

  it('byBuilderHall(4) returns 0 heroes', () => {
    expect(builder().heroes().byBuilderHall(4).count()).toBe(0);
  });
});
