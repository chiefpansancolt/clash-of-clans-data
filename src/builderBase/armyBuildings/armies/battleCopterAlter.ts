import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/alter/army.interface'
import Level from '@IBuilderBase/army/alter/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const battleCopterAlter: Building = {
	name: 'Battle Copter Alter',
	description:
		"Get to the Copter! Tired of hammering through Walls, Master Builder's next-generation flying machine lets him soar over them. The Battle Copter attacks from afar with its powerful cannons; or can get up close and personal when using its Bomb Rush ability.",
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
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
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
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Battle Copter',
			hitpoints: 250,
			buildCost: 2500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Battle_Copter_Altar.png/revision/latest/scale-to-width-down/200?cb=20230518081135',
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
			console.error(`Invalid Builder Hall level: ${level}`)
			return undefined
		}
	},
}

export default battleCopterAlter
