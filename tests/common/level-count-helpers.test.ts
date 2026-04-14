import {
  bhStructureCount,
  ccCapitalPeakStructures,
  ccCapitalPeakWalls,
  ccDistrictCounts,
  ccDistrictStructures,
  ccDistrictWalls,
  ccMaxDHLevel,
  thEffectiveCount,
  thStructureCount,
  thSuperChargeCount,
} from '@/common/level-count-helpers';
import type { DistrictHall } from '@/types';
import type {
  BHCountableBuilding,
  CCBuildingWithCapitalHall,
  CCBuildingWithDistrict,
  CCWall,
  THCountableBuilding,
} from '@/types/level-count-helpers';

// ── thEffectiveCount ───────────────────────────────────────────────────────────

describe('thEffectiveCount', () => {
  const avail = [
    { townHallLevel: 1, count: 2 },
    { townHallLevel: 2, count: 4, countAfterMerges: 1 },
    { townHallLevel: 3, count: 5, countAfterMerges: 0 },
  ];

  it('returns 0 when TH level is not in the availability array', () => {
    expect(thEffectiveCount(avail, 99)).toBe(0);
  });

  it('returns count when countAfterMerges is absent', () => {
    expect(thEffectiveCount(avail, 1)).toBe(2);
  });

  it('returns countAfterMerges when present and non-zero', () => {
    expect(thEffectiveCount(avail, 2)).toBe(1);
  });

  it('returns countAfterMerges even when it is 0', () => {
    expect(thEffectiveCount(avail, 3)).toBe(0);
  });
});

// ── thStructureCount ───────────────────────────────────────────────────────────

describe('thStructureCount', () => {
  const building: THCountableBuilding = {
    availablePerTownHall: [
      { townHallLevel: 2, count: 2 },
      { townHallLevel: 5, count: 3 },
    ],
    levels: [
      { level: 1, townHallRequired: 2 },
      { level: 2, townHallRequired: 3 },
      { level: 3, townHallRequired: 5, supercharge: true },
    ],
  };

  it('returns 0 when the building is not available at the given TH level', () => {
    expect(thStructureCount(building, 1)).toBe(0);
  });

  it('excludes supercharge levels when finding max level', () => {
    // At TH5: count=3, normal levels go up to level 2 (level 3 is supercharge), so 3×2=6
    expect(thStructureCount(building, 5)).toBe(6);
  });

  it('uses max normal level × count at the given TH level', () => {
    // At TH2: count=2, only level 1 is available (level 2 requires TH3), so 2×1=2
    expect(thStructureCount(building, 2)).toBe(2);
  });
});

// ── thSuperChargeCount ─────────────────────────────────────────────────────────

describe('thSuperChargeCount', () => {
  const building: THCountableBuilding = {
    availablePerTownHall: [
      { townHallLevel: 5, count: 2 },
      { townHallLevel: 6, count: 3 },
    ],
    levels: [
      { level: 1, townHallRequired: 5 },
      { level: 2, townHallRequired: 5, supercharge: true },
      { level: 3, townHallRequired: 6, supercharge: true },
    ],
  };

  it('returns 0 when the building is not available at the given TH level', () => {
    expect(thSuperChargeCount(building, 1)).toBe(0);
  });

  it('returns count × number of supercharge levels available at given TH level', () => {
    // At TH5: count=2, one supercharge level (level 2), so 2×1=2
    expect(thSuperChargeCount(building, 5)).toBe(2);
  });

  it('accumulates all supercharge levels up to the given TH level', () => {
    // At TH6: count=3, two supercharge levels, so 3×2=6
    expect(thSuperChargeCount(building, 6)).toBe(6);
  });
});

// ── bhStructureCount ───────────────────────────────────────────────────────────

describe('bhStructureCount', () => {
  const building: BHCountableBuilding = {
    availablePerBuilderHall: [
      { builderHallLevel: 3, count: 2 },
      { builderHallLevel: 5, count: 3 },
    ],
    levels: [
      { level: 1, builderHallRequired: 3 },
      { level: 2, builderHallRequired: 4 },
      { level: 3, builderHallRequired: 5 },
    ],
  };

  it('returns 0 when the building is not available at the given BH level', () => {
    expect(bhStructureCount(building, 1)).toBe(0);
  });

  it('uses max level × count at the given BH level', () => {
    // At BH3: count=2, max level=1 (level 2 requires BH4), so 2×1=2
    expect(bhStructureCount(building, 3)).toBe(2);
  });

  it('caps max level based on builderHallRequired', () => {
    // At BH5: count=3, max level=3, so 3×3=9
    expect(bhStructureCount(building, 5)).toBe(9);
  });
});

// ── ccMaxDHLevel ───────────────────────────────────────────────────────────────

const mockDistrictHall: DistrictHall = {
  id: 'district-hall',
  name: 'District Hall',
  base: 'clan_capital',
  category: 'district-hall',
  size: '4x4',
  levels: [
    {
      level: 1,
      hitpoints: 6000,
      buildCost: 0,
      buildCostResource: 'Capital Gold',
      buildTime: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      xpGained: 0,
      capitalHallRequired: {
        barbarianCamp: 2,
        wizardValley: 3,
        balloonLagoon: 4,
        buildersWorkshop: 5,
        dragonCliffs: 6,
        golemQuarry: 7,
        skeletonPark: 8,
        goblinMines: 9,
      },
      images: { normal: '' },
    },
    {
      level: 2,
      hitpoints: 7000,
      buildCost: 25000,
      buildCostResource: 'Capital Gold',
      buildTime: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      xpGained: 0,
      capitalHallRequired: {
        barbarianCamp: 4,
        wizardValley: 5,
        balloonLagoon: 6,
        buildersWorkshop: 7,
        dragonCliffs: 8,
        golemQuarry: 9,
        skeletonPark: 9,
        goblinMines: 10,
      },
      images: { normal: '' },
    },
  ],
} as unknown as DistrictHall;

describe('ccMaxDHLevel', () => {
  it('returns 0 when the district has not unlocked at the given CH level', () => {
    // wizardValley requires CH3 for DH1, so at CH2 it is 0
    expect(ccMaxDHLevel(mockDistrictHall, 'wizardValley', 2)).toBe(0);
  });

  it('returns the correct max DH level when district is partially unlocked', () => {
    // barbarianCamp DH1 requires CH2, DH2 requires CH4 → at CH3, max is 1
    expect(ccMaxDHLevel(mockDistrictHall, 'barbarianCamp', 3)).toBe(1);
  });

  it('returns the maximum DH level when all levels are unlocked', () => {
    // barbarianCamp DH1 at CH2, DH2 at CH4 → at CH4, max is 2
    expect(ccMaxDHLevel(mockDistrictHall, 'barbarianCamp', 4)).toBe(2);
  });

  it('returns 0 for a district where capitalHallRequired is undefined on all levels', () => {
    // skeletonPark requires CH8 for DH1 → at CH7, still 0
    expect(ccMaxDHLevel(mockDistrictHall, 'skeletonPark', 7)).toBe(0);
  });
});

// ── ccDistrictStructures ───────────────────────────────────────────────────────

const mockBuildings: CCBuildingWithDistrict[] = [
  {
    availablePerDistrict: [
      { district: 'alpha', countPerDistrictHall: [4, 6] },
      { district: 'beta', countPerDistrictHall: [0, 3] },
    ],
    levels: [
      { level: 1, districtHallRequired: 1 },
      { level: 2, districtHallRequired: 2 },
    ],
  },
  {
    availablePerDistrict: [{ district: 'alpha', countPerDistrictHall: [2, 2] }],
    levels: [{ level: 1, districtHallRequired: 1 }],
  },
];

describe('ccDistrictStructures', () => {
  it('returns 0 when dhLevel is 0', () => {
    expect(ccDistrictStructures(mockBuildings, 'alpha', 0)).toBe(0);
  });

  it('skips buildings that are not present in the given district', () => {
    // building[1] is not in 'beta', so only building[0] counts, but count at DH1 is 0
    // at DH2: building[0] beta count=3, maxLevel=2 (DH2) → 3×2=6
    expect(ccDistrictStructures(mockBuildings, 'beta', 2)).toBe(6);
  });

  it('skips buildings where count is 0 at the given DH level', () => {
    // beta at DH1: count=0 → skipped; result is 0
    expect(ccDistrictStructures(mockBuildings, 'beta', 1)).toBe(0);
  });

  it('sums count × maxLevel for all buildings in the district', () => {
    // alpha at DH1: building[0] count=4, maxLevel=1 → 4; building[1] count=2, maxLevel=1 → 2; total=6
    expect(ccDistrictStructures(mockBuildings, 'alpha', 1)).toBe(6);
  });

  it('uses the max level gated by districtHallRequired', () => {
    // alpha at DH2: building[0] count=6, maxLevel=2 → 12; building[1] count=2, maxLevel=1 → 2; total=14
    expect(ccDistrictStructures(mockBuildings, 'alpha', 2)).toBe(14);
  });
});

// ── ccDistrictWalls ────────────────────────────────────────────────────────────

const mockWall: CCWall = {
  availablePerCapitalHall: [{ capitalHallLevel: 1, count: 50 }],
  availablePerDistrict: [
    { district: 'alpha', countPerDistrictHall: [50, 100] },
    { district: 'beta', countPerDistrictHall: [0, 40] },
  ],
  levels: [
    { level: 1, capitalHallRequired: 1, districtHallRequired: 1 },
    { level: 2, capitalHallRequired: 3, districtHallRequired: 2 },
  ],
};

describe('ccDistrictWalls', () => {
  it('returns 0 when dhLevel is 0', () => {
    expect(ccDistrictWalls(mockWall, 'alpha', 0)).toBe(0);
  });

  it('returns 0 for a district not in availablePerDistrict', () => {
    expect(ccDistrictWalls(mockWall, 'gamma', 1)).toBe(0);
  });

  it('returns 0 when countPerDistrictHall is 0 at the given DH level', () => {
    expect(ccDistrictWalls(mockWall, 'beta', 1)).toBe(0);
  });

  it('returns count × maxWallLevel at the given DH level', () => {
    // alpha DH1: count=50, maxLevel=1, so 50×1=50
    expect(ccDistrictWalls(mockWall, 'alpha', 1)).toBe(50);
  });

  it('advances wall level with DH level', () => {
    // alpha DH2: count=100, maxLevel=2 (districtHallRequired=2), so 100×2=200
    expect(ccDistrictWalls(mockWall, 'alpha', 2)).toBe(200);
  });
});

// ── ccCapitalPeakStructures ────────────────────────────────────────────────────

const mockCapBuildings: CCBuildingWithCapitalHall[] = [
  {
    availablePerCapitalHall: [
      { capitalHallLevel: 1, count: 4 },
      { capitalHallLevel: 2, count: 6 },
    ],
    levels: [
      { level: 1, capitalHallRequired: 1 },
      { level: 2, capitalHallRequired: 2 },
    ],
  },
  {
    availablePerCapitalHall: [
      { capitalHallLevel: 1, count: 0 },
      { capitalHallLevel: 2, count: 2 },
    ],
    levels: [{ level: 1, capitalHallRequired: 2 }],
  },
];

describe('ccCapitalPeakStructures', () => {
  it('skips buildings with count 0 at the given CH level', () => {
    // At CH1: building[0] count=4, maxLevel=1 → 4; building[1] count=0 → skipped; total=4
    expect(ccCapitalPeakStructures(mockCapBuildings, 1)).toBe(4);
  });

  it('includes buildings that become available at the given CH level', () => {
    // At CH2: building[0] count=6, maxLevel=2 → 12; building[1] count=2, maxLevel=1 → 2; total=14
    expect(ccCapitalPeakStructures(mockCapBuildings, 2)).toBe(14);
  });
});

// ── ccCapitalPeakWalls ─────────────────────────────────────────────────────────

const mockCapWall: CCWall = {
  availablePerCapitalHall: [
    { capitalHallLevel: 1, count: 0 },
    { capitalHallLevel: 2, count: 80 },
    { capitalHallLevel: 3, count: 120 },
  ],
  availablePerDistrict: [],
  levels: [
    { level: 1, capitalHallRequired: 1, districtHallRequired: 1 },
    { level: 2, capitalHallRequired: 3, districtHallRequired: 2 },
  ],
};

describe('ccCapitalPeakWalls', () => {
  it('returns 0 when count is 0 at the given CH level', () => {
    expect(ccCapitalPeakWalls(mockCapWall, 1)).toBe(0);
  });

  it('returns count × maxWallLevel at the given CH level', () => {
    // CH2: count=80, maxLevel=1 (level 2 requires CH3), so 80×1=80
    expect(ccCapitalPeakWalls(mockCapWall, 2)).toBe(80);
  });

  it('advances wall level with CH level', () => {
    // CH3: count=120, maxLevel=2, so 120×2=240
    expect(ccCapitalPeakWalls(mockCapWall, 3)).toBe(240);
  });
});

// ── ccDistrictCounts ───────────────────────────────────────────────────────────

describe('ccDistrictCounts', () => {
  it('returns structures, walls, and total for an unlocked district', () => {
    const result = ccDistrictCounts(mockBuildings, mockWall, 'alpha', 1);
    expect(result.structures).toBe(6); // from ccDistrictStructures test above
    expect(result.walls).toBe(50); // from ccDistrictWalls test above
    expect(result.total).toBe(result.structures + result.walls);
  });

  it('returns all zeros when dhLevel is 0', () => {
    const result = ccDistrictCounts(mockBuildings, mockWall, 'alpha', 0);
    expect(result).toEqual({ structures: 0, walls: 0, total: 0 });
  });
});
