import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Giant Gauntlet',
	description: 'Barbarian King becomes gigantic, doing area damage and taking less damage',
	maxLevel: 27,
	hero: Constants.barbarianKing,
	abilityType: Constants.active,
	rarity: Constants.epic,
	unlockRequirement: Constants.cookieRumble,
	mode: {
		areaDamageRadius: 2.5,
	},
	levels: [
		{
			level: 1,
			abilityAttribute: {
				abilityDuration: 12,
				incomeDamageReduction: 15,
			},
			heroBoost: {
				damagePerSecondIncrease: 17,
				selfHealingPerSecond: 6,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 2,
			abilityAttribute: {
				abilityDuration: 12,
				incomeDamageReduction: 15,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				selfHealingPerSecond: 8,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 3,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 23,
				selfHealingPerSecond: 10,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 4,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 26,
				selfHealingPerSecond: 12,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 5,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 29,
				selfHealingPerSecond: 14,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 6,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				selfHealingPerSecond: 16,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 7,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 34,
				selfHealingPerSecond: 18,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 8,
			abilityAttribute: {
				abilityDuration: 13,
				incomeDamageReduction: 25,
			},
			heroBoost: {
				damagePerSecondIncrease: 37,
				selfHealingPerSecond: 20,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 9,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 43,
				selfHealingPerSecond: 22,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			starryOreUpgradeCost: 10,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 10,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 53,
				selfHealingPerSecond: 24,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 11,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 63,
				selfHealingPerSecond: 26,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 12,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 74,
				selfHealingPerSecond: 28,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			starryOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 13,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 84,
				selfHealingPerSecond: 30,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 14,
			abilityAttribute: {
				abilityDuration: 14,
				incomeDamageReduction: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 94,
				selfHealingPerSecond: 31,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 15,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 104,
				selfHealingPerSecond: 32,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 30,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 16,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 115,
				selfHealingPerSecond: 33,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 17,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 125,
				selfHealingPerSecond: 34,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 18,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 135,
				selfHealingPerSecond: 35,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 50,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 19,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 140,
				selfHealingPerSecond: 36,
			},
			shinyOreUpgradeCost: 2800,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 20,
			abilityAttribute: {
				abilityDuration: 15,
				incomeDamageReduction: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 145,
				selfHealingPerSecond: 37,
			},
			shinyOreUpgradeCost: 2900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 21,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 50,
			},
			heroBoost: {
				damagePerSecondIncrease: 150,
				selfHealingPerSecond: 38,
			},
			shinyOreUpgradeCost: 3000,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 100,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 22,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 50,
			},
			heroBoost: {
				damagePerSecondIncrease: 155,
				selfHealingPerSecond: 39,
			},
			shinyOreUpgradeCost: 3100,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 23,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 50,
			},
			heroBoost: {
				damagePerSecondIncrease: 160,
				selfHealingPerSecond: 40,
			},
			shinyOreUpgradeCost: 3200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 24,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 55,
			},
			heroBoost: {
				damagePerSecondIncrease: 165,
				selfHealingPerSecond: 41,
			},
			shinyOreUpgradeCost: 3300,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 120,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 25,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 55,
			},
			heroBoost: {
				damagePerSecondIncrease: 170,
				selfHealingPerSecond: 42,
			},
			shinyOreUpgradeCost: 3400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 26,
			abilityAttribute: {
				abilityDuration: 16,
				incomeDamageReduction: 55,
			},
			heroBoost: {
				damagePerSecondIncrease: 175,
				selfHealingPerSecond: 43,
			},
			shinyOreUpgradeCost: 3500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
		{
			level: 27,
			abilityAttribute: {
				abilityDuration: 17,
				incomeDamageReduction: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 180,
				selfHealingPerSecond: 44,
			},
			shinyOreUpgradeCost: 3600,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 150,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Giant_Gauntlet.png/revision/latest/scale-to-width-down/1000?cb=20231218115547',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
