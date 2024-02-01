import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/alter/army.interface'
import Level from '@IBuilderBase/army/alter/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const battleMachineAlter: Building = {
	name: 'Battle Machine Alter',
	description:
		"The Master Builder's prize invention smashes enemy buildings to bits. What better way is there to show who's the best builder around? Unlock the Electric Hammer ability to give opponents a real pounding!",
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 1,
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
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
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined {
		if (level >= 1 && level <= this.builderHallDetails.length) {
			return this.builderHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default battleMachineAlter
