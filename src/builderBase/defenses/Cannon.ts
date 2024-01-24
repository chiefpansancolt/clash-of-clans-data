import * as Constants from '../../Constats'
import {
	TownHallDefense,
	BuilderBaseLevel,
	BuilderBaseDefense,
	AchievementLevel,
} from '../../CommonInterfaces'

const cannon: BuilderBaseDefense = {
	name: 'Cannon',
	description:
		'The iconic ground defense, built to last! This classic makes the Master Builder a bit sentimental.',
	maxCount: 3,
	width: 3,
	height: 3,
	maxLevel: 10,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.ground,
			minRange: 0,
			maxRange: 8.5,
			attackSpeed: 0.8,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 1 },
		{ townHall: 2, availableCount: 1, maxLevel: 1 },
		{ townHall: 3, availableCount: 2, maxLevel: 3 },
		{ townHall: 4, availableCount: 2, maxLevel: 4 },
		{ townHall: 5, availableCount: 2, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 3, maxLevel: 7 },
		{ townHall: 8, availableCount: 3, maxLevel: 8 },
		{ townHall: 9, availableCount: 3, maxLevel: 9 },
		{ townHall: 10, availableCount: 3, maxLevel: 10 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 70,
			damagePerShot: 56,
			hitpoints: 500,
			buildCost: 10000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 1,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 7,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a1/Cannon1.png/revision/latest/scale-to-width-down/100?cb=20230521100552',
		},
		{
			level: 2,
			damagePerSecond: 77,
			damagePerShot: 62,
			hitpoints: 575,
			buildCost: 20000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Cannon2.png/revision/latest/scale-to-width-down/100?cb=20230521100606',
		},
		{
			level: 3,
			damagePerSecond: 85,
			damagePerShot: 68,
			hitpoints: 660,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Cannon3.png/revision/latest/scale-to-width-down/100?cb=20230521100615',
		},
		{
			level: 4,
			damagePerSecond: 93,
			damagePerShot: 74,
			hitpoints: 760,
			buildCost: 200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Cannon4.png/revision/latest/scale-to-width-down/100?cb=20230521100624',
		},
		{
			level: 5,
			damagePerSecond: 102,
			damagePerShot: 82,
			hitpoints: 875,
			buildCost: 600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ea/Cannon5.png/revision/latest/scale-to-width-down/100?cb=20230521100633',
		},
		{
			level: 6,
			damagePerSecond: 112,
			damagePerShot: 90,
			hitpoints: 1050,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/93/Cannon6.png/revision/latest/scale-to-width-down/100?cb=20230521100644',
		},
		{
			level: 7,
			damagePerSecond: 123,
			damagePerShot: 98,
			hitpoints: 1250,
			buildCost: 1800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/16/Cannon7B.png/revision/latest/scale-to-width-down/100?cb=20230521100706',
		},
		{
			level: 8,
			damagePerSecond: 136,
			damagePerShot: 109,
			hitpoints: 1450,
			buildCost: 2500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Cannon8B.png/revision/latest/scale-to-width-down/100?cb=20230521100727',
		},
		{
			level: 9,
			damagePerSecond: 150,
			damagePerShot: 120,
			hitpoints: 1650,
			buildCost: 3300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9b/Cannon9B.png/revision/latest/scale-to-width-down/100?cb=20230521100746',
		},
		{
			level: 10,
			damagePerSecond: 165,
			damagePerShot: 132,
			hitpoints: 1850,
			buildCost: 4500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Cannon10B.png/revision/latest/scale-to-width-down/100?cb=20230521100811',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): BuilderBaseLevel | undefined {
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

export default cannon
