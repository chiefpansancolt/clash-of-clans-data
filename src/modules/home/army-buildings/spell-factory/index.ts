import rawData from '@/data/home/army-buildings/spell-factory.json';
import { HomeSpellFactoryBuilding } from '@/types';

export const spellFactoryData: HomeSpellFactoryBuilding =
  rawData as unknown as HomeSpellFactoryBuilding;
