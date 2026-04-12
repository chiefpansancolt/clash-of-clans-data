import rawData from '@/data/clan-capital/army-buildings/spell-storage.json';
import { ClanCapitalSpellStorageBuilding } from '@/types';

export const spellStorageData: ClanCapitalSpellStorageBuilding =
  rawData as unknown as ClanCapitalSpellStorageBuilding;
