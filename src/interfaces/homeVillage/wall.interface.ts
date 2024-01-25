import Wall from '../common/wall.interface'
import WallLevel from './wallLevel.interface'

interface HomeWall extends Wall {
	levels: WallLevel[]

	getLevel(level: number): WallLevel | undefined
}

export default HomeWall
