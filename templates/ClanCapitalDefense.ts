import * as Constants from '../../Constats'
import { ClanCapitalLevel, TownHallDefense, ClanCapitalDefense } from '../../CommonInterfaces'

const cannon: ClanCapitalDefense = {
	name: '',
	description: '',
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
	getLevel(level: number): ClanCapitalLevel | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined {
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

export default cannon
