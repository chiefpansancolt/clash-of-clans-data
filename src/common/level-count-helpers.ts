import type { ClanCapitalDistrictCounts, TownHallAvailability } from '@/types';
import type { DistrictHall, DistrictHallCapitalHallRequired } from '@/types';
import type {
  BHCountableBuilding,
  CCBuildingWithCapitalHall,
  CCBuildingWithDistrict,
  CCWall,
  THCountableBuilding,
} from '@/types/level-count-helpers';

export function thEffectiveCount(
  availablePerTownHall: TownHallAvailability[],
  thLevel: number,
): number {
  const entry = availablePerTownHall.find((e) => e.townHallLevel === thLevel);
  if (!entry) return 0;
  return entry.countAfterMerges ?? entry.count;
}

export function thStructureCount(b: THCountableBuilding, thLevel: number): number {
  const count = thEffectiveCount(b.availablePerTownHall, thLevel);
  if (count === 0) return 0;
  const maxLevel = b.levels
    .filter((l) => l.supercharge !== true && l.townHallRequired <= thLevel)
    .reduce((m, l) => Math.max(m, l.level), 0);
  return count * maxLevel;
}

export function thSuperChargeCount(b: THCountableBuilding, thLevel: number): number {
  const count = thEffectiveCount(b.availablePerTownHall, thLevel);
  if (count === 0) return 0;
  const scCount = b.levels.filter(
    (l) => l.supercharge === true && l.townHallRequired <= thLevel,
  ).length;
  return count * scCount;
}

export function bhStructureCount(b: BHCountableBuilding, bhLevel: number): number {
  const count = b.availablePerBuilderHall.find((e) => e.builderHallLevel === bhLevel)?.count ?? 0;
  if (count === 0) return 0;
  const maxLevel = b.levels
    .filter((l) => l.builderHallRequired <= bhLevel)
    .reduce((m, l) => Math.max(m, l.level), 0);
  return count * maxLevel;
}

export function ccMaxDHLevel(
  districtHall: DistrictHall,
  district: keyof DistrictHallCapitalHallRequired,
  chLevel: number,
): number {
  return districtHall.levels
    .filter((l) => {
      const req = l.capitalHallRequired[district];
      return req !== undefined && req <= chLevel;
    })
    .reduce((m, l) => Math.max(m, l.level), 0);
}

export function ccDistrictStructures(
  buildings: CCBuildingWithDistrict[],
  district: string,
  dhLevel: number,
): number {
  if (dhLevel === 0) return 0;
  return buildings.reduce((sum, b) => {
    const distEntry = b.availablePerDistrict.find((d) => d.district === district);
    if (!distEntry) return sum;
    const count = distEntry.countPerDistrictHall[dhLevel - 1] ?? 0;
    if (count === 0) return sum;
    const maxLevel = b.levels
      .filter((l) => l.districtHallRequired <= dhLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    return sum + count * maxLevel;
  }, 0);
}

export function ccDistrictWalls(wall: CCWall, district: string, dhLevel: number): number {
  if (dhLevel === 0) return 0;
  const distEntry = wall.availablePerDistrict.find((d) => d.district === district);
  if (!distEntry) return 0;
  const count = distEntry.countPerDistrictHall[dhLevel - 1] ?? 0;
  if (count === 0) return 0;
  const maxLevel = wall.levels
    .filter((l) => l.districtHallRequired <= dhLevel)
    .reduce((m, l) => Math.max(m, l.level), 0);
  return count * maxLevel;
}

export function ccCapitalPeakStructures(
  buildings: CCBuildingWithCapitalHall[],
  chLevel: number,
): number {
  return buildings.reduce((sum, b) => {
    const count = b.availablePerCapitalHall.find((e) => e.capitalHallLevel === chLevel)?.count ?? 0;
    if (count === 0) return sum;
    const maxLevel = b.levels
      .filter((l) => l.capitalHallRequired <= chLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    return sum + count * maxLevel;
  }, 0);
}

export function ccCapitalPeakWalls(wall: CCWall, chLevel: number): number {
  const count =
    wall.availablePerCapitalHall.find((e) => e.capitalHallLevel === chLevel)?.count ?? 0;
  if (count === 0) return 0;
  const maxLevel = wall.levels
    .filter((l) => l.capitalHallRequired <= chLevel)
    .reduce((m, l) => Math.max(m, l.level), 0);
  return count * maxLevel;
}

export function ccDistrictCounts(
  buildings: CCBuildingWithDistrict[],
  wall: CCWall,
  district: string,
  dhLevel: number,
): ClanCapitalDistrictCounts {
  const structures = ccDistrictStructures(buildings, district, dhLevel);
  const walls = ccDistrictWalls(wall, district, dhLevel);
  return { structures, walls, total: structures + walls };
}
