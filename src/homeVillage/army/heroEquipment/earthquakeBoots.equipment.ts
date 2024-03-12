import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Earthquake Books',
	description: 'Causes a powerful earthquake which destroys Walls and damages Buildings',
	maxLevel: 18,
	hero: Constants.barbarianKing,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel1,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
	mode: {
		abilityRadius: 6,
		bonusDamage: 100,
		unitTypeTarget: Constants.ground,
	},
	levels: [
		{
			level: 1,
			abilityAttribute: {
				earthquakeDamage: 10,
			},
			heroBoost: {
				damagePerSecondIncrease: 13,
				hitpointIncrease: 209,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 2,
			abilityAttribute: {
				earthquakeDamage: 10,
			},
			heroBoost: {
				damagePerSecondIncrease: 15,
				hitpointIncrease: 244,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 3,
			abilityAttribute: {
				earthquakeDamage: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 17,
				hitpointIncrease: 278,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 4,
			abilityAttribute: {
				earthquakeDamage: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 19,
				hitpointIncrease: 313,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 5,
			abilityAttribute: {
				earthquakeDamage: 20,
			},
			heroBoost: {
				damagePerSecondIncrease: 21,
				hitpointIncrease: 348,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 6,
			abilityAttribute: {
				earthquakeDamage: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 23,
				hitpointIncrease: 383,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 7,
			abilityAttribute: {
				earthquakeDamage: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 26,
				hitpointIncrease: 418,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 8,
			abilityAttribute: {
				earthquakeDamage: 30,
			},
			heroBoost: {
				damagePerSecondIncrease: 28,
				hitpointIncrease: 452,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 9,
			abilityAttribute: {
				earthquakeDamage: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				hitpointIncrease: 522,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 10,
			abilityAttribute: {
				earthquakeDamage: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
				hitpointIncrease: 677,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 11,
			abilityAttribute: {
				earthquakeDamage: 35,
			},
			heroBoost: {
				damagePerSecondIncrease: 48,
				hitpointIncrease: 831,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 12,
			abilityAttribute: {
				earthquakeDamage: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 55,
				hitpointIncrease: 986,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 13,
			abilityAttribute: {
				earthquakeDamage: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 63,
				hitpointIncrease: 1140,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 14,
			abilityAttribute: {
				earthquakeDamage: 40,
			},
			heroBoost: {
				damagePerSecondIncrease: 71,
				hitpointIncrease: 1295,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 15,
			abilityAttribute: {
				earthquakeDamage: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 79,
				hitpointIncrease: 1449,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 16,
			abilityAttribute: {
				earthquakeDamage: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 86,
				hitpointIncrease: 1604,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 17,
			abilityAttribute: {
				earthquakeDamage: 45,
			},
			heroBoost: {
				damagePerSecondIncrease: 94,
				hitpointIncrease: 1758,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
		{
			level: 18,
			abilityAttribute: {
				earthquakeDamage: 50,
			},
			heroBoost: {
				damagePerSecondIncrease: 102,
				hitpointIncrease: 1913,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Earthquake_Boots.png/revision/latest/scale-to-width-down/200?cb=20231211153708',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
