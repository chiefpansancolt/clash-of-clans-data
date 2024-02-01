import * as Constants from '@/constants'
import Trap from '@IHomeVillage/traps/bomb/trap.interface'
import Level from '@IHomeVillage/traps/bomb/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const bomb: Trap = {
	name: 'Bomb',
	description: "Nothing says 'STAY OUT' quite like a good old-fashioned hidden bomb.",
	maxCount: 8,
	width: 1,
	height: 1,
	maxLevel: 12,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 1.5,
		damageRadius: 3,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 4, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 5, availableCount: 4, maxLevel: 3 },
		{ townHallLevel: 6, availableCount: 4, maxLevel: 3 },
		{ townHallLevel: 7, availableCount: 6, maxLevel: 4 },
		{ townHallLevel: 8, availableCount: 6, maxLevel: 5 },
		{ townHallLevel: 9, availableCount: 6, maxLevel: 6 },
		{ townHallLevel: 10, availableCount: 6, maxLevel: 7 },
		{ townHallLevel: 11, availableCount: 6, maxLevel: 8 },
		{ townHallLevel: 12, availableCount: 6, maxLevel: 9 },
		{ townHallLevel: 13, availableCount: 7, maxLevel: 9 },
		{ townHallLevel: 14, availableCount: 8, maxLevel: 10 },
		{ townHallLevel: 15, availableCount: 8, maxLevel: 11 },
		{ townHallLevel: 16, availableCount: 8, maxLevel: 12 },
	],
	levels: [
		{
			level: 1,
			damage: 20,
			buildCost: 400,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Bomb1.png/revision/latest?cb=20210213070620',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Bomb1_unarmed.png/revision/latest?cb=20210213070818',
		},
		{
			level: 2,
			damage: 24,
			buildCost: 1000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 6,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 18,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Bomb1.png/revision/latest?cb=20210213070620',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Bomb1_unarmed.png/revision/latest?cb=20210213070818',
		},
		{
			level: 3,
			damage: 29,
			buildCost: 10000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Bomb3.png/revision/latest?cb=20210213070653',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Bomb3_unarmed.png/revision/latest?cb=20210213070818',
		},
		{
			level: 4,
			damage: 35,
			buildCost: 75000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Bomb3.png/revision/latest?cb=20210213070653',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Bomb3_unarmed.png/revision/latest?cb=20210213070818',
		},
		{
			level: 5,
			damage: 42,
			buildCost: 220000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Bomb5.png/revision/latest?cb=20210213070719',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Bomb5_unarmed.png/revision/latest?cb=20210213070842',
		},
		{
			level: 6,
			damage: 54,
			buildCost: 450000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Bomb5.png/revision/latest?cb=20210213070719',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Bomb5_unarmed.png/revision/latest?cb=20210213070842',
		},
		{
			level: 7,
			damage: 72,
			buildCost: 650000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Bomb7.png/revision/latest?cb=20210213070737',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Bomb7_unarmed.png/revision/latest?cb=20210213070820',
		},
		{
			level: 8,
			damage: 92,
			buildCost: 1100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Bomb7.png/revision/latest?cb=20210213070737',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Bomb7_unarmed.png/revision/latest?cb=20210213070820',
		},
		{
			level: 9,
			damage: 125,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 2,
			exp: 487,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Bomb9.png/revision/latest?cb=20210213070754',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Bomb9_unarmed.png/revision/latest?cb=20210213070821',
		},
		{
			level: 10,
			damage: 140,
			buildCost: 4000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Bomb9.png/revision/latest?cb=20210213070754',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Bomb9_unarmed.png/revision/latest?cb=20210213070821',
		},
		{
			level: 11,
			damage: 155,
			buildCost: 8000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/78/Bomb11.png/revision/latest?cb=20221012074258',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Bomb11_unarmed.png/revision/latest?cb=20221012074257',
		},
		{
			level: 12,
			damage: 170,
			buildCost: 9000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 8,
			exp: 856,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/78/Bomb11.png/revision/latest?cb=20221012074258',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Bomb11_unarmed.png/revision/latest?cb=20221012074257',
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

export default bomb
