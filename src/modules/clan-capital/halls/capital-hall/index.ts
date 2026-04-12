import { QueryBase } from '@/common/query-base';
import rawData from '@/data/clan-capital/halls/capital-hall.json';
import { CapitalHall } from '@/types';

export const capitalHallData: CapitalHall = rawData as unknown as CapitalHall;

/**
 * Query class wrapping the single Capital Hall entity.
 * Returned by `clanCapital().capitalHall()`.
 */
export class ClanCapitalCapitalHall extends QueryBase<CapitalHall> {
  constructor() {
    super([capitalHallData]);
  }
}
