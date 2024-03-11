import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Eternal Tomb',
	description: 'Grand Warden and all nerby friendly units become immune to damage.',
	maxLevel: 18,
	hero: Constants.grandWarden,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.availableByDefault,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				abilityDuration: 3,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 2,
			abilityAttribute: {
				abilityDuration: 3.25,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 3,
			abilityAttribute: {
				abilityDuration: 4,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 4,
			abilityAttribute: {
				abilityDuration: 4.25,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 5,
			abilityAttribute: {
				abilityDuration: 4.5,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 6,
			abilityAttribute: {
				abilityDuration: 5.5,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 7,
			abilityAttribute: {
				abilityDuration: 5.75,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 8,
			abilityAttribute: {
				abilityDuration: 6,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 9,
			abilityAttribute: {
				abilityDuration: 7,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 10,
			abilityAttribute: {
				abilityDuration: 7.2,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 11,
			abilityAttribute: {
				abilityDuration: 7.4,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 12,
			abilityAttribute: {
				abilityDuration: 8,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 13,
			abilityAttribute: {
				abilityDuration: 8.2,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 14,
			abilityAttribute: {
				abilityDuration: 8.4,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 15,
			abilityAttribute: {
				abilityDuration: 9,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 16,
			abilityAttribute: {
				abilityDuration: 9.1,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 17,
			abilityAttribute: {
				abilityDuration: 9.2,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
		{
			level: 18,
			abilityAttribute: {
				abilityDuration: 9.5,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Eternal_Tome.png/revision/latest/scale-to-width-down/200?cb=20231211154154',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
