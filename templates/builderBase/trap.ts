import * as Constants from '@/constants'
import Trap from '@IBuilderBase/traps/trap.interface'
import Level from '@IBuilderBase/traps/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const nameHere: Trap = {
	name: '',
	description: '',
	maxCount: 0,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minTriggerRange: 0,
		maxTriggerRange: 0,
		favoriteTarget: Constants.any,
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
