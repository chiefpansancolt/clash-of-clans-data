import * as Constants from '@/constants'
import ResourceBuilding from '@IHomeVillage/resources/darkElixirDrill/resource.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ResourceBuilding = {
	name: 'Dark Elixir Drill',
	description:
		'Our Builders have finally figured a way to extract pure Dark Elixir, the rarest form of the magical substance.',
	maxCount: 3,
	width: 3,
	height: 3,
	maxLevel: 9,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 8, availableCount: 2, maxLevel: 6 },
		{ townHallLevel: 9, availableCount: 3, maxLevel: 10 },
		{ townHallLevel: 10, availableCount: 3, maxLevel: 11 },
		{ townHallLevel: 11, availableCount: 3, maxLevel: 12 },
		{ townHallLevel: 12, availableCount: 3, maxLevel: 12 },
		{ townHallLevel: 13, availableCount: 3, maxLevel: 12 },
		{ townHallLevel: 14, availableCount: 3, maxLevel: 12 },
		{ townHallLevel: 15, availableCount: 3, maxLevel: 12 },
		{ townHallLevel: 16, availableCount: 3, maxLevel: 12 },
	],
	levels: [
		{
			level: 1,
			capacity: 160,
			productionRatePerHr: 20,
			hitpoints: 800,
			boostCost: 7,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 8,
			timeToFillDay: 0,
			buildCost: 500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d9/Dark_Elixir_Drill1.png/revision/latest/scale-to-width-down/100?cb=20180219150352',
		},
		{
			level: 2,
			capacity: 300,
			productionRatePerHr: 30,
			hitpoints: 860,
			boostCost: 10,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 10,
			timeToFillDay: 0,
			buildCost: 700000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7f/Dark_Elixir_Drill2.png/revision/latest/scale-to-width-down/100?cb=20180219150405',
		},
		{
			level: 3,
			capacity: 540,
			productionRatePerHr: 45,
			hitpoints: 920,
			boostCost: 15,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 12,
			timeToFillDay: 0,
			buildCost: 900000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f2/Dark_Elixir_Drill3.png/revision/latest/scale-to-width-down/100?cb=20180219150417',
		},
		{
			level: 4,
			capacity: 840,
			productionRatePerHr: 60,
			hitpoints: 980,
			boostCost: 20,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 14,
			timeToFillDay: 0,
			buildCost: 1200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Dark_Elixir_Drill4.png/revision/latest/scale-to-width-down/100?cb=20180219150430',
		},
		{
			level: 5,
			capacity: 1280,
			productionRatePerHr: 80,
			hitpoints: 1060,
			boostCost: 25,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 16,
			timeToFillDay: 0,
			buildCost: 1500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a0/Dark_Elixir_Drill5.png/revision/latest/scale-to-width-down/100?cb=20180219150445',
		},
		{
			level: 6,
			capacity: 1800,
			productionRatePerHr: 100,
			hitpoints: 1160,
			boostCost: 30,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 18,
			timeToFillDay: 0,
			buildCost: 1800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Dark_Elixir_Drill6.png/revision/latest/scale-to-width-down/100?cb=20180219150459',
		},
		{
			level: 7,
			capacity: 2400,
			productionRatePerHr: 120,
			hitpoints: 1280,
			boostCost: 35,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 20,
			timeToFillDay: 0,
			buildCost: 2400000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Dark_Elixir_Drill7.png/revision/latest/scale-to-width-down/100?cb=20181023120211',
		},
		{
			level: 8,
			capacity: 3000,
			productionRatePerHr: 140,
			hitpoints: 1380,
			boostCost: 40,
			timeToFillSec: 43,
			timeToFillMin: 25,
			timeToFillHour: 21,
			timeToFillDay: 0,
			buildCost: 3000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Dark_Elixir_Drill8.png/revision/latest/scale-to-width-down/100?cb=20210113213742',
		},
		{
			level: 9,
			capacity: 3600,
			productionRatePerHr: 160,
			hitpoints: 1480,
			boostCost: 45,
			timeToFillSec: 0,
			timeToFillMin: 30,
			timeToFillHour: 22,
			timeToFillDay: 0,
			buildCost: 4000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/58/Dark_Elixir_Drill9.png/revision/latest/scale-to-width-down/100?cb=20211209102821',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
