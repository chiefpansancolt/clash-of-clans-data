import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Healing Tomb',
	description: 'Heals the Grand Warden and all nearby friendly units.',
	maxLevel: 18,
	hero: Constants.grandWarden,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel6,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				healingPerSecond: 60,
				abilityDuration: 16,
			},
			heroBoost: {
				hitpointIncrease: 92,
				hitpointRecoveryIncrease: 165,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 2,
			abilityAttribute: {
				healingPerSecond: 60,
				abilityDuration: 16,
			},
			heroBoost: {
				hitpointIncrease: 107,
				hitpointRecoveryIncrease: 193,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 3,
			abilityAttribute: {
				healingPerSecond: 70,
				abilityDuration: 17.5,
			},
			heroBoost: {
				hitpointIncrease: 122,
				hitpointRecoveryIncrease: 220,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 4,
			abilityAttribute: {
				healingPerSecond: 70,
				abilityDuration: 17.5,
			},
			heroBoost: {
				hitpointIncrease: 137,
				hitpointRecoveryIncrease: 248,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 5,
			abilityAttribute: {
				healingPerSecond: 70,
				abilityDuration: 17.5,
			},
			heroBoost: {
				hitpointIncrease: 153,
				hitpointRecoveryIncrease: 275,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 6,
			abilityAttribute: {
				healingPerSecond: 80,
				abilityDuration: 19,
			},
			heroBoost: {
				hitpointIncrease: 168,
				hitpointRecoveryIncrease: 303,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 7,
			abilityAttribute: {
				healingPerSecond: 80,
				abilityDuration: 19,
			},
			heroBoost: {
				hitpointIncrease: 183,
				hitpointRecoveryIncrease: 330,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 8,
			abilityAttribute: {
				healingPerSecond: 80,
				abilityDuration: 19,
			},
			heroBoost: {
				hitpointIncrease: 198,
				hitpointRecoveryIncrease: 358,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 9,
			abilityAttribute: {
				healingPerSecond: 100,
				abilityDuration: 20.5,
			},
			heroBoost: {
				hitpointIncrease: 229,
				hitpointRecoveryIncrease: 413,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 10,
			abilityAttribute: {
				healingPerSecond: 100,
				abilityDuration: 20.5,
			},
			heroBoost: {
				hitpointIncrease: 280,
				hitpointRecoveryIncrease: 463,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 11,
			abilityAttribute: {
				healingPerSecond: 100,
				abilityDuration: 20.5,
			},
			heroBoost: {
				hitpointIncrease: 330,
				hitpointRecoveryIncrease: 513,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 12,
			abilityAttribute: {
				healingPerSecond: 120,
				abilityDuration: 22,
			},
			heroBoost: {
				hitpointIncrease: 381,
				hitpointRecoveryIncrease: 563,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 13,
			abilityAttribute: {
				healingPerSecond: 120,
				abilityDuration: 22,
			},
			heroBoost: {
				hitpointIncrease: 432,
				hitpointRecoveryIncrease: 613,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 14,
			abilityAttribute: {
				healingPerSecond: 120,
				abilityDuration: 22,
			},
			heroBoost: {
				hitpointIncrease: 482,
				hitpointRecoveryIncrease: 663,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 15,
			abilityAttribute: {
				healingPerSecond: 140,
				abilityDuration: 23.5,
			},
			heroBoost: {
				hitpointIncrease: 533,
				hitpointRecoveryIncrease: 713,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 16,
			abilityAttribute: {
				healingPerSecond: 140,
				abilityDuration: 23.5,
			},
			heroBoost: {
				hitpointIncrease: 584,
				hitpointRecoveryIncrease: 763,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 17,
			abilityAttribute: {
				healingPerSecond: 140,
				abilityDuration: 23.5,
			},
			heroBoost: {
				hitpointIncrease: 634,
				hitpointRecoveryIncrease: 813,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
		{
			level: 18,
			abilityAttribute: {
				healingPerSecond: 150,
				abilityDuration: 25,
			},
			heroBoost: {
				hitpointIncrease: 685,
				hitpointRecoveryIncrease: 863,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Healing_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154223',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
