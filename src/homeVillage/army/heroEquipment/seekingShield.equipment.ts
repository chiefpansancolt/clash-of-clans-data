import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Seeking Shield',
	description: 'Throws her shield which bounces between defenses, dealing damage.',
	maxLevel: 18,
	hero: Constants.royalChampion,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	mode: {
		numberOfTargets: 4,
		unitTypeTarget: Constants.groundAndAir,
		attackingRange: 71,
	},
	levels: [
		{
			level: 1,
			abilityAttribute: {
				projectileDamage: 1000,
			},
			heroBoost: {
				hitpointIncrease: 40,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 2,
			abilityAttribute: {
				projectileDamage: 1000,
			},
			heroBoost: {
				hitpointIncrease: 60,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 3,
			abilityAttribute: {
				projectileDamage: 1250,
			},
			heroBoost: {
				hitpointIncrease: 80,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 4,
			abilityAttribute: {
				projectileDamage: 1250,
			},
			heroBoost: {
				hitpointIncrease: 100,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 5,
			abilityAttribute: {
				projectileDamage: 1250,
			},
			heroBoost: {
				hitpointIncrease: 120,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 6,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				hitpointIncrease: 140,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 7,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				hitpointIncrease: 160,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 8,
			abilityAttribute: {
				projectileDamage: 1500,
			},
			heroBoost: {
				hitpointIncrease: 180,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 9,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				hitpointIncrease: 200,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 10,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				hitpointIncrease: 220,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 11,
			abilityAttribute: {
				projectileDamage: 1750,
			},
			heroBoost: {
				hitpointIncrease: 240,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 12,
			abilityAttribute: {
				projectileDamage: 2000,
			},
			heroBoost: {
				hitpointIncrease: 260,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 13,
			abilityAttribute: {
				projectileDamage: 2000,
			},
			heroBoost: {
				hitpointIncrease: 280,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 14,
			abilityAttribute: {
				projectileDamage: 2000,
			},
			heroBoost: {
				hitpointIncrease: 300,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 15,
			abilityAttribute: {
				projectileDamage: 2250,
			},
			heroBoost: {
				hitpointIncrease: 320,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 16,
			abilityAttribute: {
				projectileDamage: 2250,
			},
			heroBoost: {
				hitpointIncrease: 340,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 17,
			abilityAttribute: {
				projectileDamage: 2250,
			},
			heroBoost: {
				hitpointIncrease: 360,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
		{
			level: 18,
			abilityAttribute: {
				projectileDamage: 2500,
			},
			heroBoost: {
				hitpointIncrease: 380,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Seeking_Shield.png/revision/latest/scale-to-width-down/200?cb=20231211154339',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
