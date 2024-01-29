import * as Constants from '@/constants'
import Trap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const nameHere: Trap = {
	name: '',
	description: '',
	maxCount: 0,
	width: 3,
	height: 3,
	maxLevel: 0,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minRange: 0,
		maxRange: 0,
		attackSpeed: 0,
	},
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
	achievement: {
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
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default nameHere
