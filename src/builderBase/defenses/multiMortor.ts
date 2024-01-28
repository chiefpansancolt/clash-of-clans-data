import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/multiMortor/defense.interface'
import Level from '@IBuilderBase/defenses/multiMortor/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const multiMortor: Defense = {
	name: 'Multi Mortor',
	description:
		'Fires long range splash damage multiple times to maximize chances of hitting its target!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.splash,
			unitTypeTarget: Constants.ground,
			tiles: 3,
			minRange: 4,
			maxRange: 11,
			attackSpeed: 5,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
		{ townHall: 6, availableCount: 1, maxLevel: 6 },
		{ townHall: 7, availableCount: 1, maxLevel: 7 },
		{ townHall: 8, availableCount: 1, maxLevel: 8 },
		{ townHall: 9, availableCount: 1, maxLevel: 9 },
		{ townHall: 10, availableCount: 1, maxLevel: 10 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			hitpoints: 500,
			damagePerSecond: 20,
			burstFireShots: 3,
			damagePerShot: 45,
			buildCost: 600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Multi_Mortar1.png/revision/latest/scale-to-width-down/100?cb=20171109200531',
		},
		{
			level: 2,
			hitpoints: 575,
			damagePerSecond: 25,
			burstFireShots: 4,
			damagePerShot: 45,
			buildCost: 700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/55/Multi_Mortar2.png/revision/latest/scale-to-width-down/100?cb=20171109200532',
		},
		{
			level: 3,
			hitpoints: 660,
			damagePerSecond: 28,
			burstFireShots: 4,
			damagePerShot: 50,
			buildCost: 800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Multi_Mortar3.png/revision/latest/scale-to-width-down/100?cb=20171109200532',
		},
		{
			level: 4,
			hitpoints: 760,
			damagePerSecond: 31,
			burstFireShots: 4,
			damagePerShot: 55,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Multi_Mortar4.png/revision/latest/scale-to-width-down/100?cb=20171109200533',
		},
		{
			level: 5,
			hitpoints: 875,
			damagePerSecond: 34,
			burstFireShots: 4,
			damagePerShot: 60,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/65/Multi_Mortar5.png/revision/latest/scale-to-width-down/100?cb=20171109200533',
		},
		{
			level: 6,
			hitpoints: 1050,
			damagePerSecond: 37,
			burstFireShots: 4,
			damagePerShot: 66,
			buildCost: 1600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/38/Multi_Mortar6.png/revision/latest/scale-to-width-down/100?cb=20171109200533',
		},
		{
			level: 7,
			hitpoints: 1250,
			damagePerSecond: 41,
			burstFireShots: 4,
			damagePerShot: 73,
			buildCost: 2500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Multi_Mortar7.png/revision/latest/scale-to-width-down/100?cb=20171109200534',
		},
		{
			level: 8,
			hitpoints: 1450,
			damagePerSecond: 45,
			burstFireShots: 4,
			damagePerShot: 80,
			buildCost: 3500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9b/Multi_Mortar8.png/revision/latest/scale-to-width-down/100?cb=20171109200534',
		},
		{
			level: 9,
			hitpoints: 1650,
			damagePerSecond: 49,
			burstFireShots: 4,
			damagePerShot: 88,
			buildCost: 4500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/df/Multi_Mortar9.png/revision/latest/scale-to-width-down/100?cb=20190616223802',
		},
		{
			level: 10,
			hitpoints: 1850,
			damagePerSecond: 58,
			burstFireShots: 5,
			damagePerShot: 88,
			buildCost: 5500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1b/Multi_Mortar10.png/revision/latest/scale-to-width-down/100?cb=20230517035445',
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

export default multiMortor