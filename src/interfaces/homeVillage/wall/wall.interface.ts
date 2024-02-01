import Wall from '@ICommon/walls/wall.interface'
import Achievement from '@ICommon/achievement/achievement.interface'
import TownHallDefense from '@IHomeVillage/townHall/details.interface'
import Level from '@IHomeVillage/wall/level.interface'

interface HomeWall extends Wall {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDefense[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
}

export default HomeWall
