import { BuildTime } from '@/types';
import { toTotalSeconds } from '../utils';

/**
 * 1000 gems per week (7 days).
 * Expressed as integer math: gems = ceil(totalSeconds * 1000 / SECONDS_PER_WEEK).
 */
const SECONDS_PER_WEEK = 7 * 24 * 3600; // 604800

/**
 * Calculator for converting build/research time into gem cost.
 * Rate: 1000 gems per week, proportional and rounded up. Zero time costs 0 gems.
 */
export class GemsCalculator {
  /**
   * Returns the gem cost to instantly complete a given build or research time.
   * Formula: `ceil(totalSeconds * 1000 / 604800)`, with 0 seconds → 0 gems.
   * Examples: 1 hour → 6 gems, 1 day → 143 gems, 7 days → 1000 gems.
   */
  cost(time: BuildTime): number {
    const totalSeconds = toTotalSeconds(time);
    if (totalSeconds === 0) return 0;
    return Math.ceil((totalSeconds * 1000) / SECONDS_PER_WEEK);
  }
}
