import * as Constants from '@/constants'
import Defense from '@IHomeVillage/defenses/airSweeper/defense.interface'
import Level from '@IHomeVillage/defenses/airSweeper/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const airSweeper: Defense = {
	name: 'Air Sweeper',
	description:
		'Air Sweepers control the sky with strong blasts of air that push back flying enemies. Air Sweepers can only face one direction, so rotate them to maximize their effectiveness.',
	maxCount: 2,
	width: 2,
	height: 2,
	maxLevel: 7,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.noneKnockback,
		unitTypeTarget: Constants.air,
		minRange: 1,
		maxRange: 15,
		attackSpeed: 5,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 1, maxLevel: 2 },
		{ townHall: 7, availableCount: 1, maxLevel: 3 },
		{ townHall: 8, availableCount: 1, maxLevel: 4 },
		{ townHall: 9, availableCount: 2, maxLevel: 5 },
		{ townHall: 10, availableCount: 2, maxLevel: 6 },
		{ townHall: 11, availableCount: 2, maxLevel: 7 },
		{ townHall: 12, availableCount: 2, maxLevel: 7 },
		{ townHall: 13, availableCount: 2, maxLevel: 7 },
		{ townHall: 14, availableCount: 2, maxLevel: 7 },
		{ townHall: 15, availableCount: 2, maxLevel: 7 },
		{ townHall: 16, availableCount: 2, maxLevel: 7 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			pushStrength: 1.6,
			hitpoints: 750,
			buildCost: 400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Air_Sweeper1.png/revision/latest/scale-to-width-down/100?cb=20180115153131',
		},
		{
			level: 2,
			pushStrength: 2,
			hitpoints: 800,
			buildCost: 600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Air_Sweeper2.png/revision/latest/scale-to-width-down/100?cb=20180115153146',
		},
		{
			level: 3,
			pushStrength: 2.4,
			hitpoints: 850,
			buildCost: 900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0d/Air_Sweeper3.png/revision/latest/scale-to-width-down/100?cb=20180115153200',
		},
		{
			level: 4,
			pushStrength: 2.8,
			hitpoints: 900,
			buildCost: 1200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b6/Air_Sweeper4.png/revision/latest/scale-to-width-down/100?cb=20180115153214',
		},
		{
			level: 5,
			pushStrength: 3.2,
			hitpoints: 950,
			buildCost: 1800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c3/Air_Sweeper5.png/revision/latest/scale-to-width-down/100?cb=20180115153229',
		},
		{
			level: 6,
			pushStrength: 3.6,
			hitpoints: 1000,
			buildCost: 1900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Air_Sweeper6.png/revision/latest/scale-to-width-down/100?cb=20180115153243',
		},
		{
			level: 7,
			pushStrength: 4,
			hitpoints: 1050,
			buildCost: 3400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Air_Sweeper7.png/revision/latest/scale-to-width-down/100?cb=20180115153257',
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

export default airSweeper