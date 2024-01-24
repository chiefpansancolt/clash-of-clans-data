import * as Constants from '../../Constats'
import {
	TownHallDefense,
	BuilderBaseLevel,
	BuilderBaseDefense,
	AchievementLevel,
	DefenseMode,
} from '../../CommonInterfaces'

interface HiddenTeslaMode extends DefenseMode {
	triggerRange: number
}

interface HiddenTesla extends BuilderBaseDefense {
	modes: HiddenTeslaMode[]
}

const hiddenTesla: HiddenTesla = {
	name: 'Hidden Tesla',
	description:
		'Part tower, part trap, completely shocking! Zap air and ground foes alike with the power of science!',
	maxCount: 3,
	width: 2,
	height: 2,
	maxLevel: 10,
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
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
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
			damagePerSecond: 60,
			damagePerShot: 36,
			hitpoints: 300,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Hidden_Tesla1.png/revision/latest/scale-to-width-down/80?cb=20180606190107',
		},
		{
			level: 2,
			damagePerSecond: 66,
			damagePerShot: 40,
			hitpoints: 350,
			buildCost: 100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Hidden_Tesla2.png/revision/latest/scale-to-width-down/80?cb=20180606190121',
		},
		{
			level: 3,
			damagePerSecond: 73,
			damagePerShot: 44,
			hitpoints: 400,
			buildCost: 150000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Hidden_Tesla3.png/revision/latest/scale-to-width-down/80?cb=20180606190137',
		},
		{
			level: 4,
			damagePerSecond: 80,
			damagePerShot: 48,
			hitpoints: 460,
			buildCost: 280000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 10,
			buildTimeDay: 0,
			exp: 189,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Hidden_Tesla4.png/revision/latest/scale-to-width-down/80?cb=20180606190150',
		},
		{
			level: 5,
			damagePerSecond: 88,
			damagePerShot: 53,
			hitpoints: 550,
			buildCost: 700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e9/Hidden_Tesla5.png/revision/latest/scale-to-width-down/80?cb=20180606190204',
		},
		{
			level: 6,
			damagePerSecond: 96,
			damagePerShot: 58,
			hitpoints: 650,
			buildCost: 1300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Hidden_Tesla6.png/revision/latest/scale-to-width-down/80?cb=20180606190216',
		},
		{
			level: 7,
			damagePerSecond: 106,
			damagePerShot: 64,
			hitpoints: 750,
			buildCost: 2100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Hidden_Tesla7.png/revision/latest/scale-to-width-down/80?cb=20180606190230',
		},
		{
			level: 8,
			damagePerSecond: 116,
			damagePerShot: 70,
			hitpoints: 850,
			buildCost: 3100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Hidden_Tesla8.png/revision/latest/scale-to-width-down/80?cb=20180606190243',
		},
		{
			level: 9,
			damagePerSecond: 128,
			damagePerShot: 77,
			hitpoints: 1000,
			buildCost: 4100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e3/Hidden_Tesla9.png/revision/latest/scale-to-width-down/80?cb=20180606190256',
		},
		{
			level: 10,
			damagePerSecond: 141,
			damagePerShot: 85,
			hitpoints: 1150,
			buildCost: 5100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/37/Hidden_Tesla10.png/revision/latest/scale-to-width-down/80?cb=20180604161808',
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

export default hiddenTesla
