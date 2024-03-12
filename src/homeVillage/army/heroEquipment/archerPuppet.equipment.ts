import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Archer Puppet',
	description: 'Summons a gang of Archers.',
	maxLevel: 18,
	hero: Constants.archerQueen,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				summonedTroopCount: 5,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 26,
				hitpointRecoveryIncrease: 160,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 2,
			abilityAttribute: {
				summonedTroopCount: 5,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 34,
				hitpointRecoveryIncrease: 175,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 3,
			abilityAttribute: {
				summonedTroopCount: 10,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 42,
				hitpointRecoveryIncrease: 190,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 4,
			abilityAttribute: {
				summonedTroopCount: 10,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 49,
				hitpointRecoveryIncrease: 205,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 5,
			abilityAttribute: {
				summonedTroopCount: 10,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 55,
				hitpointRecoveryIncrease: 220,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 6,
			abilityAttribute: {
				summonedTroopCount: 15,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 62,
				hitpointRecoveryIncrease: 235,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 7,
			abilityAttribute: {
				summonedTroopCount: 15,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 71,
				hitpointRecoveryIncrease: 250,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 8,
			abilityAttribute: {
				summonedTroopCount: 15,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 80,
				hitpointRecoveryIncrease: 265,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 9,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 90,
				hitpointRecoveryIncrease: 280,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 10,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 100,
				hitpointRecoveryIncrease: 295,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 11,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 109,
				hitpointRecoveryIncrease: 310,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 12,
			abilityAttribute: {
				summonedTroopCount: 25,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 115,
				hitpointRecoveryIncrease: 325,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 13,
			abilityAttribute: {
				summonedTroopCount: 25,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 122,
				hitpointRecoveryIncrease: 340,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 14,
			abilityAttribute: {
				summonedTroopCount: 25,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 127,
				hitpointRecoveryIncrease: 360,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 15,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 132,
				hitpointRecoveryIncrease: 380,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 16,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 136,
				hitpointRecoveryIncrease: 400,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 17,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 140,
				hitpointRecoveryIncrease: 420,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
		{
			level: 18,
			abilityAttribute: {
				summonedTroopCount: 35,
				summonedTroop: Constants.archers,
			},
			heroBoost: {
				damagePerSecondIncrease: 144,
				hitpointRecoveryIncrease: 440,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Archer_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153910',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
