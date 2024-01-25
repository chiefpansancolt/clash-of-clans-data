import Wall from '@ICommon/wall.interface'
import WallLevel from '@IHomeVillage/wallLevel.interface'

interface HomeWall extends Wall {
	levels: WallLevel[]

	getLevel(level: number): WallLevel | undefined
}

export default HomeWall
