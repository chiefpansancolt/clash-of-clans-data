import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/army.interface'
import Level from '@IHomeVillage/army/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const laboratory: Building = {
	name: 'Laboratory',
	description:
		'What dark secrets do these Wizards hide inside their Laboratory? Nobody has dared to look. All we know is that their research makes our spells and troops harder, better, faster and stronger!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 14,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 1, maxLevel: 1 },
		{ townHall: 4, availableCount: 1, maxLevel: 2 },
		{ townHall: 5, availableCount: 1, maxLevel: 3 },
		{ townHall: 6, availableCount: 1, maxLevel: 4 },
		{ townHall: 7, availableCount: 1, maxLevel: 5 },
		{ townHall: 8, availableCount: 1, maxLevel: 6 },
		{ townHall: 9, availableCount: 1, maxLevel: 7 },
		{ townHall: 10, availableCount: 1, maxLevel: 8 },
		{ townHall: 11, availableCount: 1, maxLevel: 9 },
		{ townHall: 12, availableCount: 1, maxLevel: 10 },
		{ townHall: 13, availableCount: 1, maxLevel: 11 },
		{ townHall: 14, availableCount: 1, maxLevel: 12 },
		{ townHall: 15, availableCount: 1, maxLevel: 13 },
		{ townHall: 16, availableCount: 1, maxLevel: 14 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 500,
			buildCost: 5000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 1,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 7,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Laboratory1.png/revision/latest/scale-to-width-down/100?cb=20221125084348',
		},
		{
			level: 2,
			hitpoints: 550,
			buildCost: 25000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Laboratory2.png/revision/latest/scale-to-width-down/100?cb=20221125084354',
		},
		{
			level: 3,
			hitpoints: 600,
			buildCost: 50000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Laboratory3.png/revision/latest/scale-to-width-down/100?cb=20221125084401',
		},
		{
			level: 4,
			hitpoints: 650,
			buildCost: 100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Laboratory4.png/revision/latest/scale-to-width-down/100?cb=20221125084408',
		},
		{
			level: 5,
			hitpoints: 700,
			buildCost: 200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d6/Laboratory5.png/revision/latest/scale-to-width-down/100?cb=20221125084422',
		},
		{
			level: 6,
			hitpoints: 750,
			buildCost: 400000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 0,
			exp: 240,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Laboratory6.png/revision/latest/scale-to-width-down/100?cb=20221125084430',
		},
		{
			level: 7,
			hitpoints: 830,
			buildCost: 800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f1/Laboratory7.png/revision/latest/scale-to-width-down/100?cb=20221125084439',
		},
		{
			level: 8,
			hitpoints: 950,
			buildCost: 1300000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 1,
			exp: 388,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Laboratory8.png/revision/latest/scale-to-width-down/100?cb=20221125084453',
		},
		{
			level: 9,
			hitpoints: 1070,
			buildCost: 2100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 2,
			exp: 487,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/58/Laboratory9.png/revision/latest/scale-to-width-down/100?cb=20221125084509',
		},
		{
			level: 10,
			hitpoints: 1140,
			buildCost: 3800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/Laboratory10.png/revision/latest/scale-to-width-down/100?cb=20221125084528',
		},
		{
			level: 11,
			hitpoints: 1210,
			buildCost: 5500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Laboratory11.png/revision/latest/scale-to-width-down/100?cb=20221125084543',
		},
		{
			level: 12,
			hitpoints: 1280,
			buildCost: 8100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 11,
			exp: 996,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Laboratory12.png/revision/latest/scale-to-width-down/100?cb=20221125084550',
		},
		{
			level: 13,
			hitpoints: 1350,
			buildCost: 12500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Laboratory13.png/revision/latest/scale-to-width-down/100?cb=20221125084602',
		},
		{
			level: 14,
			hitpoints: 1400,
			buildCost: 13500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 16,
			exp: 1175,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9b/Laboratory14.png/revision/latest/scale-to-width-down/100?cb=20231213083349',
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

export default laboratory