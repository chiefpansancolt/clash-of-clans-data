import rawData from '@/data/builder/army-buildings/reinforcement-camp.json';
import { BuilderArmyCampBuilding } from '@/types';

export const reinforcementCampData: BuilderArmyCampBuilding =
  rawData as unknown as BuilderArmyCampBuilding;
