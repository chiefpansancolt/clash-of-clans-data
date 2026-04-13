import rawData from '@/data/clan/war.json';
import { WarBaseLootEntry, WarBonusTier, WarBaseOreEntry } from '@/types';

const allMaxWarBaseLoot: WarBaseLootEntry[] = rawData.maxWarBaseLoot as unknown as WarBaseLootEntry[];
const allWarBonus: WarBonusTier[] = rawData.warBonus as unknown as WarBonusTier[];
const allMaxWarBaseOre: WarBaseOreEntry[] = rawData.maxWarBaseOre as unknown as WarBaseOreEntry[];

/**
 * Query class for clan war data — loot, bonuses, and ore.
 * Returned by `clan().war()`.
 */
export class ClanWar {
  /** Maximum available loot in an enemy war base, indexed by Town Hall level (TH3–18). */
  maxWarBaseLoot(): WarBaseLootEntry[] {
    return allMaxWarBaseLoot;
  }

  /** Maximum available ore in an enemy war base, indexed by Town Hall level (TH8–18). */
  maxWarBaseOre(): WarBaseOreEntry[] {
    return allMaxWarBaseOre;
  }

  /** War bonus tiers, grouped by clan level range. */
  warBonus(): WarBonusTier[] {
    return allWarBonus;
  }

  /**
   * Return the war bonus tier that applies to the given clan level.
   * Returns `undefined` if the clan level is below 1.
   */
  bonusTierForClanLevel(clanLevel: number): WarBonusTier | undefined {
    return allWarBonus.find((tier) => {
      if (clanLevel < tier.minClanLevel) return false;
      if (tier.maxClanLevel === undefined) return true;
      return clanLevel <= tier.maxClanLevel;
    });
  }
}

export function createClanWar(): ClanWar {
  return new ClanWar();
}
