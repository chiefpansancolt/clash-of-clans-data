import * as Constants from '@/Constats'
import Defense from '@IHomeVillage/defense.interface'
import Level from '@IHomeVillage/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const nameHere: Defense = {
	name: '',
	description: '',
	maxCount: 0,
	width: 0,
	height: 0,
	maxLevel: 0,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 0,
			attackSpeed: 0,
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
		{ townHall: 10, availableCount: 0, maxLevel: 0 },
		{ townHall: 11, availableCount: 0, maxLevel: 0 },
		{ townHall: 12, availableCount: 0, maxLevel: 0 },
		{ townHall: 13, availableCount: 0, maxLevel: 0 },
		{ townHall: 14, availableCount: 0, maxLevel: 0 },
		{ townHall: 15, availableCount: 0, maxLevel: 0 },
		{ townHall: 16, availableCount: 0, maxLevel: 0 },
	],
	achievements: [
		{
			name: '',
			village: Constants.builderBase,
			levels: [
				{
					info: '',
					exp: 0,
					gems: 0,
					stars: 1,
					target: 0,
				},
				{
					info: '',
					exp: 0,
					gems: 0,
					stars: 2,
					target: 0,
				},
				{
					info: '',
					exp: 0,
					gems: 0,
					stars: 3,
					target: 0,
				},
			],
		},
	],
	levels: [],
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

export default nameHere
