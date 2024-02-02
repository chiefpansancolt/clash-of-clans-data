import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Multi Mortor',
	description:
		'Fires long range splash damage multiple times to maximize chances of hitting its target!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/06/Multi_Mortar_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221128085808',
	mode: {
		damageType: Constants.splash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 0,
		attackSpeed: 0,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 0 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 6, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 7, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 8, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 9, availableCount: 2, maxLevel: 0 },
				{ districtHallLevel: 10, availableCount: 2, maxLevel: 0 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 45,
			damagePerShot: 80,
			hitpoints: 1700,
			buildCost: 5000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Multi_Mortar1C.png/revision/latest/scale-to-width-down/100?cb=20221128085706',
		},
		{
			level: 2,
			damagePerSecond: 51,
			damagePerShot: 90,
			hitpoints: 1900,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Multi_Mortar2C.png/revision/latest/scale-to-width-down/100?cb=20221128085714',
		},
		{
			level: 3,
			damagePerSecond: 56,
			damagePerShot: 100,
			hitpoints: 2100,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Multi_Mortar3C.png/revision/latest/scale-to-width-down/100?cb=20221128085728',
		},
		{
			level: 4,
			damagePerSecond: 62,
			damagePerShot: 110,
			hitpoints: 2300,
			buildCost: 33000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Multi_Mortar4C.png/revision/latest/scale-to-width-down/100?cb=20221128085739',
		},
		{
			level: 5,
			damagePerSecond: 68,
			damagePerShot: 120,
			hitpoints: 2500,
			buildCost: 55000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Multi_Mortar5C.png/revision/latest/scale-to-width-down/100?cb=20221128085751',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building
