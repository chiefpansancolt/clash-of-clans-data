import * as Constants from '../../Constats'
import {
	TownHallDefense,
	BuilderBaseLevel,
	BuilderBaseDefense,
	AchievementLevel,
} from '../../CommonInterfaces'

const cannon: BuilderBaseDefense = {
	name: '',
	description: '',
	maxCount: 0,
	minRange: 0,
	maxRange: 0,
	tiles: 0,
	shots: 0,
	attackSpeed: 0,
	width: 0,
	height: 0,
	damageType: Constants.singleTarget,
	unitTypeTarget: Constants.ground,
	maxLevel: 0,
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
		{ townHall: 10, availableCount: 0, maxLevel: 0 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 2,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 3,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 4,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 5,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 6,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 7,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 8,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 9,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
		},
		{
			level: 10,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 0,
			baseImgUrl: '',
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

export default cannon
