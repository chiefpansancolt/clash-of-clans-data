import rawData from '@/data/builder/army-buildings/builder-barracks.json';
import { BuilderBarracksBuilding } from '@/types';

export const builderBarracksData: BuilderBarracksBuilding =
  rawData as unknown as BuilderBarracksBuilding;
