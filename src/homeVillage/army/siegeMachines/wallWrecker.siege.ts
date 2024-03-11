import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Wall Wrecker',
	description:
		'The Wall Wrecker exists for two simple purposes: smash through anything that it comes across and deliver the Clan Castle troops straight to the heart of the village. Built from heavy-duty materials, it can take a pummeling before breaking down. Immune to spell effects.',
	maxLevel: 5,
	housingSpace: 1,
	buildingLevelRequired: 1,
	buildingName: Constants.workshop,
	baseImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f3/Avatar_Wall_Wrecker.png/revision/latest/scale-to-width-down/120?cb=20200913195940',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.walls10,
		attackSpeed: 1.3,
		movementSpeed: 12,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 250,
			damagePerAttack: 325,
			damageVsWalls: 3250,
			hitpoints: 5500,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Wall_Wrecker1.png/revision/latest/scale-to-width-down/100?cb=20230616051311',
		},
		{
			level: 2,
			damagePerSecond: 300,
			damagePerAttack: 390,
			damageVsWalls: 3900,
			hitpoints: 6000,
			researchCost: 3800000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Wall_Wrecker2.png/revision/latest/scale-to-width-down/100?cb=20230616051323',
		},
		{
			level: 3,
			damagePerSecond: 350,
			damagePerAttack: 455,
			damageVsWalls: 4550,
			hitpoints: 6500,
			researchCost: 5000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d9/Wall_Wrecker3.png/revision/latest/scale-to-width-down/100?cb=20230616051327',
		},
		{
			level: 4,
			damagePerSecond: 400,
			damagePerAttack: 520,
			damageVsWalls: 5200,
			hitpoints: 7000,
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/25/Wall_Wrecker4.png/revision/latest/scale-to-width-down/100?cb=20230616051331',
		},
		{
			level: 5,
			damagePerSecond: 450,
			damagePerAttack: 585,
			damageVsWalls: 5850,
			hitpoints: 7500,
			researchCost: 15000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/24/Wall_Wrecker5.png/revision/latest/scale-to-width-down/100?cb=20230616051337',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
