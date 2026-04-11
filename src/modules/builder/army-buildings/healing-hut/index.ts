import rawData from '@/data/builder/army-buildings/healing-hut.json';
import { BuilderHealingHutBuilding } from '@/types';

export const healingHutData: BuilderHealingHutBuilding =
  rawData as unknown as BuilderHealingHutBuilding;
