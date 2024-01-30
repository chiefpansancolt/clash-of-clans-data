import * as Constants from '@/constants'
import Resource from '@ICommon/resources/resource.interface'
import Level from '@ICommon/resources/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const goldStorage: Resource = {
	name: 'Gold Storage',
	description:
		"All your precious gold is stored here. Don't let sneaky goblins anywhere near! Upgrade the storage to increase its capacity and durability against attack.",
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 10,
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 0 },
		{ townHall: 2, availableCount: 1, maxLevel: 0 },
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 2, maxLevel: 7 },
		{ townHall: 8, availableCount: 2, maxLevel: 8 },
		{ townHall: 9, availableCount: 2, maxLevel: 9 },
		{ townHall: 10, availableCount: 2, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			capacity: 70000,
			hitpoints: 650,
			buildCost: 20000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/16/Gold_Storage1B.png/revision/latest/scale-to-width-down/100?cb=20171031120205',
		},
		{
			level: 2,
			capacity: 150000,
			hitpoints: 800,
			buildCost: 80000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/de/Gold_Storage2B.png/revision/latest/scale-to-width-down/100?cb=20171031120206',
		},
		{
			level: 3,
			capacity: 250000,
			hitpoints: 975,
			buildCost: 200000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Gold_Storage3B.png/revision/latest/scale-to-width-down/100?cb=20171031120207',
		},
		{
			level: 4,
			capacity: 350000,
			hitpoints: 1150,
			buildCost: 300000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Gold_Storage4B.png/revision/latest/scale-to-width-down/100?cb=20171031120207',
		},
		{
			level: 5,
			capacity: 600000,
			hitpoints: 1350,
			buildCost: 600000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Gold_Storage5B.png/revision/latest/scale-to-width-down/100?cb=20171031120207',
		},
		{
			level: 6,
			capacity: 800000,
			hitpoints: 1600,
			buildCost: 1000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/84/Gold_Storage6B.png/revision/latest/scale-to-width-down/100?cb=20171031120208',
		},
		{
			level: 7,
			capacity: 1200000,
			hitpoints: 1850,
			buildCost: 1500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Gold_Storage7B.png/revision/latest/scale-to-width-down/100?cb=20171031120208',
		},
		{
			level: 8,
			capacity: 1600000,
			hitpoints: 2150,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Gold_Storage8B.png/revision/latest/scale-to-width-down/100?cb=20180307123736',
		},
		{
			level: 9,
			capacity: 2000000,
			hitpoints: 2450,
			buildCost: 2500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Gold_Storage9B.png/revision/latest/scale-to-width-down/100?cb=20190616213038',
		},
		{
			level: 10,
			capacity: 2500000,
			hitpoints: 2750,
			buildCost: 3200000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Gold_Storage10B.png/revision/latest/scale-to-width-down/100?cb=20230518052405',
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
