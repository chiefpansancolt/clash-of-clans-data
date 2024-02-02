import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Air Defense',
	description:
		"This anti-air tower is deadly against flying enemies, but can't target foes on the ground. Place it wisely to cover as much airspace as possible.",
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Air_Defense_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221225050413',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 1.5,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 6, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 7, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 8, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 4, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 7, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 8, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 8, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 5, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 6, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 7, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 8, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 9, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 5, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 260,
			damagePerShot: 590,
			hitpoints: 1400,
			buildCost: 3500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 1,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Air_Defense1C.png/revision/latest/scale-to-width-down/100?cb=20221225050420',
		},
		{
			level: 2,
			damagePerSecond: 290,
			damagePerShot: 435,
			hitpoints: 1500,
			buildCost: 7000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Air_Defense2C.png/revision/latest/scale-to-width-down/100?cb=20221225050427',
		},
		{
			level: 3,
			damagePerSecond: 320,
			damagePerShot: 480,
			hitpoints: 1600,
			buildCost: 14000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Air_Defense3C.png/revision/latest/scale-to-width-down/100?cb=20221225050435',
		},
		{
			level: 4,
			damagePerSecond: 350,
			damagePerShot: 525,
			hitpoints: 1700,
			buildCost: 24000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/17/Air_Defense4C.png/revision/latest/scale-to-width-down/100?cb=20221225050442',
		},
		{
			level: 5,
			damagePerSecond: 380,
			damagePerShot: 570,
			hitpoints: 1800,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Air_Defense5C.png/revision/latest/scale-to-width-down/100?cb=20221225050449',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building
