import Wall from '@ICommon/walls/wall.interface'
import Achievement from '@ICommon/achievement/achievement.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Level from '@IBuilderBase/wall/level.interface'

interface BuilderWall extends Wall {
	maxCount: number
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]
	achievement?: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default BuilderWall
