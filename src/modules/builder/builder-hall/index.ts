import { QueryBase } from '@/common/query-base';
import rawData from '@/data/builder/builder-hall/builder-hall.json';
import { BuilderHall } from '@/types';

export const builderHallData: BuilderHall = rawData as unknown as BuilderHall;

/**
 * Query class wrapping the single Builder Hall entity.
 * Returned by `builder().builderHall()`.
 */
export class BuilderBaseBuilderHall extends QueryBase<BuilderHall> {
  constructor() {
    super([builderHallData]);
  }
}
