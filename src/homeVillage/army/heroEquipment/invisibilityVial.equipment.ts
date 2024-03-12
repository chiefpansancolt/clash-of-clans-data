import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Invisibility Vial',
	description: 'Turns the Queen invisible and gives her stronger attacks',
	maxLevel: 18,
	hero: Constants.archerQueen,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				abilityDuration: 4.2,
			},
			heroBoost: {
				damagePerSecondIncrease: 340,
				hitpointIncrease: 80,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 2,
			abilityAttribute: {
				abilityDuration: 4.2,
			},
			heroBoost: {
				damagePerSecondIncrease: 440,
				hitpointIncrease: 100,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 3,
			abilityAttribute: {
				abilityDuration: 4.8,
			},
			heroBoost: {
				damagePerSecondIncrease: 540,
				hitpointIncrease: 120,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 4,
			abilityAttribute: {
				abilityDuration: 4.8,
			},
			heroBoost: {
				damagePerSecondIncrease: 640,
				hitpointIncrease: 140,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 5,
			abilityAttribute: {
				abilityDuration: 4.8,
			},
			heroBoost: {
				damagePerSecondIncrease: 730,
				hitpointIncrease: 170,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 6,
			abilityAttribute: {
				abilityDuration: 5.4,
			},
			heroBoost: {
				damagePerSecondIncrease: 820,
				hitpointIncrease: 200,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 7,
			abilityAttribute: {
				abilityDuration: 5.4,
			},
			heroBoost: {
				damagePerSecondIncrease: 920,
				hitpointIncrease: 250,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 8,
			abilityAttribute: {
				abilityDuration: 5.4,
			},
			heroBoost: {
				damagePerSecondIncrease: 1020,
				hitpointIncrease: 300,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 9,
			abilityAttribute: {
				abilityDuration: 6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1120,
				hitpointIncrease: 340,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 10,
			abilityAttribute: {
				abilityDuration: 6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1220,
				hitpointIncrease: 380,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 11,
			abilityAttribute: {
				abilityDuration: 6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1310,
				hitpointIncrease: 420,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 12,
			abilityAttribute: {
				abilityDuration: 6.6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1370,
				hitpointIncrease: 460,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 13,
			abilityAttribute: {
				abilityDuration: 6.6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1430,
				hitpointIncrease: 500,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 14,
			abilityAttribute: {
				abilityDuration: 6.6,
			},
			heroBoost: {
				damagePerSecondIncrease: 1490,
				hitpointIncrease: 540,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 15,
			abilityAttribute: {
				abilityDuration: 7.2,
			},
			heroBoost: {
				damagePerSecondIncrease: 1560,
				hitpointIncrease: 580,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 16,
			abilityAttribute: {
				abilityDuration: 7.2,
			},
			heroBoost: {
				damagePerSecondIncrease: 1620,
				hitpointIncrease: 620,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 17,
			abilityAttribute: {
				abilityDuration: 7.2,
			},
			heroBoost: {
				damagePerSecondIncrease: 1680,
				hitpointIncrease: 660,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
		{
			level: 18,
			abilityAttribute: {
				abilityDuration: 7.8,
			},
			heroBoost: {
				damagePerSecondIncrease: 1740,
				hitpointIncrease: 700,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Invisibility_Vial.png/revision/latest/scale-to-width-down/200?cb=20240101094313',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
