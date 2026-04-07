import rawData from '@/data/home/guardians/smasher.json';
import { SmasherGuardian } from '@/types';

export const smasherData: SmasherGuardian = rawData as unknown as SmasherGuardian;

/** Returns the complete Smasher guardian entity with all 5 levels. */
export function smasher(): SmasherGuardian {
  return smasherData;
}
