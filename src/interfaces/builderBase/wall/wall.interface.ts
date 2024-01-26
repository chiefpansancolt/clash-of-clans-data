import Wall from '@ICommon/wall.interface'
import Level from '@IBuilderBase/wall/level.interface'

interface BuilderWall extends Wall {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default BuilderWall
