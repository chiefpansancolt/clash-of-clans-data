import rawData from '@/data/builder/resource-buildings/elixir-storage.json';
import { BuilderResourceBuilding } from '@/types';

export const elixirStorageData: BuilderResourceBuilding =
  rawData as unknown as BuilderResourceBuilding;
