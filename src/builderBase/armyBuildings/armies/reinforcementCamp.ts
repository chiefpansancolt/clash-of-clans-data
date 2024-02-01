import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/armyCamp/army.interface'
import Level from '@IBuilderBase/army/armyCamp/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const reinforcementCamp: Building = {
	name: 'Reinforcement Camp',
	description:
		'Reinforcement Camps provide helpful reinforcements during battles when reaching the corresponding stage.',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl: '',
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
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 2,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 10,
			availableCount: 2,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 2,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			numberOfArymCamps: 1,
			hitpoints: 300,
			buildCost: 0,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Reinforcement_Camp.png/revision/latest?cb=20230518074638',
		},
		{
			level: 2,
			numberOfArymCamps: 2,
			hitpoints: 300,
			buildCost: 4000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Reinforcement_Camp.png/revision/latest?cb=20230518074638',
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

export default reinforcementCamp
