import * as Constants from '@/constants'
import Defense from '@IHomeVillage/defenses/bombTower/defense.interface'
import Level from '@IHomeVillage/defenses/bombTower/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const bombTower: Defense = {
	name: 'Bomb Tower',
	description:
		'Bomb Towers bombard nearby ground troops and go up in a big BOOM when destroyed! Melee units best stand clear!',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 11,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.splash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 6,
		tiles: 1.5,
		attackSpeed: 1.1,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 1, maxLevel: 2 },
		{ townHall: 9, availableCount: 1, maxLevel: 3 },
		{ townHall: 10, availableCount: 2, maxLevel: 4 },
		{ townHall: 11, availableCount: 2, maxLevel: 6 },
		{ townHall: 12, availableCount: 2, maxLevel: 7 },
		{ townHall: 13, availableCount: 2, maxLevel: 8 },
		{ townHall: 14, availableCount: 2, maxLevel: 9 },
		{ townHall: 15, availableCount: 2, maxLevel: 10 },
		{ townHall: 16, availableCount: 2, maxLevel: 11 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 24,
			damagePerShot: 26.4,
			damageWhenDestroyed: 150,
			hitpoints: 650,
			buildCost: 700000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/68/Bomb_Tower1.png/revision/latest/scale-to-width-down/100?cb=20231213084104',
		},
		{
			level: 2,
			damagePerSecond: 28,
			damagePerShot: 30.8,
			damageWhenDestroyed: 180,
			hitpoints: 700,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c9/Bomb_Tower2.png/revision/latest/scale-to-width-down/100?cb=20231213084115',
		},
		{
			level: 3,
			damagePerSecond: 32,
			damagePerShot: 35.2,
			damageWhenDestroyed: 220,
			hitpoints: 750,
			buildCost: 1600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/46/Bomb_Tower3.png/revision/latest/scale-to-width-down/100?cb=20231213084123',
		},
		{
			level: 4,
			damagePerSecond: 40,
			damagePerShot: 44,
			damageWhenDestroyed: 260,
			hitpoints: 850,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Bomb_Tower4.png/revision/latest/scale-to-width-down/100?cb=20231213084129',
		},
		{
			level: 5,
			damagePerSecond: 48,
			damagePerShot: 52.8,
			damageWhenDestroyed: 300,
			hitpoints: 1050,
			buildCost: 2800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Bomb_Tower5.png/revision/latest/scale-to-width-down/100?cb=20231213084135',
		},
		{
			level: 6,
			damagePerSecond: 56,
			damagePerShot: 61.6,
			damageWhenDestroyed: 350,
			hitpoints: 1300,
			buildCost: 4000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/83/Bomb_Tower6.png/revision/latest/scale-to-width-down/100?cb=20231213084308',
		},
		{
			level: 7,
			damagePerSecond: 64,
			damagePerShot: 70.4,
			damageWhenDestroyed: 400,
			hitpoints: 1600,
			buildCost: 6300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/59/Bomb_Tower7.png/revision/latest/scale-to-width-down/100?cb=20231213084325',
		},
		{
			level: 8,
			damagePerSecond: 72,
			damagePerShot: 79.2,
			damageWhenDestroyed: 450,
			hitpoints: 1900,
			buildCost: 8800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bc/Bomb_Tower8.png/revision/latest/scale-to-width-down/100?cb=20231213084338',
		},
		{
			level: 9,
			damagePerSecond: 84,
			damagePerShot: 92.4,
			damageWhenDestroyed: 500,
			hitpoints: 2300,
			buildCost: 12300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b3/Bomb_Tower9.png/revision/latest/scale-to-width-down/100?cb=20231213084352',
		},
		{
			level: 10,
			damagePerSecond: 94,
			damagePerShot: 103.4,
			damageWhenDestroyed: 550,
			hitpoints: 2500,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/07/Bomb_Tower10.png/revision/latest/scale-to-width-down/100?cb=20231213084402',
		},
		{
			level: 11,
			damagePerSecond: 104,
			damagePerShot: 114.4,
			damageWhenDestroyed: 600,
			hitpoints: 2700,
			buildCost: 20800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 14,
			exp: 1119,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Bomb_Tower11.png/revision/latest/scale-to-width-down/100?cb=20231213084415',
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

export default bombTower
