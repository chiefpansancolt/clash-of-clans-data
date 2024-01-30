import * as Constants from '@/constants'
import Resource from '@ICommon/resources/resource.interface'
import Level from '@ICommon/resources/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const goldStorage: Resource = {
	name: 'Gold Storage',
	description:
		"All your precious gold is stored here. Don't let sneaky goblins anywhere near! Upgrade the storage to increase its capacity and durability against attack.",
	maxCount: 4,
	width: 3,
	height: 3,
	maxLevel: 17,
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 1 },
		{ townHall: 2, availableCount: 1, maxLevel: 3 },
		{ townHall: 3, availableCount: 2, maxLevel: 6 },
		{ townHall: 4, availableCount: 2, maxLevel: 8 },
		{ townHall: 5, availableCount: 2, maxLevel: 9 },
		{ townHall: 6, availableCount: 2, maxLevel: 10 },
		{ townHall: 7, availableCount: 2, maxLevel: 11 },
		{ townHall: 8, availableCount: 3, maxLevel: 11 },
		{ townHall: 9, availableCount: 4, maxLevel: 11 },
		{ townHall: 10, availableCount: 4, maxLevel: 11 },
		{ townHall: 11, availableCount: 4, maxLevel: 12 },
		{ townHall: 12, availableCount: 4, maxLevel: 13 },
		{ townHall: 13, availableCount: 4, maxLevel: 14 },
		{ townHall: 14, availableCount: 4, maxLevel: 15 },
		{ townHall: 15, availableCount: 4, maxLevel: 16 },
		{ townHall: 16, availableCount: 4, maxLevel: 17 },
	],
	achievement: {
		name: 'Bigger Coffers',
		village: Constants.builderBase,
		levels: [
			{
				info: 'Upgrade your Gold Storage to level 2',
				exp: 10,
				gems: 2,
				stars: 1,
				target: 2,
			},
			{
				info: 'Upgrade your Gold Storage to level 5',
				exp: 100,
				gems: 5,
				stars: 2,
				target: 5,
			},
			{
				info: 'Upgrade your Gold Storage to level 10',
				exp: 1000,
				gems: 10,
				stars: 3,
				target: 10,
			},
		],
	},
	levels: [
		{
			level: 1,
			capacity: 1500,
			hitpoints: 400,
			buildCost: 300,
			buildCostResource: Constants.elixir,
			buildTimeSec: 10,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 3,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Gold_Storage1.png/revision/latest/scale-to-width-down/100?cb=20171106180731',
		},
		{
			level: 2,
			capacity: 3000,
			hitpoints: 600,
			buildCost: 750,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Gold_Storage2.png/revision/latest/scale-to-width-down/100?cb=20171106180732',
		},
		{
			level: 3,
			capacity: 6000,
			hitpoints: 800,
			buildCost: 1500,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 20,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 34,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Gold_Storage3.png/revision/latest/scale-to-width-down/100?cb=20171106180732',
		},
		{
			level: 4,
			capacity: 12000,
			hitpoints: 1000,
			buildCost: 3000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Gold_Storage4.png/revision/latest/scale-to-width-down/100?cb=20171106180732',
		},
		{
			level: 5,
			capacity: 25000,
			hitpoints: 1200,
			buildCost: 6000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Gold_Storage5.png/revision/latest/scale-to-width-down/100?cb=20171106180733',
		},
		{
			level: 6,
			capacity: 45000,
			hitpoints: 1400,
			buildCost: 12000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Gold_Storage6.png/revision/latest/scale-to-width-down/100?cb=20171106180733',
		},
		{
			level: 7,
			capacity: 100000,
			hitpoints: 1600,
			buildCost: 25000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Gold_Storage7.png/revision/latest/scale-to-width-down/100?cb=20171106180734',
		},
		{
			level: 8,
			capacity: 225000,
			hitpoints: 1700,
			buildCost: 50000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/05/Gold_Storage8.png/revision/latest/scale-to-width-down/100?cb=20171106180734',
		},
		{
			level: 9,
			capacity: 450000,
			hitpoints: 1800,
			buildCost: 100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Gold_Storage9.png/revision/latest/scale-to-width-down/100?cb=20171106180734',
		},
		{
			level: 10,
			capacity: 850000,
			hitpoints: 1900,
			buildCost: 250000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c2/Gold_Storage10.png/revision/latest/scale-to-width-down/100?cb=20171106180735',
		},
		{
			level: 11,
			capacity: 1750000,
			hitpoints: 2100,
			buildCost: 500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 0,
			exp: 240,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5f/Gold_Storage11.png/revision/latest/scale-to-width-down/100?cb=20171106180751',
		},
		{
			level: 12,
			capacity: 2000000,
			hitpoints: 2500,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Gold_Storage12.png/revision/latest/scale-to-width-down/100?cb=20171106180751',
		},
		{
			level: 13,
			capacity: 3000000,
			hitpoints: 2900,
			buildCost: 1800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Gold_Storage13.png/revision/latest/scale-to-width-down/100?cb=20180604172806',
		},
		{
			level: 14,
			capacity: 4000000,
			hitpoints: 3300,
			buildCost: 2800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 5,
			exp: 689,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/67/Gold_Storage14.png/revision/latest/scale-to-width-down/100?cb=20191211212341',
		},
		{
			level: 15,
			capacity: 4500000,
			hitpoints: 3700,
			buildCost: 3900000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 11,
			exp: 985,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Gold_Storage15.png/revision/latest/scale-to-width-down/100?cb=20210413013738',
		},
		{
			level: 16,
			capacity: 5000000,
			hitpoints: 3900,
			buildCost: 6500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2f/Gold_Storage16.png/revision/latest/scale-to-width-down/100?cb=20221011063952',
		},
		{
			level: 17,
			capacity: 5250000,
			hitpoints: 4050,
			buildCost: 7500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Gold_Storage17.png/revision/latest/scale-to-width-down/100?cb=20231213084853',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default goldStorage
