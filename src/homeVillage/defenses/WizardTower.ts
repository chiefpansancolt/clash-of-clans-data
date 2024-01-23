import * as Constants from '../../Constats'
import {
	TownHallDefense,
	AchievementLevel,
	HomeVillageLevel,
	HomeVillageDefense,
} from '../../CommonInterfaces'

const wizardTower: HomeVillageDefense = {
	name: 'Wizard Tower',
	description:
		'The Ultimate Arcane Defense! Tower Wizards cast powerful area effect spells that target both flying and ground troops.',
	maxCount: 5,
	minRange: 0,
	maxRange: 7,
	tiles: 1,
	attackSpeed: 1.3,
	width: 3,
	height: 3,
	damageType: Constants.splash,
	unitTypeTarget: Constants.groundAndAir,
	maxLevel: 16,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 1, maxLevel: 2 },
		{ townHall: 6, availableCount: 2, maxLevel: 3 },
		{ townHall: 7, availableCount: 2, maxLevel: 4 },
		{ townHall: 8, availableCount: 3, maxLevel: 6 },
		{ townHall: 9, availableCount: 4, maxLevel: 7 },
		{ townHall: 10, availableCount: 4, maxLevel: 8 },
		{ townHall: 11, availableCount: 5, maxLevel: 10 },
		{ townHall: 12, availableCount: 5, maxLevel: 11 },
		{ townHall: 13, availableCount: 5, maxLevel: 13 },
		{ townHall: 14, availableCount: 5, maxLevel: 14 },
		{ townHall: 15, availableCount: 5, maxLevel: 15 },
		{ townHall: 16, availableCount: 5, maxLevel: 16 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 11,
			damagePerShot: 14.3,
			hitpoints: 620,
			buildCost: 120000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/Wizard_Tower1.png/revision/latest/scale-to-width-down/100?cb=20230521052614',
		},
		{
			level: 2,
			damagePerSecond: 13,
			damagePerShot: 16.9,
			hitpoints: 650,
			buildCost: 220000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Wizard_Tower2.png/revision/latest/scale-to-width-down/100?cb=20230521052621',
		},
		{
			level: 3,
			damagePerSecond: 16,
			damagePerShot: 20.8,
			hitpoints: 680,
			buildCost: 400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Wizard_Tower3.png/revision/latest/scale-to-width-down/100?cb=20230521052628',
		},
		{
			level: 4,
			damagePerSecond: 20,
			damagePerShot: 26,
			hitpoints: 730,
			buildCost: 540000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/55/Wizard_Tower4.png/revision/latest/scale-to-width-down/100?cb=20230521052634',
		},
		{
			level: 5,
			damagePerSecond: 24,
			damagePerShot: 31.2,
			hitpoints: 840,
			buildCost: 700000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6e/Wizard_Tower5.png/revision/latest/scale-to-width-down/100?cb=20230521052641',
		},
		{
			level: 6,
			damagePerSecond: 32,
			damagePerShot: 41.6,
			hitpoints: 960,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Wizard_Tower6.png/revision/latest/scale-to-width-down/100?cb=20230521052648',
		},
		{
			level: 7,
			damagePerSecond: 40,
			damagePerShot: 52,
			hitpoints: 1200,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Wizard_Tower7.png/revision/latest/scale-to-width-down/100?cb=20230521052655',
		},
		{
			level: 8,
			damagePerSecond: 45,
			damagePerShot: 58.5,
			hitpoints: 1440,
			buildCost: 2200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ad/Wizard_Tower8.png/revision/latest/scale-to-width-down/100?cb=20230521052705',
		},
		{
			level: 9,
			damagePerSecond: 50,
			damagePerShot: 65,
			hitpoints: 1680,
			buildCost: 2800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Wizard_Tower9.png/revision/latest/scale-to-width-down/100?cb=20230521052717',
		},
		{
			level: 10,
			damagePerSecond: 62,
			damagePerShot: 80.6,
			hitpoints: 2000,
			buildCost: 4000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Wizard_Tower10.png/revision/latest/scale-to-width-down/100?cb=20230521052724',
		},
		{
			level: 11,
			damagePerSecond: 70,
			damagePerShot: 91,
			hitpoints: 2240,
			buildCost: 7200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Wizard_Tower11.png/revision/latest/scale-to-width-down/100?cb=20230521052735',
		},
		{
			level: 12,
			damagePerSecond: 78,
			damagePerShot: 101.4,
			hitpoints: 2480,
			buildCost: 9200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b4/Wizard_Tower12.png/revision/latest/scale-to-width-down/100?cb=20230521052739',
		},
		{
			level: 13,
			damagePerSecond: 84,
			damagePerShot: 109.2,
			hitpoints: 2700,
			buildCost: 10200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3c/Wizard_Tower13.png/revision/latest/scale-to-width-down/100?cb=20230521052746',
		},
		{
			level: 14,
			damagePerSecond: 90,
			damagePerShot: 117,
			hitpoints: 2900,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/24/Wizard_Tower14.png/revision/latest/scale-to-width-down/100?cb=20230521052756',
		},
		{
			level: 15,
			damagePerSecond: 95,
			damagePerShot: 123.5,
			hitpoints: 3000,
			buildCost: 19200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Wizard_Tower15.png/revision/latest/scale-to-width-down/100?cb=20230521052811',
		},
		{
			level: 16,
			damagePerSecond: 102,
			damagePerShot: 132.6,
			hitpoints: 3150,
			buildCost: 20200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 14,
			exp: 1119,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Wizard_Tower16.png/revision/latest/scale-to-width-down/100?cb=20231213084004',
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

export default wizardTower
