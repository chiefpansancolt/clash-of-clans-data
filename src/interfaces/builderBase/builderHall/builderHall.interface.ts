import Hall from '@ICommon/hall/hall.interface'
import Level from '@IBuilderBase/builderHall/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface BuilderHall extends Hall {
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default BuilderHall
