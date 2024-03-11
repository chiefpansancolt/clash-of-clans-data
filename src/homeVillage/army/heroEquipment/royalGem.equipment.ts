import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Royal Gem',
	description: 'Heals the Royal Champion by an extra large amount.',
	maxLevel: 18,
	hero: Constants.royalChampion,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				healthRecovery: 1200,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				hitpointIncrease: 40,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 2,
			abilityAttribute: {
				healthRecovery: 1200,
			},
			heroBoost: {
				damagePerSecondIncrease: 25,
				hitpointIncrease: 60,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 3,
			abilityAttribute: {
				healthRecovery: 1450,
			},
			heroBoost: {
				damagePerSecondIncrease: 30,
				hitpointIncrease: 80,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 4,
			abilityAttribute: {
				healthRecovery: 1450,
			},
			heroBoost: {
				damagePerSecondIncrease: 35,
				hitpointIncrease: 100,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 5,
			abilityAttribute: {
				healthRecovery: 1450,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
				hitpointIncrease: 120,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 6,
			abilityAttribute: {
				healthRecovery: 1600,
			},
			heroBoost: {
				damagePerSecondIncrease: 45,
				hitpointIncrease: 140,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 7,
			abilityAttribute: {
				healthRecovery: 1600,
			},
			heroBoost: {
				damagePerSecondIncrease: 50,
				hitpointIncrease: 160,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 8,
			abilityAttribute: {
				healthRecovery: 1600,
			},
			heroBoost: {
				damagePerSecondIncrease: 55,
				hitpointIncrease: 180,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 9,
			abilityAttribute: {
				healthRecovery: 1800,
			},
			heroBoost: {
				damagePerSecondIncrease: 60,
				hitpointIncrease: 200,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 10,
			abilityAttribute: {
				healthRecovery: 1800,
			},
			heroBoost: {
				damagePerSecondIncrease: 65,
				hitpointIncrease: 220,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 11,
			abilityAttribute: {
				healthRecovery: 1800,
			},
			heroBoost: {
				damagePerSecondIncrease: 70,
				hitpointIncrease: 240,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 12,
			abilityAttribute: {
				healthRecovery: 2000,
			},
			heroBoost: {
				damagePerSecondIncrease: 75,
				hitpointIncrease: 260,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 13,
			abilityAttribute: {
				healthRecovery: 2000,
			},
			heroBoost: {
				damagePerSecondIncrease: 80,
				hitpointIncrease: 280,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 14,
			abilityAttribute: {
				healthRecovery: 2000,
			},
			heroBoost: {
				damagePerSecondIncrease: 85,
				hitpointIncrease: 300,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 15,
			abilityAttribute: {
				healthRecovery: 2200,
			},
			heroBoost: {
				damagePerSecondIncrease: 90,
				hitpointIncrease: 320,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 16,
			abilityAttribute: {
				healthRecovery: 2200,
			},
			heroBoost: {
				damagePerSecondIncrease: 95,
				hitpointIncrease: 340,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 17,
			abilityAttribute: {
				healthRecovery: 2200,
			},
			heroBoost: {
				damagePerSecondIncrease: 100,
				hitpointIncrease: 360,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
		{
			level: 18,
			abilityAttribute: {
				healthRecovery: 2400,
			},
			heroBoost: {
				damagePerSecondIncrease: 105,
				hitpointIncrease: 380,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Royal_Gem.png/revision/latest/scale-to-width-down/200?cb=20231211154310',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
