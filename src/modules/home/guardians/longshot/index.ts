import rawData from '@/data/home/guardians/longshot.json';
import { LongshotGuardian } from '@/types';

export const longshotData: LongshotGuardian = rawData as unknown as LongshotGuardian;

/** Returns the complete Longshot guardian entity with all 5 levels. */
export function longshot(): LongshotGuardian {
  return longshotData;
}
