import rawData from '@/data/home/other/helpers/builders-apprentice.json';
import { HomeBuilderApprenticeHelper } from '@/types';

export const buildersApprenticeData: HomeBuilderApprenticeHelper =
  rawData as unknown as HomeBuilderApprenticeHelper;
