import rawData from '@/data/home/crafted-defenses/lava-launcher.json';
import { CraftedDefense } from '@/types';

export const lavaLauncherData: CraftedDefense = rawData as unknown as CraftedDefense;

export function lavaLauncher(): CraftedDefense {
  return lavaLauncherData;
}
