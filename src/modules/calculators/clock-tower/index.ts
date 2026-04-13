import rawClockTower from '@/data/builder/other/clock-tower.json';
import { BuildTime, ClockTowerLevel } from '@/types';
import { fromTotalSeconds, toTotalSeconds } from '../utils';

interface ClockTowerLevelData {
  level: number;
  boostDurationMinutes: number;
  timeGainedMinutes: number;
}

const levels = rawClockTower.levels as unknown as ClockTowerLevelData[];

function levelData(level: ClockTowerLevel): ClockTowerLevelData {
  return levels[level - 1];
}

/** Query class for Clock Tower time calculations. Returned by `calculators().clockTower()`. */
export class ClockTowerCalculator {
  /**
   * Apply one full Clock Tower activation at the given level.
   * Reduces remaining build time by the `timeGainedMinutes` for that level.
   * Result is clamped to zero.
   */
  boost(time: BuildTime, level: ClockTowerLevel): BuildTime {
    const { timeGainedMinutes } = levelData(level);
    return fromTotalSeconds(toTotalSeconds(time) - timeGainedMinutes * 60);
  }

  /**
   * Apply a Clock Tower Potion (fixed 30-minute run) at the given level.
   * Time saved = floor(timeGainedMinutes × 30 / boostDurationMinutes).
   * Result is clamped to zero.
   */
  potion(time: BuildTime, level: ClockTowerLevel): BuildTime {
    const { boostDurationMinutes, timeGainedMinutes } = levelData(level);
    const minutesSaved = Math.floor((timeGainedMinutes * 30) / boostDurationMinutes);
    return fromTotalSeconds(toTotalSeconds(time) - minutesSaved * 60);
  }
}
