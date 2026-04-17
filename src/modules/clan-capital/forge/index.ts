import rawData from '@/data/clan-capital/forge/forge.json';
import type {
  BuildTime,
  ClanCapitalAvailableForgeEntry,
  ClanCapitalBuilderForgeEntry,
  ClanCapitalDailyForgeEntry,
  ClanCapitalForgeData,
  ClanCapitalForgeRates,
  ClanCapitalHomeForgeEntry,
} from '@/types';

const data = rawData as unknown as ClanCapitalForgeData;

/** Query class for Clan Capital Forge data. Returned by `clanCapital().forge()`. */
export class ClanCapitalForge {
  /** Capital Gold obtained from the daily forge, indexed by Town Hall level (TH6–18). */
  dailyForge(): ClanCapitalDailyForgeEntry[] {
    return data.dailyForge;
  }

  /** Capital Gold obtained from the daily forge at a specific Town Hall level. */
  dailyForgeAtTownHall(townHallLevel: number): ClanCapitalDailyForgeEntry | undefined {
    return data.dailyForge.find((e) => e.townHallLevel === townHallLevel);
  }

  /** Time required to complete one Auto Forge or Forge cycle. */
  craftingTime(): BuildTime {
    return data.craftingTime;
  }

  /**
   * Number of manual Forge slots available outside the Daily and Auto Forge,
   * each entry giving the TH level required to unlock that many slots.
   */
  availableForges(): ClanCapitalAvailableForgeEntry[] {
    return data.availableForges;
  }

  /** Number of manual Forge slots available at a specific Town Hall level. */
  availableForgesAtTownHall(townHallLevel: number): number {
    let slots = 0;
    for (const entry of data.availableForges) {
      if (townHallLevel >= entry.townHallRequired) slots = entry.slots;
    }
    return slots;
  }

  /**
   * Auto Forge resource conversion rates (home village + builder base).
   * Gold Pass discount prices are included for home and builder entries.
   */
  autoForge(): ClanCapitalForgeRates {
    return data.autoForge;
  }

  /** Auto Forge conversion rate for a specific Town Hall level. */
  autoForgeAtTownHall(townHallLevel: number): ClanCapitalHomeForgeEntry | undefined {
    return data.autoForge.home.find((e) => e.townHallLevel === townHallLevel);
  }

  /** Auto Forge conversion rate for a specific Builder Hall level. */
  autoForgeAtBuilderHall(builderHallLevel: number): ClanCapitalBuilderForgeEntry | undefined {
    return data.autoForge.builder.find((e) => e.builderHallLevel === builderHallLevel);
  }

  /**
   * Forge resource conversion rates (home village + builder base).
   * Higher cost than Auto Forge; no Gold Pass discount.
   */
  forgeRates(): ClanCapitalForgeRates {
    return data.forge;
  }

  /** Forge conversion rate for a specific Town Hall level. */
  forgeAtTownHall(townHallLevel: number): ClanCapitalHomeForgeEntry | undefined {
    return data.forge.home.find((e) => e.townHallLevel === townHallLevel);
  }

  /** Forge conversion rate for a specific Builder Hall level. */
  forgeAtBuilderHall(builderHallLevel: number): ClanCapitalBuilderForgeEntry | undefined {
    return data.forge.builder.find((e) => e.builderHallLevel === builderHallLevel);
  }
}
