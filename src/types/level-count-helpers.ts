import type { BuilderHallAvailability, TownHallAvailability } from './common';

/** Structural interface for Home Village buildings used in level-count calculations. */
export interface THCountableBuilding {
  availablePerTownHall: TownHallAvailability[];
  levels: Array<{ level: number; townHallRequired: number; supercharge?: boolean | null }>;
}

/** Structural interface for Builder Base buildings used in level-count calculations. */
export interface BHCountableBuilding {
  availablePerBuilderHall: BuilderHallAvailability[];
  levels: Array<{ level: number; builderHallRequired: number }>;
}

/** Structural interface for Clan Capital buildings with district-based availability. */
export interface CCBuildingWithDistrict {
  availablePerDistrict: { district: string; countPerDistrictHall: number[] }[];
  levels: Array<{ level: number; districtHallRequired: number }>;
}

/** Structural interface for Clan Capital buildings with Capital Hall-based availability (Capital Peak). */
export interface CCBuildingWithCapitalHall {
  availablePerCapitalHall: { capitalHallLevel: number; count: number }[];
  levels: Array<{ level: number; capitalHallRequired: number }>;
}

/** Structural interface for Clan Capital walls (has both district and Capital Hall availability). */
export interface CCWall {
  availablePerCapitalHall: { capitalHallLevel: number; count: number }[];
  availablePerDistrict: { district: string; countPerDistrictHall: number[] }[];
  levels: Array<{ level: number; capitalHallRequired: number; districtHallRequired: number }>;
}
