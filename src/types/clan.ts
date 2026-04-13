/** Badge tier displayed on a clan's profile. */
export type ClanBadge = 'bronze' | 'silver' | 'gold' | 'crystal' | 'master' | 'champion' | 'titan' | 'legend';

/** Donation limits unlocked at a given clan level. */
export interface ClanDonationLimit {
  troops: number;
  spells: number;
  siegeMachines: number;
}

/** Perks that apply at a given clan level. */
export interface ClanLevelPerks {
  /** Maximum troops/spells/siege machines that can be donated per request. */
  donationLimit: ClanDonationLimit;
  /** Number of extra levels donated troops/spells are upgraded by (0, 1, or 2). */
  donationUpgradeLevels: number;
  /** Extra loot stored in the Treasury, as a percentage (0–50). */
  treasuryExtraStorage: number;
  /** Extra loot earned from the war bonus, as a percentage (0–25). */
  warBonusExtraLoot: number;
}

/** A single clan level entry with XP requirements and unlocked perks. */
export interface ClanLevel {
  level: number;
  /** XP required to reach this level from the previous one. Null for level 1. */
  xpRequired: number | null;
  /** Total XP accumulated to reach this level. Null for level 1. */
  cumulativeXp: number | null;
  badge: ClanBadge;
  /** Path to the badge image. */
  image: string;
  perks: ClanLevelPerks;
}

/** A clan label that can be displayed on a clan's profile. */
export interface ClanLabel {
  id: string;
  name: string;
  /** Path to the label icon image. */
  image: string;
}

// ── War types ──────────────────────────────────────────────────────────────

/** Gold/Elixir and Dark Elixir amounts. */
export interface WarLootAmount {
  goldAndElixir: number;
  darkElixir: number;
}

/** Maximum available war base loot for a given Town Hall level. */
export interface WarBaseLootEntry {
  townHallLevel: number;
  goldAndElixir: number;
  darkElixir: number;
}

/** War bonus (victory/draw/defeat) for a specific Town Hall level. */
export interface WarBonusByTownHall {
  townHallLevel: number;
  victory: WarLootAmount;
  draw: WarLootAmount;
  defeat: WarLootAmount;
}

/** War bonus amounts for a clan level tier across all Town Hall levels. */
export interface WarBonusTier {
  /** E.g. "1-2", "3-4", "9+". */
  clanLevelRange: string;
  label: string;
  minClanLevel: number;
  /** Absent for the top tier (9+). */
  maxClanLevel?: number;
  byTownHall: WarBonusByTownHall[];
}

/** Maximum ore available in an enemy war base for a given Town Hall level. */
export interface WarBaseOreEntry {
  /** Number for TH8–15; string "16-18" for the grouped top tier. */
  townHallLevel: number | string;
  shinyOre: number;
  glowyOre: number;
  /** Null for TH8–9 (Starry Ore not available). */
  starryOre: number | null;
}
