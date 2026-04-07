import rawData from '@/data/home/other/helpers/lab-assistant.json';
import { HomeLabAssistantHelper } from '@/types';

export const labAssistantData: HomeLabAssistantHelper =
  rawData as unknown as HomeLabAssistantHelper;
