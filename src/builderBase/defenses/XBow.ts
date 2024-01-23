import * as Constants from '../../Constats'
import {
	TownHallDefense,
	BuilderBaseLevel,
	BuilderBaseDefense,
	AchievementLevel,
} from '../../CommonInterfaces'

interface XBowLevel extends BuilderBaseLevel {
	airImgUrl: string
}

interface Xbow extends BuilderBaseDefense {
	levels: XBowLevel[]

	getLevel(level: number): XBowLevel | undefined
}

const xBow: Xbow = {
	name: 'X-Bow',
	description:
		'The X-Bow shoots powerful bolts with terrifying power. You can set it to target ground units or air units.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 5,
	modes: [
		{
			name: Constants.groundMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 12,
			tiles: 0,
			attackSpeed: 0.192,
		},
		{
			name: Constants.airMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 12,
			tiles: 0,
			attackSpeed: 0.192,
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
		{ townHall: 9, availableCount: 0, maxLevel: 0 },
		{ townHall: 10, availableCount: 1, maxLevel: 5 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 80,
			damagePerShot: 15.36,
			hitpoints: 1700,
			buildCost: 4400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/X-Bow1B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212126',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ad/X-Bow1B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212125',
		},
		{
			level: 2,
			damagePerSecond: 88,
			damagePerShot: 16.9,
			hitpoints: 1900,
			buildCost: 4800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/X-Bow2B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212127',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/X-Bow2B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212126',
		},
		{
			level: 3,
			damagePerSecond: 96,
			damagePerShot: 18.43,
			hitpoints: 2100,
			buildCost: 5200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0b/X-Bow3B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212129',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/01/X-Bow3B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212128',
		},
		{
			level: 4,
			damagePerSecond: 106,
			damagePerShot: 20.35,
			hitpoints: 2350,
			buildCost: 5600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a9/X-Bow4B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212131',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/X-Bow4B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212130',
		},
		{
			level: 5,
			damagePerSecond: 116,
			damagePerShot: 22.27,
			hitpoints: 2600,
			buildCost: 6000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/X-Bow5B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212133',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/X-Bow5B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212132',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): XBowLevel | undefined {
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
