import { QueryBase } from '@/common/query-base';
import rawData from '@/data/clan-capital/halls/district-hall.json';
import { DistrictHall } from '@/types';

export const districtHallData: DistrictHall = rawData as unknown as DistrictHall;

/**
 * Query class wrapping the single District Hall entity.
 * Returned by `clanCapital().districtHall()`.
 */
export class ClanCapitalDistrictHall extends QueryBase<DistrictHall> {
  constructor() {
    super([districtHallData]);
  }
}
