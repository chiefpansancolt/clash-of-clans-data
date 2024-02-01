import Building from '@ICommon/building.interface'
import Level from '@IBuilderBase/army/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Army extends Building {
	maxCount: number
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]
	achievement?: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default Army
