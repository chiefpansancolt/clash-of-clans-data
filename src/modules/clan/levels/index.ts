import rawData from '@/data/clan/levels.json';
import { QueryBase } from '@/common/query-base';
import { ClanBadge, ClanLabel, ClanLevel } from '@/types';

const allLevels: ClanLevel[] = rawData.levels as unknown as ClanLevel[];
const allLabels: ClanLabel[] = rawData.labels as unknown as ClanLabel[];

/**
 * Query class for clan level progression data.
 * Returned by `clan().levels()`.
 */
export class ClanLevels {
  constructor(private readonly data: ClanLevel[]) {}

  /** Return all clan levels. */
  get(): ClanLevel[] {
    return this.data;
  }

  /** Return the number of clan levels. */
  count(): number {
    return this.data.length;
  }

  /** Return the entry for a specific clan level number, or `undefined` if not found. */
  atLevel(level: number): ClanLevel | undefined {
    return this.data.find((l) => l.level === level);
  }

  /** Filter to levels that display a specific badge. */
  byBadge(badge: ClanBadge): ClanLevels {
    return new ClanLevels(this.data.filter((l) => l.badge === badge));
  }
}

/**
 * Query class for clan label types.
 * Returned by `clan().labels()`.
 */
export class ClanLabels extends QueryBase<ClanLabel> {
  byId(id: string): ClanLabels {
    return new ClanLabels(this.data.filter((l) => l.id === id));
  }
}

export function createClanLevels(): ClanLevels {
  return new ClanLevels(allLevels);
}

export function createClanLabels(): ClanLabels {
  return new ClanLabels(allLabels);
}
