import * as Constants from '@/Constats'
import Level from '@IHomeVillage/level.interface'
import Defense from '@IHomeVillage/defenses/hiddenTesla/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const hiddenTesla: Defense = {
	name: 'Hidden Tesla',
	description:
		'Lay a deadly trap with the Hidden Tesla! Our Wizards have trapped a storm cloud into each of these sneaky towers. When an enemy walks or flies close enough, the tower springs up and fries it using the power of Electrickery!',
	maxCount: 5,
	width: 2,
	height: 2,
	maxLevel: 14,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 7,
			triggerRange: 6,
			attackSpeed: 0.6,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 2, maxLevel: 3 },
		{ townHall: 8, availableCount: 3, maxLevel: 6 },
		{ townHall: 9, availableCount: 4, maxLevel: 7 },
		{ townHall: 10, availableCount: 4, maxLevel: 8 },
		{ townHall: 11, availableCount: 4, maxLevel: 9 },
		{ townHall: 12, availableCount: 5, maxLevel: 10 },
		{ townHall: 13, availableCount: 5, maxLevel: 12 },
		{ townHall: 14, availableCount: 5, maxLevel: 13 },
		{ townHall: 15, availableCount: 5, maxLevel: 14 },
		{ townHall: 16, availableCount: 5, maxLevel: 14 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 34,
			damagePerShot: 20.4,
			hitpoints: 600,
			buildCost: 250000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Hidden_Tesla1.png/revision/latest/scale-to-width-down/80?cb=20180606190107',
		},
		{
			level: 2,
			damagePerSecond: 40,
			damagePerShot: 24,
			hitpoints: 630,
			buildCost: 350000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Hidden_Tesla2.png/revision/latest/scale-to-width-down/80?cb=20180606190121',
		},
		{
			level: 3,
			damagePerSecond: 48,
			damagePerShot: 28.8,
			hitpoints: 660,
			buildCost: 520000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Hidden_Tesla3.png/revision/latest/scale-to-width-down/80?cb=20180606190137',
		},
		{
			level: 4,
			damagePerSecond: 55,
			damagePerShot: 33,
			hitpoints: 690,
			buildCost: 800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Hidden_Tesla4.png/revision/latest/scale-to-width-down/80?cb=20180606190150',
		},
		{
			level: 5,
			damagePerSecond: 64,
			damagePerShot: 38.4,
			hitpoints: 730,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e9/Hidden_Tesla5.png/revision/latest/scale-to-width-down/80?cb=20180606190204',
		},
		{
			level: 6,
			damagePerSecond: 75,
			damagePerShot: 45,
			hitpoints: 770,
			buildCost: 1200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Hidden_Tesla6.png/revision/latest/scale-to-width-down/80?cb=20180606190216',
		},
		{
			level: 7,
			damagePerSecond: 87,
			damagePerShot: 52.2,
			hitpoints: 810,
			buildCost: 1500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Hidden_Tesla7.png/revision/latest/scale-to-width-down/80?cb=20180606190230',
		},
		{
			level: 8,
			damagePerSecond: 99,
			damagePerShot: 59.4,
			hitpoints: 850,
			buildCost: 1600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Hidden_Tesla8.png/revision/latest/scale-to-width-down/80?cb=20180606190243',
		},
		{
			level: 9,
			damagePerSecond: 110,
			damagePerShot: 66,
			hitpoints: 900,
			buildCost: 2500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e3/Hidden_Tesla9.png/revision/latest/scale-to-width-down/80?cb=20180606190256',
		},
		{
			level: 10,
			damagePerSecond: 120,
			damagePerShot: 72,
			hitpoints: 980,
			buildCost: 5000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 7,
			exp: 818,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/37/Hidden_Tesla10.png/revision/latest/scale-to-width-down/80?cb=20180604161808',
		},
		{
			level: 11,
			damagePerSecond: 130,
			damagePerShot: 78,
			hitpoints: 1100,
			buildCost: 7700000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Hidden_Tesla11.png/revision/latest/scale-to-width-down/80?cb=20191210175655',
		},
		{
			level: 12,
			damagePerSecond: 140,
			damagePerShot: 84,
			hitpoints: 1200,
			buildCost: 9000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/05/Hidden_Tesla12.png/revision/latest/scale-to-width-down/80?cb=20201013041040',
		},
		{
			level: 13,
			damagePerSecond: 150,
			damagePerShot: 90,
			hitpoints: 1350,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/78/Hidden_Tesla13.png/revision/latest/scale-to-width-down/80?cb=20210412214948',
		},
		{
			level: 14,
			damagePerSecond: 160,
			damagePerShot: 96,
			hitpoints: 1450,
			buildCost: 19100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f1/Hidden_Tesla14.png/revision/latest/scale-to-width-down/80?cb=20230613002325',
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

export default hiddenTesla
