import * as Constants from '@/constants'
import Level from '@IHomeVillage/defenses/mortor/level.interface'
import Defense from '@IHomeVillage/defenses/mortor/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const mortor: Defense = {
	name: 'Mortor',
	description:
		"The Mortar can mow down hordes of enemies by the splash damage from its shell. Don't let enemies get too close to it!",
	maxCount: 4,
	width: 3,
	height: 3,
	maxLevel: 16,
	gearUp: {
		buildCost: 8000000,
		buildTimeSec: 0,
		buildTimeMin: 0,
		buildTimeHour: 0,
		buildTimeDay: 14,
		homeVillageLevelRequired: 8,
		builderBaseDefenseLevelRequired: 8,
	},
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.splash,
			unitTypeTarget: Constants.ground,
			minRange: 4,
			maxRange: 11,
			tiles: 1.5,
			attackSpeed: 5,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 1, maxLevel: 1 },
		{ townHall: 4, availableCount: 1, maxLevel: 2 },
		{ townHall: 5, availableCount: 1, maxLevel: 3 },
		{ townHall: 6, availableCount: 2, maxLevel: 4 },
		{ townHall: 7, availableCount: 3, maxLevel: 5 },
		{ townHall: 8, availableCount: 4, maxLevel: 6 },
		{ townHall: 9, availableCount: 4, maxLevel: 7 },
		{ townHall: 10, availableCount: 4, maxLevel: 8 },
		{ townHall: 11, availableCount: 4, maxLevel: 10 },
		{ townHall: 12, availableCount: 4, maxLevel: 12 },
		{ townHall: 13, availableCount: 4, maxLevel: 13 },
		{ townHall: 14, availableCount: 4, maxLevel: 14 },
		{ townHall: 15, availableCount: 4, maxLevel: 15 },
		{ townHall: 16, availableCount: 4, maxLevel: 16 },
	],
	achievements: [
		{
			name: 'High Gear',
			village: Constants.builderBase,
			levels: [
				{
					info: 'Gear up 1 building using the Master Builder',
					exp: 20,
					gems: 10,
					stars: 1,
					target: 1,
				},
				{
					info: 'Gear up 2 building using the Master Builder',
					exp: 200,
					gems: 30,
					stars: 2,
					target: 2,
				},
				{
					info: 'Gear up 3 building using the Master Builder',
					exp: 2000,
					gems: 50,
					stars: 3,
					target: 3,
				},
			],
		},
		{
			name: 'Mortar Mauler',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Destroy 25 Mortars',
					exp: 10,
					gems: 5,
					stars: 1,
					target: 25,
				},
				{
					info: 'Destroy 500 Mortars',
					exp: 100,
					gems: 10,
					stars: 2,
					target: 500,
				},
				{
					info: 'Destroy 5,000 Mortars',
					exp: 1000,
					gems: 20,
					stars: 3,
					target: 5000,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 4,
			damagePerShot: 20,
			hitpoints: 400,
			buildCost: 5000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Mortar1.png/revision/latest/scale-to-width-down/100?cb=20230522073627',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 2,
			damagePerSecond: 5,
			damagePerShot: 25,
			hitpoints: 450,
			buildCost: 25000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Mortar2.png/revision/latest/scale-to-width-down/100?cb=20230522073638',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 3,
			damagePerSecond: 6,
			damagePerShot: 30,
			hitpoints: 500,
			buildCost: 100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Mortar3.png/revision/latest/scale-to-width-down/100?cb=20230522073648',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 4,
			damagePerSecond: 7,
			damagePerShot: 35,
			hitpoints: 550,
			buildCost: 200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4e/Mortar4.png/revision/latest/scale-to-width-down/100?cb=20211106234145',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 5,
			damagePerSecond: 9,
			damagePerShot: 45,
			hitpoints: 600,
			buildCost: 300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e7/Mortar5.png/revision/latest/scale-to-width-down/100?cb=20211106234157',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 6,
			damagePerSecond: 11,
			damagePerShot: 55,
			hitpoints: 650,
			buildCost: 560000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Mortar6.png/revision/latest/scale-to-width-down/100?cb=20211106234217',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 7,
			damagePerSecond: 15,
			damagePerShot: 75,
			hitpoints: 700,
			buildCost: 1300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Mortar7.png/revision/latest/scale-to-width-down/100?cb=20211106234234',
			gearImgUrl: '',
			burstImgUrl: '',
		},
		{
			level: 8,
			damagePerSecond: 20,
			damagePerShot: 100,
			hitpoints: 800,
			buildCost: 1900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/af/Mortar8B.png/revision/latest/scale-to-width-down/100?cb=20230522074244',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Mortar8.png/revision/latest/scale-to-width-down/100?cb=20211106234245',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0d/Mortar8G.png/revision/latest/scale-to-width-down/100?cb=20211106234319',
		},
		{
			level: 9,
			damagePerSecond: 25,
			damagePerShot: 125,
			hitpoints: 950,
			buildCost: 2500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Mortar9B.png/revision/latest/scale-to-width-down/100?cb=20230522074245',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Mortar9.png/revision/latest/scale-to-width-down/100?cb=20211106234359',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Mortar9G.png/revision/latest/scale-to-width-down/100?cb=20211106234410',
		},
		{
			level: 10,
			damagePerSecond: 30,
			damagePerShot: 150,
			hitpoints: 1100,
			buildCost: 3500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Mortar10B.png/revision/latest/scale-to-width-down/100?cb=20230522074246',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/87/Mortar10.png/revision/latest/scale-to-width-down/100?cb=20211106234449',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Mortar10G.png/revision/latest/scale-to-width-down/100?cb=20211106234459',
		},
		{
			level: 11,
			damagePerSecond: 35,
			damagePerShot: 175,
			hitpoints: 1300,
			buildCost: 5800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f4/Mortar11B.png/revision/latest/scale-to-width-down/100?cb=20230522074247',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Mortar11.png/revision/latest/scale-to-width-down/100?cb=20211106234536',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4d/Mortar11G.png/revision/latest/scale-to-width-down/100?cb=20211106234523',
		},
		{
			level: 12,
			damagePerSecond: 38,
			damagePerShot: 190,
			hitpoints: 1500,
			buildCost: 6500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Mortar12B.png/revision/latest/scale-to-width-down/100?cb=20230522074248',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Mortar12.png/revision/latest/scale-to-width-down/100?cb=20211106234559',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Mortar12G.png/revision/latest/scale-to-width-down/100?cb=20211106234607',
		},
		{
			level: 13,
			damagePerSecond: 42,
			damagePerShot: 210,
			hitpoints: 1700,
			buildCost: 8200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 7,
			exp: 804,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Mortar13B.png/revision/latest/scale-to-width-down/100?cb=20230522074249',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2a/Mortar13.png/revision/latest/scale-to-width-down/100?cb=20211106234639',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2d/Mortar13G.png/revision/latest/scale-to-width-down/100?cb=20211106234628',
		},
		{
			level: 14,
			damagePerSecond: 48,
			damagePerShot: 240,
			hitpoints: 1950,
			buildCost: 15000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Mortar14B.png/revision/latest/scale-to-width-down/100?cb=20230522074250',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Mortar14.png/revision/latest/scale-to-width-down/100?cb=20211106234713',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Mortar14G.png/revision/latest/scale-to-width-down/100?cb=20211106234656',
		},
		{
			level: 15,
			damagePerSecond: 54,
			damagePerShot: 270,
			hitpoints: 2150,
			buildCost: 19000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Mortar15B.png/revision/latest/scale-to-width-down/100?cb=20230522074251',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mortar15.png/revision/latest/scale-to-width-down/100?cb=20230522074902',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/37/Mortar15G.png/revision/latest/scale-to-width-down/100?cb=20230522074917',
		},
		{
			level: 16,
			damagePerSecond: 60,
			damagePerShot: 300,
			hitpoints: 2300,
			buildCost: 19500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 14,
			exp: 1119,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Mortar16B.png/revision/latest/scale-to-width-down/100?cb=20231213083618',
			gearImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Mortar16.png/revision/latest/scale-to-width-down/100?cb=20231213083653',
			burstImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Mortar16G.png/revision/latest/scale-to-width-down/100?cb=20231213083525',
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

export default mortor
