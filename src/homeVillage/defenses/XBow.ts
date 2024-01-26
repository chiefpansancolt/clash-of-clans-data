import * as Constants from '@/Constats'
import Level from '@IHomeVillage/defenses/xbow/level.interface'
import Defense from '@IHomeVillage/defenses/xbow/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const xBow: Defense = {
	name: 'X-Bow',
	description:
		'The X-Bow shoots mystical bolts with terrifying power. Load it with Elixir and the X-Bow works automagically. You can set it to target ground units at long ranges, or all targets at reduced range.',
	maxCount: 4,
	width: 3,
	height: 3,
	maxLevel: 11,
	modes: [
		{
			name: Constants.groundMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.ground,
			minRange: 0,
			maxRange: 14,
			attackSpeed: 0.128,
			numberOfRounds: 1500,
		},
		{
			name: Constants.airAndGroundMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 11.5,
			attackSpeed: 0.128,
			numberOfRounds: 1500,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 0, maxLevel: 0 },
		{ townHall: 9, availableCount: 2, maxLevel: 3 },
		{ townHall: 10, availableCount: 3, maxLevel: 4 },
		{ townHall: 11, availableCount: 4, maxLevel: 5 },
		{ townHall: 12, availableCount: 4, maxLevel: 6 },
		{ townHall: 13, availableCount: 4, maxLevel: 8 },
		{ townHall: 14, availableCount: 4, maxLevel: 9 },
		{ townHall: 15, availableCount: 4, maxLevel: 10 },
		{ townHall: 16, availableCount: 4, maxLevel: 11 },
	],
	achievements: [
		{
			name: 'X-Bow Exterminator',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Destroy one X-Bow',
					exp: 50,
					gems: 50,
					stars: 1,
					target: 1,
				},
				{
					info: 'Destroy 250 X-Bows',
					exp: 100,
					gems: 100,
					stars: 2,
					target: 250,
				},
				{
					info: 'Destroy 2,500 X-Bows',
					exp: 1000,
					gems: 200,
					stars: 3,
					target: 2500,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerShot: 7.68,
			hitpoints: 1500,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/X-Bow1_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094910',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/X-Bow1_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061802',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/X-Bow1_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094921',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/X-Bow1_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061802',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerShot: 8.96,
			hitpoints: 1900,
			buildCost: 1600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/61/X-Bow2_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094829',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/33/X-Bow2_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061803',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/X-Bow2_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094840',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ec/X-Bow2_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061803',
		},
		{
			level: 3,
			damagePerSecond: 80,
			damagePerShot: 10.24,
			hitpoints: 2300,
			buildCost: 2400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/X-Bow3_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094712',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/52/X-Bow3_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061804',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/17/X-Bow3_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094729',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/X-Bow3_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061804',
		},
		{
			level: 4,
			damagePerSecond: 90,
			damagePerShot: 11.52,
			hitpoints: 2700,
			buildCost: 2500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5c/X-Bow4_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094634',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/X-Bow4_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061806',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7f/X-Bow4_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094647',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/X-Bow4_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061805',
		},
		{
			level: 5,
			damagePerSecond: 110,
			damagePerShot: 14.08,
			hitpoints: 3100,
			buildCost: 3900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 5,
			exp: 673,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d3/X-Bow5_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094541',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b3/X-Bow5_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061807',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/87/X-Bow5_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094551',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/X-Bow5_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061806',
		},
		{
			level: 6,
			damagePerSecond: 130,
			damagePerShot: 16.64,
			hitpoints: 3400,
			buildCost: 6800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 8,
			exp: 856,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d3/X-Bow6_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094433',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/X-Bow6_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061809',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/83/X-Bow6_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094450',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/aa/X-Bow6_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061808',
		},
		{
			level: 7,
			damagePerSecond: 150,
			damagePerShot: 19.2,
			hitpoints: 3700,
			buildCost: 8300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/X-Bow7_Ground.png/revision/latest/scale-to-width-down/100?cb=20200907094150',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/X-Bow7_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061810',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/aa/X-Bow7_Air.png/revision/latest/scale-to-width-down/100?cb=20200907094200',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/X-Bow7_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20200922061809',
		},
		{
			level: 8,
			damagePerSecond: 170,
			damagePerShot: 21.76,
			hitpoints: 4000,
			buildCost: 10300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e9/X-Bow8_Ground.png/revision/latest/scale-to-width-down/100?cb=20201208041612',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2f/X-Bow8_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20201208041613',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/X-Bow8_Air.png/revision/latest/scale-to-width-down/100?cb=20201208041613',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/X-Bow8_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20201208041613',
		},
		{
			level: 9,
			damagePerSecond: 190,
			damagePerShot: 24.32,
			hitpoints: 4200,
			buildCost: 14000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c1/X-Bow9_Ground.png/revision/latest/scale-to-width-down/100?cb=20210927180637',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/69/X-Bow9_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20210927180805',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/13/X-Bow9_Air.png/revision/latest/scale-to-width-down/100?cb=20210927180650',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/da/X-Bow9_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20210927180803',
		},
		{
			level: 10,
			damagePerSecond: 205,
			damagePerShot: 26.24,
			hitpoints: 4400,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 13,
			exp: 1089,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/db/X-Bow10_Ground.png/revision/latest/scale-to-width-down/100?cb=20221121044812',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/X-Bow10_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20221121044845',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/X-Bow10_Air.png/revision/latest/scale-to-width-down/100?cb=20221121044824',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f5/X-Bow10_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20221121044844',
		},
		{
			level: 11,
			damagePerSecond: 225,
			damagePerShot: 28.8,
			hitpoints: 4600,
			buildCost: 21000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 15,
			exp: 1138,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/X-Bow11_Ground.png/revision/latest/scale-to-width-down/100?cb=20231213084548',
			groundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/00/X-Bow11_Ground_Depleted.png/revision/latest/scale-to-width-down/90?cb=20231213084601',
			airGroundImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/50/X-Bow11_Air.png/revision/latest/scale-to-width-down/100?cb=20231213084623',
			airGroundDepletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/X-Bow11_Air_Depleted.png/revision/latest/scale-to-width-down/90?cb=20231213084600',
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

export default xBow
