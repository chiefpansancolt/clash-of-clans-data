import rawData from '@/data/builder/other/clock-tower.json';
import { BuilderClockTowerBuilding } from '@/types';

export const clockTowerData: BuilderClockTowerBuilding =
  rawData as unknown as BuilderClockTowerBuilding;
