import Wall from '@ICommon/wall.interface'
import Level from '@IHomeVillage/wall/level.interface'

interface HomeWall extends Wall {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default HomeWall
