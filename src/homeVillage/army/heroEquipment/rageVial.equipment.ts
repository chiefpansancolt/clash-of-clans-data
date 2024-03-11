import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Rage Vial',
	description: 'Casts Rage on the Barbarian King',
	maxLevel: 18,
	hero: Constants.barbarianKing,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	mode: {
		abilityDuration: 10,
	},
	levels: [
		{
			level: 1,
			abilityAttribute: {
				damageIncrease: 120,
				movementSpeedIncrease: 18,
			},
			heroBoost: {
				damagePerSecondIncrease: 17,
				hitpointRecoveryIncrease: 150,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 2,
			abilityAttribute: {
				damageIncrease: 120,
				movementSpeedIncrease: 18,
			},
			heroBoost: {
				damagePerSecondIncrease: 22,
				hitpointRecoveryIncrease: 225,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 3,
			abilityAttribute: {
				damageIncrease: 130,
				movementSpeedIncrease: 22.3,
			},
			heroBoost: {
				damagePerSecondIncrease: 27,
				hitpointRecoveryIncrease: 300,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 4,
			abilityAttribute: {
				damageIncrease: 130,
				movementSpeedIncrease: 22.3,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				hitpointRecoveryIncrease: 375,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 5,
			abilityAttribute: {
				damageIncrease: 130,
				movementSpeedIncrease: 22.3,
			},
			heroBoost: {
				damagePerSecondIncrease: 37,
				hitpointRecoveryIncrease: 450,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 6,
			abilityAttribute: {
				damageIncrease: 135,
				movementSpeedIncrease: 25.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 42,
				hitpointRecoveryIncrease: 525,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 7,
			abilityAttribute: {
				damageIncrease: 135,
				movementSpeedIncrease: 25.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 48,
				hitpointRecoveryIncrease: 600,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 8,
			abilityAttribute: {
				damageIncrease: 135,
				movementSpeedIncrease: 25.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 54,
				hitpointRecoveryIncrease: 675,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 9,
			abilityAttribute: {
				damageIncrease: 140,
				movementSpeedIncrease: 28.7,
			},
			heroBoost: {
				damagePerSecondIncrease: 60,
				hitpointRecoveryIncrease: 780,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 10,
			abilityAttribute: {
				damageIncrease: 140,
				movementSpeedIncrease: 28.7,
			},
			heroBoost: {
				damagePerSecondIncrease: 66,
				hitpointRecoveryIncrease: 900,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 11,
			abilityAttribute: {
				damageIncrease: 140,
				movementSpeedIncrease: 28.7,
			},
			heroBoost: {
				damagePerSecondIncrease: 72,
				hitpointRecoveryIncrease: 1020,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 12,
			abilityAttribute: {
				damageIncrease: 145,
				movementSpeedIncrease: 32,
			},
			heroBoost: {
				damagePerSecondIncrease: 79,
				hitpointRecoveryIncrease: 1155,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 13,
			abilityAttribute: {
				damageIncrease: 145,
				movementSpeedIncrease: 32,
			},
			heroBoost: {
				damagePerSecondIncrease: 86,
				hitpointRecoveryIncrease: 1290,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 14,
			abilityAttribute: {
				damageIncrease: 145,
				movementSpeedIncrease: 32,
			},
			heroBoost: {
				damagePerSecondIncrease: 94,
				hitpointRecoveryIncrease: 1410,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 15,
			abilityAttribute: {
				damageIncrease: 150,
				movementSpeedIncrease: 35.1,
			},
			heroBoost: {
				damagePerSecondIncrease: 104,
				hitpointRecoveryIncrease: 1590,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 16,
			abilityAttribute: {
				damageIncrease: 150,
				movementSpeedIncrease: 35.1,
			},
			heroBoost: {
				damagePerSecondIncrease: 112,
				hitpointRecoveryIncrease: 1695,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 17,
			abilityAttribute: {
				damageIncrease: 150,
				movementSpeedIncrease: 35.1,
			},
			heroBoost: {
				damagePerSecondIncrease: 120,
				hitpointRecoveryIncrease: 1800,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
		{
			level: 18,
			abilityAttribute: {
				damageIncrease: 155,
				movementSpeedIncrease: 38.3,
			},
			heroBoost: {
				damagePerSecondIncrease: 128,
				hitpointRecoveryIncrease: 1890,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Rage_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094305',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
