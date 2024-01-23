import * as Constants from '../../Constats'
import {
	TownHallDefense,
	BuilderBaseLevel,
	BuilderBaseDefense,
	AchievementLevel,
	DefenseMode,
} from '../../CommonInterfaces'

interface FirecrackerMode extends DefenseMode {
	shots: number
}

interface Firecrackers extends BuilderBaseDefense {
	modes: FirecrackerMode[]
}

const firecrackers: Firecrackers = {
	name: 'Firecrackers',
	description:
		"Keep flying pests away with flurries of small rockets! It's like a bug zapper, but prettier.",
	maxCount: 5,
	width: 2,
	height: 2,
	maxLevel: 10,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 9,
			shots: 3,
			tiles: 0,
			attackSpeed: 0.8,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 2, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 3, maxLevel: 7 },
		{ townHall: 8, availableCount: 4, maxLevel: 8 },
		{ townHall: 9, availableCount: 5, maxLevel: 9 },
		{ townHall: 10, availableCount: 5, maxLevel: 10 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 55,
			damagePerShot: 19,
			hitpoints: 400,
			buildCost: 40000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 15,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 30,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Firecrackers1.png/revision/latest/scale-to-width-down/100?cb=20230516073633',
		},
		{
			level: 2,
			damagePerSecond: 61,
			damagePerShot: 21,
			hitpoints: 460,
			buildCost: 80000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/40/Firecrackers2.png/revision/latest/scale-to-width-down/100?cb=20230516073642',
		},
		{
			level: 3,
			damagePerSecond: 67,
			damagePerShot: 23,
			hitpoints: 530,
			buildCost: 120000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c3/Firecrackers3.png/revision/latest/scale-to-width-down/100?cb=20230516073647',
		},
		{
			level: 4,
			damagePerSecond: 73,
			damagePerShot: 25,
			hitpoints: 610,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Firecrackers4.png/revision/latest/scale-to-width-down/100?cb=20230516073652',
		},
		{
			level: 5,
			damagePerSecond: 79,
			damagePerShot: 27,
			hitpoints: 700,
			buildCost: 800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Firecrackers5.png/revision/latest/scale-to-width-down/100?cb=20230516073659',
		},
		{
			level: 6,
			damagePerSecond: 87,
			damagePerShot: 30,
			hitpoints: 850,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Firecrackers6.png/revision/latest/scale-to-width-down/100?cb=20230516073704',
		},
		{
			level: 7,
			damagePerSecond: 96,
			damagePerShot: 33,
			hitpoints: 1000,
			buildCost: 2000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Firecrackers7.png/revision/latest/scale-to-width-down/100?cb=20230516073710',
		},
		{
			level: 8,
			damagePerSecond: 105,
			damagePerShot: 36,
			hitpoints: 1150,
			buildCost: 3000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Firecrackers8.png/revision/latest/scale-to-width-down/100?cb=20230516073718',
		},
		{
			level: 9,
			damagePerSecond: 117,
			damagePerShot: 40,
			hitpoints: 1300,
			buildCost: 4000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Firecrackers9.png/revision/latest/scale-to-width-down/100?cb=20230516073723',
		},
		{
			level: 10,
			damagePerSecond: 128,
			damagePerShot: 44,
			hitpoints: 1500,
			buildCost: 5000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Firecrackers10.png/revision/latest/scale-to-width-down/100?cb=20230516073609',
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

export default firecrackers
