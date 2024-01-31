import * as Constants from '@/constants'
import Resource from '@ICommon/resources/resource.interface'
import Level from '@ICommon/resources/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const darkElixirStorage: Resource = {
	name: 'Dark Elixir Storage',
	description:
		"The power of Dark Elixir could not be contained in a regularly shaped Elixir vat. As it's three times as powerful, we had to invent a cubical form of storage!",
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 11,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 1, maxLevel: 2 },
		{ townHall: 8, availableCount: 1, maxLevel: 4 },
		{ townHall: 9, availableCount: 1, maxLevel: 6 },
		{ townHall: 10, availableCount: 1, maxLevel: 6 },
		{ townHall: 11, availableCount: 1, maxLevel: 6 },
		{ townHall: 12, availableCount: 1, maxLevel: 7 },
		{ townHall: 13, availableCount: 1, maxLevel: 8 },
		{ townHall: 14, availableCount: 1, maxLevel: 9 },
		{ townHall: 15, availableCount: 1, maxLevel: 10 },
		{ townHall: 16, availableCount: 1, maxLevel: 11 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			capacity: 10000,
			hitpoints: 2000,
			buildCost: 250000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1a/Dark_Elixir_Storage1.png/revision/latest/scale-to-width-down/100?cb=20180112123343',
		},
		{
			level: 2,
			capacity: 17500,
			hitpoints: 2200,
			buildCost: 500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 0,
			exp: 240,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Dark_Elixir_Storage2.png/revision/latest/scale-to-width-down/100?cb=20180112123328',
		},
		{
			level: 3,
			capacity: 40000,
			hitpoints: 2400,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c1/Dark_Elixir_Storage3.png/revision/latest/scale-to-width-down/100?cb=20180112123314',
		},
		{
			level: 4,
			capacity: 75000,
			hitpoints: 2600,
			buildCost: 1500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Dark_Elixir_Storage4.png/revision/latest/scale-to-width-down/100?cb=20180112123301',
		},
		{
			level: 5,
			capacity: 140000,
			hitpoints: 2900,
			buildCost: 2000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/07/Dark_Elixir_Storage5.png/revision/latest/scale-to-width-down/100?cb=20180112123244',
		},
		{
			level: 6,
			capacity: 180000,
			hitpoints: 3200,
			buildCost: 3000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Dark_Elixir_Storage6.png/revision/latest/scale-to-width-down/100?cb=20180112123228',
		},
		{
			level: 7,
			capacity: 220000,
			hitpoints: 3500,
			buildCost: 3800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/Dark_Elixir_Storage7.png/revision/latest/scale-to-width-down/100?cb=20180604173248',
		},
		{
			level: 8,
			capacity: 280000,
			hitpoints: 3800,
			buildCost: 5400000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Dark_Elixir_Storage8.png/revision/latest/scale-to-width-down/115?cb=20191211221907',
		},
		{
			level: 9,
			capacity: 330000,
			hitpoints: 4100,
			buildCost: 8100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Dark_Elixir_Storage9.png/revision/latest/scale-to-width-down/115?cb=20210413012243',
		},
		{
			level: 10,
			capacity: 350000,
			hitpoints: 4300,
			buildCost: 12500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Dark_Elixir_Storage10.png/revision/latest/scale-to-width-down/115?cb=20221011063950',
		},
		{
			level: 11,
			capacity: 360000,
			hitpoints: 4500,
			buildCost: 13500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 15,
			exp: 1138,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Dark_Elixir_Storage11.png/revision/latest/scale-to-width-down/125?cb=20231213085310',
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

export default darkElixirStorage
