import * as Constants from '../../Constats'
import {
	TownHallDefense,
	AchievementLevel,
	HomeVillageLevel,
	HomeVillageDefense,
} from '../../CommonInterfaces'

const airDefense: HomeVillageDefense = {
	name: 'Air Defense',
	description:
		"This anti-air tower is deadly against flying enemies, but can't target foes on the ground. Place it wisely to cover as much airspace as possible.",
	maxCount: 4,
	width: 3,
	height: 3,
	maxLevel: 14,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 10,
			attackSpeed: 1,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 1, maxLevel: 2 },
		{ townHall: 5, availableCount: 1, maxLevel: 3 },
		{ townHall: 6, availableCount: 2, maxLevel: 4 },
		{ townHall: 7, availableCount: 3, maxLevel: 5 },
		{ townHall: 8, availableCount: 3, maxLevel: 6 },
		{ townHall: 9, availableCount: 4, maxLevel: 7 },
		{ townHall: 10, availableCount: 4, maxLevel: 8 },
		{ townHall: 11, availableCount: 4, maxLevel: 9 },
		{ townHall: 12, availableCount: 4, maxLevel: 10 },
		{ townHall: 13, availableCount: 4, maxLevel: 11 },
		{ townHall: 14, availableCount: 4, maxLevel: 12 },
		{ townHall: 15, availableCount: 4, maxLevel: 13 },
		{ townHall: 16, availableCount: 4, maxLevel: 14 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 80,
			damagePerShot: 80,
			hitpoints: 800,
			buildCost: 22000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6f/Air_Defense1.png/revision/latest/scale-to-width-down/100?cb=20221222212032',
		},
		{
			level: 2,
			damagePerSecond: 110,
			damagePerShot: 110,
			hitpoints: 850,
			buildCost: 90000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Defense2.png/revision/latest/scale-to-width-down/100?cb=20221222212040',
		},
		{
			level: 3,
			damagePerSecond: 140,
			damagePerShot: 140,
			hitpoints: 900,
			buildCost: 270000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Air_Defense3.png/revision/latest/scale-to-width-down/100?cb=20221222212048',
		},
		{
			level: 4,
			damagePerSecond: 160,
			damagePerShot: 160,
			hitpoints: 950,
			buildCost: 500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/48/Air_Defense4.png/revision/latest/scale-to-width-down/100?cb=20221222212058',
		},
		{
			level: 5,
			damagePerSecond: 190,
			damagePerShot: 190,
			hitpoints: 1000,
			buildCost: 800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7e/Air_Defense5.png/revision/latest/scale-to-width-down/100?cb=20221222212110',
		},
		{
			level: 6,
			damagePerSecond: 230,
			damagePerShot: 230,
			hitpoints: 1050,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/39/Air_Defense6.png/revision/latest/scale-to-width-down/100?cb=20221222212123',
		},
		{
			level: 7,
			damagePerSecond: 280,
			damagePerShot: 280,
			hitpoints: 1100,
			buildCost: 1750000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Air_Defense7.png/revision/latest/scale-to-width-down/100?cb=20221222212136',
		},
		{
			level: 8,
			damagePerSecond: 320,
			damagePerShot: 320,
			hitpoints: 1210,
			buildCost: 2300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/03/Air_Defense8.png/revision/latest/scale-to-width-down/100?cb=20221222212150',
		},
		{
			level: 9,
			damagePerSecond: 360,
			damagePerShot: 360,
			hitpoints: 1300,
			buildCost: 3400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/45/Air_Defense9.png/revision/latest/scale-to-width-down/100?cb=20221222212202',
		},
		{
			level: 10,
			damagePerSecond: 400,
			damagePerShot: 400,
			hitpoints: 1400,
			buildCost: 5800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 8,
			exp: 869,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/34/Air_Defense10.png/revision/latest/scale-to-width-down/100?cb=20221222212214',
		},
		{
			level: 11,
			damagePerSecond: 440,
			damagePerShot: 440,
			hitpoints: 1500,
			buildCost: 8400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Air_Defense11.png/revision/latest/scale-to-width-down/100?cb=20221222212227',
		},
		{
			level: 12,
			damagePerSecond: 500,
			damagePerShot: 500,
			hitpoints: 1650,
			buildCost: 11900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c3/Air_Defense12.png/revision/latest/scale-to-width-down/100?cb=20221222212238',
		},
		{
			level: 13,
			damagePerSecond: 540,
			damagePerShot: 540,
			hitpoints: 1750,
			buildCost: 19500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d9/Air_Defense13.png/revision/latest/scale-to-width-down/100?cb=20221222212249',
		},
		{
			level: 14,
			damagePerSecond: 600,
			damagePerShot: 600,
			hitpoints: 1850,
			buildCost: 20500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 15,
			exp: 1138,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Air_Defense14.png/revision/latest/scale-to-width-down/100?cb=20231213083904',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): HomeVillageLevel | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDefense | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined {
		if (level && level >= 1 && level <= this.achievements[0].levels.length) {
			return this.achievements[0].levels[level - 1]
		} else if (count) {
			for (const achievementLevel of this.achievements[0].levels) {
				if (count < achievementLevel.target) {
					return achievementLevel
				}
			}

			return this.achievements[0].levels[this.achievements[0].levels.length - 1]
		} else {
			console.error(`Invalid Achievement level: ${level} or Invalid Count used: ${count}`)
			return undefined
		}
	},
}

export default airDefense
