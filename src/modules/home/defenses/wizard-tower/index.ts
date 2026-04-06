import rawData from '@/data/home/defenses/wizard-tower.json';
import { HomeDefense } from '@/types';

export const wizardTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Wizard Tower building entity with all 17 levels. */
export function wizardTower(): HomeDefense {
  return wizardTowerData;
}
