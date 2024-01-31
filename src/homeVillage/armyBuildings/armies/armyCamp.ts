import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/armyCamp/army.interface'
import Level from '@IHomeVillage/army/armyCamp/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const armyCamp: Building = {
	name: 'Army Camp',
	description:
		'Your troops are stationed in Army Camps. Build more camps and upgrade them to muster a powerful army.',
	maxCount: 4,
	width: 4,
	height: 4,
	maxLevel: 12,
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 1 },
		{ townHall: 2, availableCount: 1, maxLevel: 2 },
		{ townHall: 3, availableCount: 2, maxLevel: 3 },
		{ townHall: 4, availableCount: 2, maxLevel: 4 },
		{ townHall: 5, availableCount: 3, maxLevel: 5 },
		{ townHall: 6, availableCount: 3, maxLevel: 6 },
		{ townHall: 7, availableCount: 4, maxLevel: 6 },
		{ townHall: 8, availableCount: 4, maxLevel: 6 },
		{ townHall: 9, availableCount: 4, maxLevel: 7 },
		{ townHall: 10, availableCount: 4, maxLevel: 8 },
		{ townHall: 11, availableCount: 4, maxLevel: 9 },
		{ townHall: 12, availableCount: 4, maxLevel: 10 },
		{ townHall: 13, availableCount: 4, maxLevel: 11 },
		{ townHall: 14, availableCount: 4, maxLevel: 11 },
		{ townHall: 15, availableCount: 4, maxLevel: 12 },
		{ townHall: 16, availableCount: 4, maxLevel: 12 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			troopCapacity: 20,
			hitpoints: 250,
			buildCost: 200,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Army_Camp1.png/revision/latest/scale-to-width-down/100?cb=20171221130243',
		},
		{
			level: 2,
			troopCapacity: 30,
			hitpoints: 270,
			buildCost: 2000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 15,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 30,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/92/Army_Camp2.png/revision/latest/scale-to-width-down/100?cb=20171221130257',
		},
		{
			level: 3,
			troopCapacity: 35,
			hitpoints: 290,
			buildCost: 10000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/Army_Camp3.png/revision/latest/scale-to-width-down/100?cb=20171221130313',
		},
		{
			level: 4,
			troopCapacity: 40,
			hitpoints: 310,
			buildCost: 100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Army_Camp4.png/revision/latest/scale-to-width-down/100?cb=20171221130327',
		},
		{
			level: 5,
			troopCapacity: 45,
			hitpoints: 330,
			buildCost: 250000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Army_Camp5.png/revision/latest/scale-to-width-down/100?cb=20171221130341',
		},
		{
			level: 6,
			troopCapacity: 50,
			hitpoints: 350,
			buildCost: 750000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/68/Army_Camp6.png/revision/latest/scale-to-width-down/100?cb=20171221130400',
		},
		{
			level: 7,
			troopCapacity: 55,
			hitpoints: 400,
			buildCost: 1500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Army_Camp7.png/revision/latest/scale-to-width-down/100?cb=20171221130415',
		},
		{
			level: 8,
			troopCapacity: 60,
			hitpoints: 500,
			buildCost: 2500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Army_Camp8.png/revision/latest/scale-to-width-down/100?cb=20171221130431',
		},
		{
			level: 9,
			troopCapacity: 65,
			hitpoints: 600,
			buildCost: 4200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 6,
			exp: 734,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Army_Camp9.png/revision/latest/scale-to-width-down/100?cb=20171221130455',
		},
		{
			level: 10,
			troopCapacity: 70,
			hitpoints: 700,
			buildCost: 5700000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 8,
			exp: 869,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Army_Camp10.png/revision/latest/scale-to-width-down/100?cb=20180604160829',
		},
		{
			level: 11,
			troopCapacity: 75,
			hitpoints: 800,
			buildCost: 9600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 9,
			exp: 905,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Army_Camp11.png/revision/latest/scale-to-width-down/100?cb=20201012183216',
		},
		{
			level: 12,
			troopCapacity: 80,
			hitpoints: 850,
			buildCost: 19000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/Army_Camp12.png/revision/latest/scale-to-width-down/100?cb=20221011075437',
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

export default armyCamp