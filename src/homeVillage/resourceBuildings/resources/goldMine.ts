import * as Constants from '@/constants'
import ResourceBuilding from '@IHomeVillage/resources/resource.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ResourceBuilding = {
	name: 'Gold Mine',
	description: 'The Gold Mine produces gold. Upgrade it to boost its production and gold storage capacity.',
	maxCount: 7,
	width: 3,
	height: 3,
	maxLevel: 15,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 2, availableCount: 2, maxLevel: 4 },
		{ townHallLevel: 3, availableCount: 3, maxLevel: 6 },
		{ townHallLevel: 4, availableCount: 4, maxLevel: 8 },
		{ townHallLevel: 5, availableCount: 5, maxLevel: 10 },
		{ townHallLevel: 6, availableCount: 6, maxLevel: 10 },
		{ townHallLevel: 7, availableCount: 6, maxLevel: 11 },
		{ townHallLevel: 8, availableCount: 6, maxLevel: 12 },
		{ townHallLevel: 9, availableCount: 7, maxLevel: 12 },
		{ townHallLevel: 10, availableCount: 7, maxLevel: 13 },
		{ townHallLevel: 11, availableCount: 7, maxLevel: 14 },
		{ townHallLevel: 12, availableCount: 7, maxLevel: 15 },
		{ townHallLevel: 13, availableCount: 7, maxLevel: 15 },
		{ townHallLevel: 14, availableCount: 7, maxLevel: 15 },
		{ townHallLevel: 15, availableCount: 7, maxLevel: 15 },
		{ townHallLevel: 16, availableCount: 7, maxLevel: 15 },
	],
	levels: [
		{
			level: 1,
			capacity: 1000,
			productionRatePerHr: 200,
			hitpoints: 400,
			boostCost: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 5,
			timeToFillDay: 0,
			buildCost: 150,
			buildCostResource: Constants.elixir,
			buildTimeSec: 10,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 3,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Gold_Mine1.png/revision/latest/scale-to-width-down/100?cb=20180110120430',
		},
		{
			level: 2,
			capacity: 2000,
			productionRatePerHr: 400,
			hitpoints: 440,
			boostCost: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 5,
			timeToFillDay: 0,
			buildCost: 300,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 1,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 7,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/55/Gold_Mine2.png/revision/latest/scale-to-width-down/100?cb=20180110120444',
		},
		{
			level: 3,
			capacity: 3000,
			productionRatePerHr: 600,
			hitpoints: 480,
			boostCost: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 5,
			timeToFillDay: 0,
			buildCost: 700,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 4,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 15,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Gold_Mine3.png/revision/latest/scale-to-width-down/100?cb=20180110120457',
		},
		{
			level: 4,
			capacity: 5000,
			productionRatePerHr: 800,
			hitpoints: 520,
			boostCost: 0,
			timeToFillSec: 0,
			timeToFillMin: 15,
			timeToFillHour: 6,
			timeToFillDay: 0,
			buildCost: 1400,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Gold_Mine4.png/revision/latest/scale-to-width-down/100?cb=20180110120510',
		},
		{
			level: 5,
			capacity: 10000,
			productionRatePerHr: 1000,
			hitpoints: 560,
			boostCost: 4,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 10,
			timeToFillDay: 0,
			buildCost: 3000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 40,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 48,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1a/Gold_Mine5.png/revision/latest/scale-to-width-down/100?cb=20180110120533',
		},
		{
			level: 6,
			capacity: 20000,
			productionRatePerHr: 1300,
			hitpoints: 600,
			boostCost: 5,
			timeToFillSec: 5,
			timeToFillMin: 23,
			timeToFillHour: 15,
			timeToFillDay: 0,
			buildCost: 7000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Gold_Mine6.png/revision/latest/scale-to-width-down/100?cb=20180110120552',
		},
		{
			level: 7,
			capacity: 30000,
			productionRatePerHr: 1600,
			hitpoints: 640,
			boostCost: 6,
			timeToFillSec: 0,
			timeToFillMin: 45,
			timeToFillHour: 18,
			timeToFillDay: 0,
			buildCost: 14000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/11/Gold_Mine7.png/revision/latest/scale-to-width-down/100?cb=20180110120611',
		},
		{
			level: 8,
			capacity: 50000,
			productionRatePerHr: 1900,
			hitpoints: 680,
			boostCost: 7,
			timeToFillSec: 57,
			timeToFillMin: 18,
			timeToFillHour: 2,
			timeToFillDay: 1,
			buildCost: 28000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/52/Gold_Mine8.png/revision/latest/scale-to-width-down/100?cb=20180110120627',
		},
		{
			level: 9,
			capacity: 75000,
			productionRatePerHr: 2200,
			hitpoints: 720,
			boostCost: 8,
			timeToFillSec: 27,
			timeToFillMin: 5,
			timeToFillHour: 10,
			timeToFillDay: 1,
			buildCost: 56000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 10,
			buildTimeDay: 0,
			exp: 189,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Gold_Mine9.png/revision/latest/scale-to-width-down/100?cb=20180110120642',
		},
		{
			level: 10,
			capacity: 100000,
			productionRatePerHr: 2800,
			hitpoints: 780,
			boostCost: 9,
			timeToFillSec: 52,
			timeToFillMin: 42,
			timeToFillHour: 11,
			timeToFillDay: 1,
			buildCost: 75000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 10,
			buildTimeDay: 0,
			exp: 189,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/eb/Gold_Mine10.png/revision/latest/scale-to-width-down/100?cb=20180110120703',
		},
		{
			level: 11,
			capacity: 150000,
			productionRatePerHr: 3500,
			hitpoints: 860,
			boostCost: 10,
			timeToFillSec: 26,
			timeToFillMin: 51,
			timeToFillHour: 18,
			timeToFillDay: 1,
			buildCost: 85000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0d/Gold_Mine11.png/revision/latest/scale-to-width-down/100?cb=20180110120719',
		},
		{
			level: 12,
			capacity: 200000,
			productionRatePerHr: 4200,
			hitpoints: 960,
			boostCost: 10,
			timeToFillSec: 9,
			timeToFillMin: 37,
			timeToFillHour: 23,
			timeToFillDay: 1,
			buildCost: 170000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 0,
			exp: 240,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4d/Gold_Mine12.png/revision/latest/scale-to-width-down/100?cb=20180110120732',
		},
		{
			level: 13,
			capacity: 250000,
			productionRatePerHr: 4900,
			hitpoints: 1080,
			boostCost: 11,
			timeToFillSec: 14,
			timeToFillMin: 1,
			timeToFillHour: 3,
			timeToFillDay: 2,
			buildCost: 400000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 20,
			buildTimeDay: 0,
			exp: 268,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Gold_Mine13.png/revision/latest/scale-to-width-down/100?cb=20181023115050',
		},
		{
			level: 14,
			capacity: 300000,
			productionRatePerHr: 5600,
			hitpoints: 1180,
			boostCost: 11,
			timeToFillSec: 18,
			timeToFillMin: 34,
			timeToFillHour: 5,
			timeToFillDay: 2,
			buildCost: 800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 1,
			exp: 379,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Gold_Mine14.png/revision/latest/scale-to-width-down/100?cb=20200829215835',
		},
		{
			level: 15,
			capacity: 350000,
			productionRatePerHr: 6300,
			hitpoints: 1280,
			boostCost: 11,
			timeToFillSec: 20,
			timeToFillMin: 33,
			timeToFillHour: 7,
			timeToFillDay: 2,
			buildCost: 1200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 2,
			exp: 487,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8c/Gold_Mine15.png/revision/latest/scale-to-width-down/100?cb=20211209202156',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
