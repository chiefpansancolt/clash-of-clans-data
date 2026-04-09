export type EquipmentRarity = 'Common' | 'Rare' | 'Epic';

export interface HeroEquipmentLevel {
  level: number;
  hitpointIncrease: number;
  hpRecoveryIncrease: number;
  upgradeShinyOre: number;
  upgradeGlowingOre: number;
  upgradeStarryOre: number;
  blacksmithLevelRequired: number;
  stats: Record<string, string | number>;
}

export interface HeroEquipment {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'hero-equipment';
  hero: string;
  rarity: EquipmentRarity;
  abilityType: 'Active' | 'Passive';
  unlockRequirement: string;
  images: { icon: string };
  levels: HeroEquipmentLevel[];
}
