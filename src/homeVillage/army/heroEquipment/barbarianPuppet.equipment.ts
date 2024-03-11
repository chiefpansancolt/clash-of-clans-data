import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Barbarian Pupper',
	description: 'Summons a pack of raged Barbarians',
	maxLevel: 18,
	hero: Constants.barbarianKing,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroop: Constants.barbarians,
				damageIncrease: 100,
				movementSpeedIncrease: 60,
			},
			heroBoost: {
				hitpointIncrease: 281,
				hitpointRecoveryIncrease: 100,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 2,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroop: Constants.barbarians,
				damageIncrease: 100,
				movementSpeedIncrease: 60,
			},
			heroBoost: {
				hitpointIncrease: 350,
				hitpointRecoveryIncrease: 150,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 3,
			abilityAttribute: {
				summonedTroopCount: 16,
				summonedTroop: Constants.barbarians,
				damageIncrease: 120,
				movementSpeedIncrease: 80,
			},
			heroBoost: {
				hitpointIncrease: 425,
				hitpointRecoveryIncrease: 200,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 4,
			abilityAttribute: {
				summonedTroopCount: 16,
				summonedTroop: Constants.barbarians,
				damageIncrease: 120,
				movementSpeedIncrease: 80,
			},
			heroBoost: {
				hitpointIncrease: 513,
				hitpointRecoveryIncrease: 250,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 5,
			abilityAttribute: {
				summonedTroopCount: 16,
				summonedTroop: Constants.barbarians,
				damageIncrease: 120,
				movementSpeedIncrease: 80,
			},
			heroBoost: {
				hitpointIncrease: 590,
				hitpointRecoveryIncrease: 300,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 6,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.barbarians,
				damageIncrease: 140,
				movementSpeedIncrease: 100,
			},
			heroBoost: {
				hitpointIncrease: 668,
				hitpointRecoveryIncrease: 350,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 7,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.barbarians,
				damageIncrease: 140,
				movementSpeedIncrease: 100,
			},
			heroBoost: {
				hitpointIncrease: 760,
				hitpointRecoveryIncrease: 400,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 8,
			abilityAttribute: {
				summonedTroopCount: 20,
				summonedTroop: Constants.barbarians,
				damageIncrease: 140,
				movementSpeedIncrease: 100,
			},
			heroBoost: {
				hitpointIncrease: 855,
				hitpointRecoveryIncrease: 450,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 9,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.barbarians,
				damageIncrease: 160,
				movementSpeedIncrease: 120,
			},
			heroBoost: {
				hitpointIncrease: 950,
				hitpointRecoveryIncrease: 520,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 10,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.barbarians,
				damageIncrease: 160,
				movementSpeedIncrease: 120,
			},
			heroBoost: {
				hitpointIncrease: 1050,
				hitpointRecoveryIncrease: 600,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 11,
			abilityAttribute: {
				summonedTroopCount: 30,
				summonedTroop: Constants.barbarians,
				damageIncrease: 160,
				movementSpeedIncrease: 120,
			},
			heroBoost: {
				hitpointIncrease: 1150,
				hitpointRecoveryIncrease: 680,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 12,
			abilityAttribute: {
				summonedTroopCount: 36,
				summonedTroop: Constants.barbarians,
				damageIncrease: 180,
				movementSpeedIncrease: 140,
			},
			heroBoost: {
				hitpointIncrease: 1314,
				hitpointRecoveryIncrease: 770,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 13,
			abilityAttribute: {
				summonedTroopCount: 36,
				summonedTroop: Constants.barbarians,
				damageIncrease: 180,
				movementSpeedIncrease: 140,
			},
			heroBoost: {
				hitpointIncrease: 1520,
				hitpointRecoveryIncrease: 860,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 14,
			abilityAttribute: {
				summonedTroopCount: 36,
				summonedTroop: Constants.barbarians,
				damageIncrease: 180,
				movementSpeedIncrease: 140,
			},
			heroBoost: {
				hitpointIncrease: 1726,
				hitpointRecoveryIncrease: 940,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 15,
			abilityAttribute: {
				summonedTroopCount: 40,
				summonedTroop: Constants.barbarians,
				damageIncrease: 200,
				movementSpeedIncrease: 160,
			},
			heroBoost: {
				hitpointIncrease: 1932,
				hitpointRecoveryIncrease: 1060,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 16,
			abilityAttribute: {
				summonedTroopCount: 40,
				summonedTroop: Constants.barbarians,
				damageIncrease: 200,
				movementSpeedIncrease: 160,
			},
			heroBoost: {
				hitpointIncrease: 2138,
				hitpointRecoveryIncrease: 1130,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 17,
			abilityAttribute: {
				summonedTroopCount: 40,
				summonedTroop: Constants.barbarians,
				damageIncrease: 200,
				movementSpeedIncrease: 160,
			},
			heroBoost: {
				hitpointIncrease: 2344,
				hitpointRecoveryIncrease: 1200,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
		{
			level: 18,
			abilityAttribute: {
				summonedTroopCount: 44,
				summonedTroop: Constants.barbarians,
				damageIncrease: 220,
				movementSpeedIncrease: 180,
			},
			heroBoost: {
				hitpointIncrease: 2550,
				hitpointRecoveryIncrease: 1260,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Barbarian_Puppet.png/revision/latest/scale-to-width-down/200?cb=20231211153430',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
