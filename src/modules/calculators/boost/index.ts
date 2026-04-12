import { BoostTier, BuildCostResource } from '@/types';
import { BuildTime } from '@/types';
import { fromTotalSeconds, toTotalSeconds } from '../utils';

/** Query class for boost calculations (time and cost). Returned by `calculators().boost()`. */
export class BuildBoostCalculator {
  // ── Time reduction ──────────────────────────────────────────────────────────

  /** Apply a Builder Boost to reduce build time by the given tier percentage (10, 15, or 20). */
  builderBoost(time: BuildTime, tier: BoostTier): BuildTime {
    return fromTotalSeconds(toTotalSeconds(time) * (1 - tier / 100));
  }

  /** Apply a Research Boost to reduce research time by the given tier percentage (10, 15, or 20). */
  researchBoost(time: BuildTime, tier: BoostTier): BuildTime {
    return fromTotalSeconds(toTotalSeconds(time) * (1 - tier / 100));
  }

  // ── Cost reduction ──────────────────────────────────────────────────────────

  /**
   * Apply a Builder Boost to reduce a build cost (Gold, Elixir, or Dark Elixir)
   * by the given tier percentage (10, 15, or 20). Returns the reduced cost, floored.
   */
  builderBoostCost(cost: number, resource: BuildCostResource, tier: BoostTier): number {
    void resource;
    return Math.floor(cost * (1 - tier / 100));
  }

  /**
   * Apply a Research Boost to reduce a research cost (Gold, Elixir, or Dark Elixir)
   * by the given tier percentage (10, 15, or 20). Returns the reduced cost, floored.
   */
  researchBoostCost(cost: number, resource: BuildCostResource, tier: BoostTier): number {
    void resource;
    return Math.floor(cost * (1 - tier / 100));
  }
}
