import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Giant Arrow',
	description: 'Shoots a giant piercing arrow that crosses the entire village.',
	maxLevel: 18,
	hero: Constants.archerQueen,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel2,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
	mode: {
		damageRadius: 1,
	},
	levels: [
		{
			level: 1,
			abilityAttribute: {
				projectileDamage: 750,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				hitpointIncrease: 80,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 2,
			abilityAttribute: {
				projectileDamage: 750,
			},
			heroBoost: {
				damagePerSecondIncrease: 23,
				hitpointIncrease: 93,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 3,
			abilityAttribute: {
				projectileDamage: 850,
			},
			heroBoost: {
				damagePerSecondIncrease: 27,
				hitpointIncrease: 106,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 4,
			abilityAttribute: {
				projectileDamage: 850,
			},
			heroBoost: {
				damagePerSecondIncrease: 30,
				hitpointIncrease: 119,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 5,
			abilityAttribute: {
				projectileDamage: 850,
			},
			heroBoost: {
				damagePerSecondIncrease: 33,
				hitpointIncrease: 133,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 6,
			abilityAttribute: {
				projectileDamage: 1000,
			},
			heroBoost: {
				damagePerSecondIncrease: 37,
				hitpointIncrease: 146,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 7,
			abilityAttribute: {
				projectileDamage: 1000,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
				hitpointIncrease: 159,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 8,
			abilityAttribute: {
				projectileDamage: 1000,
			},
			heroBoost: {
				damagePerSecondIncrease: 43,
				hitpointIncrease: 172,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 9,
			abilityAttribute: {
				projectileDamage: 1200,
			},
			heroBoost: {
				damagePerSecondIncrease: 50,
				hitpointIncrease: 199,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 10,
			abilityAttribute: {
				projectileDamage: 1200,
			},
			heroBoost: {
				damagePerSecondIncrease: 59,
				hitpointIncrease: 241,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 11,
			abilityAttribute: {
				projectileDamage: 1200,
			},
			heroBoost: {
				damagePerSecondIncrease: 68,
				hitpointIncrease: 284,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 12,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				damagePerSecondIncrease: 77,
				hitpointIncrease: 326,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 13,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				damagePerSecondIncrease: 86,
				hitpointIncrease: 369,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 14,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				damagePerSecondIncrease: 96,
				hitpointIncrease: 411,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 15,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				damagePerSecondIncrease: 105,
				hitpointIncrease: 454,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 16,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				damagePerSecondIncrease: 114,
				hitpointIncrease: 496,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 17,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				damagePerSecondIncrease: 123,
				hitpointIncrease: 539,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
		{
			level: 18,
			abilityAttribute: {
				projectileDamage: 1950,
			},
			heroBoost: {
				damagePerSecondIncrease: 132,
				hitpointIncrease: 581,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Giant_Arrow.png/revision/latest/scale-to-width-down/200?cb=20231211154034',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
