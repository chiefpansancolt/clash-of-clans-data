import { BuildTime } from '@/types';
import { toTotalSeconds } from '../utils';

// Tiered anchor points: 0s=0, 1min=1, 1hr=20, 1day=260, 7days=1000
const TIERS = [
  { seconds: 0, gems: 0 },
  { seconds: 60, gems: 1 },
  { seconds: 3600, gems: 20 },
  { seconds: 86400, gems: 260 },
  { seconds: 604800, gems: 1000 },
] as const;

export class GemsCalculator {
  cost(time: BuildTime): number {
    const s = toTotalSeconds(time);
    if (s <= 0) return 0;
    if (s < 60) return 1;

    for (let i = 1; i < TIERS.length; i++) {
      if (s <= TIERS[i].seconds) {
        const t0 = TIERS[i - 1];
        const t1 = TIERS[i];
        const progress = (s - t0.seconds) / (t1.seconds - t0.seconds);
        return Math.floor(t0.gems + progress * (t1.gems - t0.gems));
      }
    }

    // Beyond 7 days: extrapolate at the final tier's rate
    const last = TIERS[TIERS.length - 1];
    const prev = TIERS[TIERS.length - 2];
    const ratePerSecond = (last.gems - prev.gems) / (last.seconds - prev.seconds);
    return Math.floor(last.gems + (s - last.seconds) * ratePerSecond);
  }
}
