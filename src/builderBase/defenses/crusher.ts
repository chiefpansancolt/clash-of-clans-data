import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/crusher/defense.interface'
import Level from '@IBuilderBase/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const cannon: Defense = {
	name: 'Crusher',
	description:
		'The Crusher REALLY likes its personal space. This hulking stone slams ground units with a mighty wallop!',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 10,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.areaSplash,
			unitTypeTarget: Constants.ground,
			tiles: 2.8,
			minRange: 0,
			maxRange: 8.5,
			attackSpeed: 0.8,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 2, maxLevel: 7 },
		{ townHall: 8, availableCount: 2, maxLevel: 8 },
		{ townHall: 9, availableCount: 2, maxLevel: 9 },
		{ townHall: 10, availableCount: 2, maxLevel: 10 },
	],
	achievements: [],
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

export default cannon
