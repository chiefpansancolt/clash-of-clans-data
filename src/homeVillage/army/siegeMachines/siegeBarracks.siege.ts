import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Siege Barracks',
	description:
		'The Siege Barracks parachutes down gracefully to first release a menagerie of P.E.K.K.As and Wizards and then the Clan Castle troops. How they all managed to squeeze inside is a mystery not really worth investigating.',
	maxLevel: 5,
	housingSpace: 1,
	buildingLevelRequired: 4,
	buildingName: Constants.workshop,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Avatar_Siege_Barracks.png/revision/latest/scale-to-width-down/120?cb=20200913200141',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 1,
		movementSpeed: 0,
		lifetime: 30,
	},
	levels: [
		{
			level: 1,
			hitpoints: 3300,
			troopsSpawned: {
				pekkaCount: 1,
				wizardCount: 6,
			},
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Siege_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20221124210925',
		},
		{
			level: 2,
			hitpoints: 3700,
			troopsSpawned: {
				pekkaCount: 1,
				wizardCount: 8,
			},
			researchCost: 5000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1f/Siege_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20221124210935',
		},
		{
			level: 3,
			hitpoints: 4100,
			troopsSpawned: {
				pekkaCount: 1,
				wizardCount: 10,
			},
			researchCost: 7000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 7,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3c/Siege_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20221124211013',
		},
		{
			level: 4,
			hitpoints: 4500,
			troopsSpawned: {
				pekkaCount: 1,
				wizardCount: 11,
			},
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Siege_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20221124211021',
		},
		{
			level: 5,
			hitpoints: 4800,
			troopsSpawned: {
				pekkaCount: 2,
				wizardCount: 11,
			},
			researchCost: 18000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/da/Siege_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20240225085808',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
