import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/alter/army.interface'
import Level from '@IBuilderBase/army/alter/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const battleMachineAlter: Building = {
	name: 'Battle Machine Alter',
	description:
		"The Master Builder's prize invention smashes enemy buildings to bits. What better way is there to show who's the best builder around? Unlock the Electric Hammer ability to give opponents a real pounding!",
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 1,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 1, maxLevel: 1 },
		{ townHall: 6, availableCount: 1, maxLevel: 1 },
		{ townHall: 7, availableCount: 1, maxLevel: 1 },
		{ townHall: 8, availableCount: 1, maxLevel: 1 },
		{ townHall: 9, availableCount: 1, maxLevel: 1 },
		{ townHall: 10, availableCount: 1, maxLevel: 1 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Battle Machine',
			hitpoints: 250,
			buildCost: 900000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/BattleMachineAltar1.png/revision/latest/scale-to-width-down/120?cb=20170603193138',
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

export default battleMachineAlter
