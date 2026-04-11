import rawData from '@/data/builder/resource-buildings/gold-storage.json';
import { BuilderResourceBuilding } from '@/types';

export const goldStorageData: BuilderResourceBuilding =
  rawData as unknown as BuilderResourceBuilding;
