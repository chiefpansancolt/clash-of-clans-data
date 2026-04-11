import rawData from '@/data/builder/resource-buildings/elixir-collector.json';
import { BuilderResourceBuilding } from '@/types';

export const elixirCollectorData: BuilderResourceBuilding =
  rawData as unknown as BuilderResourceBuilding;
