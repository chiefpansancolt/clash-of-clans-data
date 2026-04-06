import rawData from '@/data/home/defenses/super-wizard-tower.json';
import { HomeDefense } from '@/types';

export const superWizardTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Super Wizard Tower building entity with all 4 levels (2 regular + 2 supercharge). */
export function superWizardTower(): HomeDefense {
  return superWizardTowerData;
}
