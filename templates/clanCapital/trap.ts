import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const nameHere: Trap = {
	name: '',
	description: '',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl: '',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minTriggerRange: 0,
		maxTriggerRange: 0,
		damageRadius: 0,
		favoriteTarget: Constants.any,
	},
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
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
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
				{ townHall: 5, availableCount: 0, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 0, maxLevel: 4 },
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
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined {
		const hallDetails = this.capitalHallDetails.find(
			(detail: { name: string }) => detail.name === name
		)

		if (hallDetails && level >= 1 && level <= hallDetails.levels.length) {
			return hallDetails.levels[level - 1]
		} else {
			console.error(`Invalid Capital Hall level or name: ${level} or ${name}`)
			return undefined
		}
	},
}

export default nameHere
