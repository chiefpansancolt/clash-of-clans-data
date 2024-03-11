import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Life Gem',
	description: 'Nearby friendly units gain extra hitpoints.',
	maxLevel: 18,
	hero: Constants.grandWarden,
	abilityType: Constants.passive,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				percentHitpointIncrease: 40,
				maxHitpointIncrease: 275,
			},
			heroBoost: {
				damagePerSecondIncrease: 10,
				hitpointIncrease: 150,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 2,
			abilityAttribute: {
				percentHitpointIncrease: 40,
				maxHitpointIncrease: 275,
			},
			heroBoost: {
				damagePerSecondIncrease: 12,
				hitpointIncrease: 163,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 3,
			abilityAttribute: {
				percentHitpointIncrease: 50,
				maxHitpointIncrease: 350,
			},
			heroBoost: {
				damagePerSecondIncrease: 14,
				hitpointIncrease: 172,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 4,
			abilityAttribute: {
				percentHitpointIncrease: 50,
				maxHitpointIncrease: 350,
			},
			heroBoost: {
				damagePerSecondIncrease: 16,
				hitpointIncrease: 181,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 5,
			abilityAttribute: {
				percentHitpointIncrease: 50,
				maxHitpointIncrease: 350,
			},
			heroBoost: {
				damagePerSecondIncrease: 18,
				hitpointIncrease: 192,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 6,
			abilityAttribute: {
				percentHitpointIncrease: 60,
				maxHitpointIncrease: 425,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				hitpointIncrease: 203,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 7,
			abilityAttribute: {
				percentHitpointIncrease: 60,
				maxHitpointIncrease: 425,
			},
			heroBoost: {
				damagePerSecondIncrease: 22,
				hitpointIncrease: 225,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 8,
			abilityAttribute: {
				percentHitpointIncrease: 60,
				maxHitpointIncrease: 425,
			},
			heroBoost: {
				damagePerSecondIncrease: 24,
				hitpointIncrease: 249,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 9,
			abilityAttribute: {
				percentHitpointIncrease: 70,
				maxHitpointIncrease: 500,
			},
			heroBoost: {
				damagePerSecondIncrease: 28,
				hitpointIncrease: 275,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 10,
			abilityAttribute: {
				percentHitpointIncrease: 70,
				maxHitpointIncrease: 500,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				hitpointIncrease: 304,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 11,
			abilityAttribute: {
				percentHitpointIncrease: 70,
				maxHitpointIncrease: 500,
			},
			heroBoost: {
				damagePerSecondIncrease: 38,
				hitpointIncrease: 336,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 12,
			abilityAttribute: {
				percentHitpointIncrease: 80,
				maxHitpointIncrease: 575,
			},
			heroBoost: {
				damagePerSecondIncrease: 42,
				hitpointIncrease: 351,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 13,
			abilityAttribute: {
				percentHitpointIncrease: 80,
				maxHitpointIncrease: 575,
			},
			heroBoost: {
				damagePerSecondIncrease: 46,
				hitpointIncrease: 366,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 14,
			abilityAttribute: {
				percentHitpointIncrease: 80,
				maxHitpointIncrease: 575,
			},
			heroBoost: {
				damagePerSecondIncrease: 50,
				hitpointIncrease: 381,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 15,
			abilityAttribute: {
				percentHitpointIncrease: 90,
				maxHitpointIncrease: 650,
			},
			heroBoost: {
				damagePerSecondIncrease: 54,
				hitpointIncrease: 396,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 16,
			abilityAttribute: {
				percentHitpointIncrease: 90,
				maxHitpointIncrease: 650,
			},
			heroBoost: {
				damagePerSecondIncrease: 58,
				hitpointIncrease: 411,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 17,
			abilityAttribute: {
				percentHitpointIncrease: 90,
				maxHitpointIncrease: 650,
			},
			heroBoost: {
				damagePerSecondIncrease: 62,
				hitpointIncrease: 426,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
		{
			level: 18,
			abilityAttribute: {
				percentHitpointIncrease: 100,
				maxHitpointIncrease: 725,
			},
			heroBoost: {
				damagePerSecondIncrease: 66,
				hitpointIncrease: 441,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Life_Gem.png/revision/latest/scale-to-width-down/200?cb=20231212145821',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
