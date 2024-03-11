import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Rage Gem',
	description: 'Nearby friendly units do extra damage.',
	maxLevel: 18,
	hero: Constants.grandWarden,
	abilityType: Constants.passive,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel4,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				percentDamageIncrease: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 12,
				attackSpeedIncrease: 5,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 2,
			abilityAttribute: {
				percentDamageIncrease: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 14,
				attackSpeedIncrease: 6,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 3,
			abilityAttribute: {
				percentDamageIncrease: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 16,
				attackSpeedIncrease: 7,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 4,
			abilityAttribute: {
				percentDamageIncrease: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 18,
				attackSpeedIncrease: 8,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 5,
			abilityAttribute: {
				percentDamageIncrease: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				attackSpeedIncrease: 9,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 6,
			abilityAttribute: {
				percentDamageIncrease: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 22,
				attackSpeedIncrease: 10,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 7,
			abilityAttribute: {
				percentDamageIncrease: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 24,
				attackSpeedIncrease: 11,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 8,
			abilityAttribute: {
				percentDamageIncrease: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 26,
				attackSpeedIncrease: 12,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 9,
			abilityAttribute: {
				percentDamageIncrease: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 30,
				attackSpeedIncrease: 13,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 10,
			abilityAttribute: {
				percentDamageIncrease: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 36,
				attackSpeedIncrease: 14,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 11,
			abilityAttribute: {
				percentDamageIncrease: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 43,
				attackSpeedIncrease: 15,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 12,
			abilityAttribute: {
				percentDamageIncrease: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 49,
				attackSpeedIncrease: 16,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 13,
			abilityAttribute: {
				percentDamageIncrease: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 56,
				attackSpeedIncrease: 17,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 14,
			abilityAttribute: {
				percentDamageIncrease: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 62,
				attackSpeedIncrease: 18,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 15,
			abilityAttribute: {
				percentDamageIncrease: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 69,
				attackSpeedIncrease: 19,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 16,
			abilityAttribute: {
				percentDamageIncrease: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 75,
				attackSpeedIncrease: 20,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 17,
			abilityAttribute: {
				percentDamageIncrease: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 82,
				attackSpeedIncrease: 21,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
		{
			level: 18,
			abilityAttribute: {
				percentDamageIncrease: 50,
			},
			heroBoost: {
				damagePerSecondIncrease: 88,
				attackSpeedIncrease: 22,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8f/Rage_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154245',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
