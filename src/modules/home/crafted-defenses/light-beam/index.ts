import rawData from '@/data/home/crafted-defenses/light-beam.json';
import { CraftedDefense } from '@/types';

export const lightBeamData: CraftedDefense = rawData as unknown as CraftedDefense;

export function lightBeam(): CraftedDefense {
  return lightBeamData;
}
