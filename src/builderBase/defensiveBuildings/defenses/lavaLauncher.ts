import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/lavaLauncher/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const lavaLauncher: Defense = {
	name: 'Lava Launcher',
	description:
		'Hurls molten rock over great distances. Sets the ground on fire, which really turns up the heat for enemy ground troops!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.splash,
		unitTypeTarget: Constants.ground,
		tiles: 3,
		minRange: 6,
		maxRange: 13,
		attackSpeed: 7,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 1, maxLevel: 8 },
		{ townHall: 9, availableCount: 1, maxLevel: 9 },
		{ townHall: 10, availableCount: 1, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 500,
			damagePerSecond: 15,
			damagePerShot: 50,
			buildCost: 3000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Lava_Launcher1.png/revision/latest/scale-to-width-down/100?cb=20190618174155',
		},
		{
			level: 2,
			hitpoints: 575,
			damagePerSecond: 17,
			damagePerShot: 55,
			buildCost: 3100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Lava_Launcher1.png/revision/latest/scale-to-width-down/100?cb=20190618174155',
		},
		{
			level: 3,
			hitpoints: 660,
			damagePerSecond: 20,
			damagePerShot: 61,
			buildCost: 3200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/47/Lava_Launcher3.png/revision/latest/scale-to-width-down/100?cb=20190618174156',
		},
		{
			level: 4,
			hitpoints: 760,
			damagePerSecond: 22,
			damagePerShot: 67,
			buildCost: 3400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/47/Lava_Launcher3.png/revision/latest/scale-to-width-down/100?cb=20190618174156',
		},
		{
			level: 5,
			hitpoints: 875,
			damagePerSecond: 25,
			damagePerShot: 73,
			buildCost: 3700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Lava_Launcher5.png/revision/latest/scale-to-width-down/100?cb=20190618174156',
		},
		{
			level: 6,
			hitpoints: 1050,
			damagePerSecond: 27,
			damagePerShot: 81,
			buildCost: 4000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Lava_Launcher6.png/revision/latest/scale-to-width-down/100?cb=20190618174157',
		},
		{
			level: 7,
			hitpoints: 1250,
			damagePerSecond: 30,
			damagePerShot: 89,
			buildCost: 4300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Lava_Launcher7.png/revision/latest/scale-to-width-down/100?cb=20190618174157',
		},
		{
			level: 8,
			hitpoints: 1450,
			damagePerSecond: 32,
			damagePerShot: 97,
			buildCost: 4600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Lava_Launcher7.png/revision/latest/scale-to-width-down/100?cb=20190618174157',
		},
		{
			level: 9,
			hitpoints: 1650,
			damagePerSecond: 35,
			damagePerShot: 107,
			buildCost: 4900000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Lava_Launcher9.png/revision/latest/scale-to-width-down/100?cb=20190618174157',
		},
		{
			level: 10,
			hitpoints: 1850,
			damagePerSecond: 37,
			damagePerShot: 118,
			buildCost: 5900000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Lava_Launcher10.png/revision/latest/scale-to-width-down/100?cb=20230517051511',
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

export default lavaLauncher
