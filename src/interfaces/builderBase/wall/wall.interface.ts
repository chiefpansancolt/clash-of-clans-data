import Wall from '@ICommon/walls/wall.interface'
import Achievement from '@ICommon/achievement/achievement.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'
import Level from '@IBuilderBase/wall/level.interface'

interface BuilderWall extends Wall {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default BuilderWall
