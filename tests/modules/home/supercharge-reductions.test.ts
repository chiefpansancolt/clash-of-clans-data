import { home } from '@/modules/home';

type Reduction = { cost: number; time: [days: number, hours: number, minutes: number] };

const defense = (
  name:
    | 'multiGearTower'
    | 'ricochetCannon'
    | 'multiArcherTower'
    | 'airDefense'
    | 'buildersHut'
    | 'hiddenTesla'
    | 'xBow',
) => home().defenses()[name]().first()!;

const resource = (name: 'goldMine' | 'elixirCollector' | 'darkElixirDrill') =>
  home().resourceBuildings()[name]().first()!;

const expectReductions = (
  levels: { supercharge?: boolean; buildCost: number; buildTime: object }[],
  expected: Reduction[],
) => {
  const supercharge = levels.filter((l) => l.supercharge);
  expect(supercharge).toHaveLength(expected.length);
  supercharge.forEach((l, i) => {
    const [days, hours, minutes] = expected[i].time;
    expect(l.buildCost).toBe(expected[i].cost);
    expect(l.buildTime).toEqual({ days, hours, minutes, seconds: 0 });
  });
};

describe('October 2026 supercharge reductions', () => {
  const towerReductions: Reduction[] = [
    { cost: 4750000, time: [2, 10, 0] },
    { cost: 4000000, time: [2, 19, 0] },
  ];

  it.each(['multiGearTower', 'ricochetCannon', 'multiArcherTower'] as const)(
    '%s supercharge costs and times',
    (name) => expectReductions(defense(name).levels, towerReductions),
  );

  it('airDefense supercharge costs and times', () => {
    expectReductions(defense('airDefense').levels, [
      { cost: 2500000, time: [1, 2, 0] },
      { cost: 1250000, time: [1, 17, 0] },
    ]);
  });

  it('buildersHut supercharge costs and times', () => {
    expectReductions(defense('buildersHut').levels, [
      { cost: 4000000, time: [1, 14, 0] },
      { cost: 3250000, time: [2, 10, 0] },
    ]);
  });

  it('hiddenTesla supercharge costs and times', () => {
    expectReductions(defense('hiddenTesla').levels, [
      { cost: 4750000, time: [1, 19, 0] },
      { cost: 3250000, time: [2, 14, 0] },
    ]);
  });

  it('xBow supercharge costs and times', () => {
    expectReductions(defense('xBow').levels, [
      { cost: 5500000, time: [2, 5, 0] },
      { cost: 3500000, time: [3, 0, 0] },
    ]);
  });

  it.each(['goldMine', 'elixirCollector'] as const)('%s supercharge costs and times', (name) => {
    expectReductions(resource(name).levels, [
      { cost: 250000, time: [0, 9, 30] },
      { cost: 250000, time: [0, 14, 30] },
      { cost: 250000, time: [0, 19, 0] },
    ]);
  });

  it('darkElixirDrill supercharge costs and times', () => {
    expectReductions(resource('darkElixirDrill').levels, [
      { cost: 750000, time: [0, 14, 30] },
      { cost: 750000, time: [0, 19, 0] },
      { cost: 500000, time: [1, 0, 0] },
    ]);
  });
});
