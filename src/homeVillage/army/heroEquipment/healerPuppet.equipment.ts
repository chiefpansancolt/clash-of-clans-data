import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Healer Puppet',
	description: 'Summons a flock of Healers',
	maxLevel: 18,
	hero: Constants.archerQueen,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel5,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				summonedTroopCount: 1,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 4,
			},
			heroBoost: {
				selfHealingPerSecond: 6,
				hitpointIncrease: 132,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 2,
			abilityAttribute: {
				summonedTroopCount: 1,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 4,
			},
			heroBoost: {
				selfHealingPerSecond: 8,
				hitpointIncrease: 154,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 3,
			abilityAttribute: {
				summonedTroopCount: 1,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 10,
				hitpointIncrease: 177,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 4,
			abilityAttribute: {
				summonedTroopCount: 1,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 12,
				hitpointIncrease: 199,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 5,
			abilityAttribute: {
				summonedTroopCount: 1,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 14,
				hitpointIncrease: 221,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 6,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 16,
				hitpointIncrease: 243,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 7,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 18,
				hitpointIncrease: 265,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 8,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 5,
			},
			heroBoost: {
				selfHealingPerSecond: 20,
				hitpointIncrease: 287,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 9,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 6,
			},
			heroBoost: {
				selfHealingPerSecond: 22,
				hitpointIncrease: 331,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 10,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 6,
			},
			heroBoost: {
				selfHealingPerSecond: 24,
				hitpointIncrease: 402,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 11,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 6,
			},
			heroBoost: {
				selfHealingPerSecond: 26,
				hitpointIncrease: 473,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 12,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 28,
				hitpointIncrease: 543,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 13,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 30,
				hitpointIncrease: 614,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 14,
			abilityAttribute: {
				summonedTroopCount: 2,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 31,
				hitpointIncrease: 685,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 15,
			abilityAttribute: {
				summonedTroopCount: 3,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 32,
				hitpointIncrease: 756,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 16,
			abilityAttribute: {
				summonedTroopCount: 3,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 33,
				hitpointIncrease: 826,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 17,
			abilityAttribute: {
				summonedTroopCount: 3,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 7,
			},
			heroBoost: {
				selfHealingPerSecond: 34,
				hitpointIncrease: 897,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
		{
			level: 18,
			abilityAttribute: {
				summonedTroopCount: 3,
				summonedTroop: Constants.healers,
				summonedTroopLevel: 8,
			},
			heroBoost: {
				selfHealingPerSecond: 35,
				hitpointIncrease: 968,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Healer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211154103',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
