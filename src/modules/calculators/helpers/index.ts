import alchemistJson from '@/data/home/other/helpers/alchemist.json';
import buildersApprenticeJson from '@/data/home/other/helpers/builders-apprentice.json';
import labAssistantJson from '@/data/home/other/helpers/lab-assistant.json';
import prospectorJson from '@/data/home/other/helpers/prospector.json';
import {
  AlchemistLevel,
  AlchemistResult,
  BuildersApprenticeLevel,
  BuildTime,
  LabAssistantLevel,
  ProspectorLevel,
  ProspectorResult,
} from '@/types';
import { subtractHours } from '../utils';

export type {
  AlchemistLevel,
  AlchemistResult,
  BuildersApprenticeLevel,
  LabAssistantLevel,
  ProspectorLevel,
  ProspectorResult,
};

/** Exchange rate: 150 Gold/Elixir = 1 Dark Elixir (fixed across all Alchemist levels). */
const GOLD_ELIXIR_TO_DE_RATE = 150;

/**
 * Query class for Helper Hut helper calculations.
 * Returned by `calculators().helpers()`.
 */
export class HelpersCalculator {
  /**
   * Lab Assistant — reduces remaining research time by the helper's `workRate` at the given level
   * (workRate = hours of lab progress completed in 60 min of real time).
   */
  labAssistant(time: BuildTime, level: LabAssistantLevel): BuildTime {
    const lvl = labAssistantJson.levels.find((l) => l.level === level)!;
    return subtractHours(time, lvl.workRate);
  }

  /**
   * Builder's Apprentice — reduces remaining build time by the helper's `workRate` at the given level.
   * Note: does not boost the Apprentice's own build queue.
   */
  buildersApprentice(time: BuildTime, level: BuildersApprenticeLevel): BuildTime {
    const lvl = buildersApprenticeJson.levels.find((l) => l.level === level)!;
    return subtractHours(time, lvl.workRate);
  }

  /**
   * Alchemist — converts Gold or Elixir to Dark Elixir at a rate of 150:1,
   * with a bonus percentage applied on top at the given level.
   * Input is capped at the level's `goldElixirConversionMax`.
   */
  alchemist(goldOrElixir: number, level: AlchemistLevel): AlchemistResult {
    const lvl = alchemistJson.levels.find((l) => l.level === level)!;
    const input = Math.min(goldOrElixir, lvl.goldElixirConversionMax);
    const base = Math.floor(input / GOLD_ELIXIR_TO_DE_RATE);
    const bonus = Math.floor((base * lvl.conversionBonusPercent) / 100);
    return { input, base, bonus, total: base + bonus };
  }

  /**
   * Prospector — returns the maximum daily ore conversion amounts at the given level.
   */
  prospector(level: ProspectorLevel): ProspectorResult {
    const lvl = prospectorJson.levels.find((l) => l.level === level)!;
    return {
      shinyOre: lvl.shinyOreConversionMax,
      glowyOre: lvl.glowyOreConversionMax,
      starryOre: lvl.starryOreConversionMax,
    };
  }
}
