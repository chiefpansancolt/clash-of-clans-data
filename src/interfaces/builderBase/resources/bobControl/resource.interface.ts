import Level from '@IBuilderBase/resources/bobControl/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	maxCount: number
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]
	achievement: Achievement | Achievement[]

	getSize(): string
	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default Resource
